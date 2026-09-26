"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// Thread metadata as returned by the agent server's threads.search
// (via our /api/threads proxy).
export type AgentThread = {
  thread_id: string;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

const LIMIT = 20;

// Paginated chat history from the agent server, newest first.
// Fetch pattern (offset/limit + hasMore).
export function useThreads() {
  const [threads, setThreads] = useState<AgentThread[]>([]);
  // Starts true so the initial fetch (triggered from the effect below) never
  // calls setState synchronously — that triggers cascading renders and the
  // react-hooks lint rule. Event-handler refreshes pass showSpinner instead.
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const getThreads = useCallback(async (offset: number) => {
    const response = await axios.get<AgentThread[]>("/api/threads", {
      params: { offset, limit: LIMIT },
    });
    return response.data ?? [];
  }, []);

  const fetchThreads = useCallback(
    async (offset: number, append = false, showSpinner = false) => {
      if (showSpinner) setLoading(true);
      try {
        const newThreads = await getThreads(offset);
        setThreads((prev) => (append ? [...prev, ...newThreads] : newThreads));
        setHasMore(newThreads.length === LIMIT);
      } catch (error) {
        console.error("Error fetching threads:", error);
        if (!append) setThreads([]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [getThreads],
  );

  useEffect(() => {
    let cancelled = false;

    void getThreads(0)
      .then((newThreads) => {
        if (cancelled) return;
        setThreads(newThreads);
        setHasMore(newThreads.length === LIMIT);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        console.error("Error fetching threads:", error);
        setThreads([]);
        setHasMore(false);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [getThreads]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    void fetchThreads(threads.length, true);
  }, [loading, hasMore, threads.length, fetchThreads]);

  return {
    threads,
    loading,
    hasMore,
    loadMore,
    refresh: () => fetchThreads(0, false, true),
  };
}
