"""Title-generation graph — stateless, structured output."""

from pydantic import BaseModel, Field
from langchain.chat_models import init_chat_model
from langgraph.graph import StateGraph, START, END
from langgraph.graph.state import CompiledStateGraph


class TitleInput(BaseModel):
    message: str


class TitleOutput(BaseModel):
    title: str = Field(description="A short chat title, 3-6 words")


class TitleState(BaseModel):
    message: str
    title: str = ""


async def generate_title(state: TitleState) -> dict:
    model = init_chat_model(model="google/gemini-3.1-flash-lite", model_provider="openrouter")
    structured = model.with_structured_output(TitleOutput)
    result = await structured.ainvoke(
        [
            (
                "system",
                "Generate a concise chat title (3-6 words) for the user's message. "
                "No quotes, no trailing punctuation.",
            ),
            ("user", state.message[:500]),
        ]
    )
    return {"title": result.title}


graph: CompiledStateGraph = (
    StateGraph(TitleState, input_schema=TitleInput, output_schema=TitleOutput)
    .add_node("generate_title", generate_title)
    .add_edge(START, "generate_title")
    .add_edge("generate_title", END)
    .compile(name="title-generator")
)
