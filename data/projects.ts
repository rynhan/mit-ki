import { threads, type Thread } from "@/data/threads";

export type Project = {
  id: string;
  name: string;
  summary: string;
  emoji: string;
  created_at: string;
  updated_at: string;
  is_pinned: boolean;
  threads: string[];
};

export const projects: Project[] = [
  {
    id: "project-personal-life",
    name: "Personal Life Management",
    summary: "Organizing routines, health, and personal growth.",
    emoji: "📔",
    created_at: "2026-09-01T07:11:24.158161Z",
    updated_at: "2026-09-12T12:26:54.941175Z",
    is_pinned: false,
    threads: [
      "00000000-0000-4000-8000-000000000010",
      "00000000-0000-4000-8000-000000000003",
      "00000000-0000-4000-8000-000000000008",
    ],
  },
  {
    id: "project-professional-development",
    name: "Professional Development",
    summary: "Tracking career objectives and learning goals.",
    emoji: "💼",
    created_at: "2026-08-28T07:11:24.158161Z",
    updated_at: "2026-09-11T12:26:54.941175Z",
    is_pinned: false,
    threads: [
      "00000000-0000-4000-8000-000000000006",
      "00000000-0000-4000-8000-000000000004",
    ],
  },
  {
    id: "project-creative-projects",
    name: "Creative Projects",
    summary: "Collecting writing, art, and creative ideas.",
    emoji: "🎨",
    created_at: "2026-08-25T07:11:24.158161Z",
    updated_at: "2026-09-10T12:26:54.941175Z",
    is_pinned: false,
    threads: ["00000000-0000-4000-8000-000000000009"],
  },
  {
    id: "project-home-management",
    name: "Home Management",
    summary: "Keeping household planning and maintenance organized.",
    emoji: "🏡",
    created_at: "2026-08-20T07:11:24.158161Z",
    updated_at: "2026-09-09T12:26:54.941175Z",
    is_pinned: false,
    threads: [
      "00000000-0000-4000-8000-000000000007",
      "00000000-0000-4000-8000-000000000005",
      "00000000-0000-4000-8000-000000000002",
    ],
  },
  {
    id: "project-travel-adventure",
    name: "Travel & Adventure",
    summary: "Planning future trips and collecting inspiration.",
    emoji: "🧳",
    created_at: "2026-08-15T07:11:24.158161Z",
    updated_at: "2026-09-08T12:26:54.941175Z",
    is_pinned: false,
    threads: ["00000000-0000-4000-8000-000000000001"],
  },
];

export function getPinnedProjects() {
  return projects.filter((project) => project.is_pinned);
}

export function getProjectThreads(project: Project): Thread[] {
  return project.threads
    .map((threadId) => threads.find((thread) => thread.id === threadId))
    .filter((thread): thread is Thread => Boolean(thread));
}

export function getProjectLastActiveAt(project: Project) {
  return new Date(project.updated_at).getTime();
}
