import { NextRequest, NextResponse } from "next/server";
import { Client } from "@langchain/langgraph-sdk";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Stateless run of the title_generator graph, then patch the result
// into the thread's metadata.thread_name.
export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { threadId, message } = (await request.json()) as {
    threadId?: string;
    message?: string;
  };
  if (!threadId || !message) {
    return NextResponse.json(
      { error: "threadId and message are required" },
      { status: 400 },
    );
  }

  const client = new Client({
    apiUrl: process.env.AGENT_API_URL ?? "http://localhost:2026",
  });

  try {
    // null thread_id = stateless run (ephemeral thread, auto-deleted).
    const output = await client.runs.wait(null, "title_generator", {
      input: { message },
    });
    const title = (output as { title?: string }).title;
    if (!title) throw new Error("No title in output");

    const thread = await client.threads.update(threadId, {
      metadata: { thread_name: title },
    });
    return NextResponse.json(thread);
  } catch (error) {
    console.error("Error generating thread title:", error);
    return NextResponse.json(
      { error: "Failed to generate title" },
      { status: 500 },
    );
  }
}
