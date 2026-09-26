import { NextRequest, NextResponse } from "next/server";
import { Client } from "@langchain/langgraph-sdk";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Proxy thread listing to the Aegra agent server. `/api/v1/threads` route
// The browser never talks to the agent server directly, so the agent URL stays server-side.
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = Number.parseInt(searchParams.get("offset") ?? "0", 10);
  const limit = Number.parseInt(searchParams.get("limit") ?? "20", 10);

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = new Client({
    apiUrl: process.env.AGENT_API_URL ?? "http://localhost:2026",
  });

  try {
    const threads = await client.threads.search({
      limit,
      offset,
      sortBy: "updated_at",
      sortOrder: "desc",
      select: ["thread_id", "metadata", "created_at", "updated_at"],
    });
    return NextResponse.json(threads);
  } catch (error) {
    console.error("Error listing threads:", error);
    return NextResponse.json(
      { error: "Failed to list threads" },
      { status: 500 },
    );
  }
}
