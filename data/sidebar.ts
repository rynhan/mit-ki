import { getPinnedProjects, getProjectLastActiveAt, projects, type Project } from "@/data/projects"
import { getPinnedThreads, threads, type Thread } from "@/data/threads"

export type SidebarThread = Thread & {
  url: string
  createdAt: number
  lastActiveAt: number
}

export type SidebarProject = Project & {
  pages: SidebarThread[]
}

export type SidebarPinnedThread = {
  id: string
  type: "thread"
  thread: SidebarThread
}

export type SidebarPinnedProject = {
  id: string
  type: "project"
  project: SidebarProject
}

export type SidebarPinnedItem = SidebarPinnedThread | SidebarPinnedProject

const toSidebarThread = (thread: Thread): SidebarThread => ({
  ...thread,
  url: `/chat/${thread.id}`,
  createdAt: new Date(thread.created_at).getTime(),
  lastActiveAt: new Date(thread.updated_at).getTime(),
})

const toSidebarProject = (project: Project): SidebarProject => ({
  ...project,
  pages: project.threads
    .map((threadId) => threads.find((thread) => thread.id === threadId))
    .filter((thread): thread is Thread => Boolean(thread))
    .map(toSidebarThread),
})

const projectThreadIds = new Set(projects.flatMap((project) => project.threads))

export type SidebarData = {
  threads: SidebarThread[]
  projects: SidebarProject[]
  pinned: SidebarPinnedItem[]
}

export const sidebarData: SidebarData = {
  // Threads assigned to a project are rendered under that project, not again in Chats.
  threads: threads
    .filter((thread) => !projectThreadIds.has(thread.id))
    .map(toSidebarThread),
  projects: projects.map(toSidebarProject),
  pinned: [
    ...getPinnedThreads().map((thread): SidebarPinnedThread => ({
      id: thread.id,
      type: "thread",
      thread: toSidebarThread(thread),
    })),
    ...getPinnedProjects().map((project): SidebarPinnedProject => ({
      id: project.id,
      type: "project",
      project: toSidebarProject(project),
    })),
  ],
}

export { getProjectLastActiveAt, getPinnedProjects, getPinnedThreads }
export type { Project, Thread }
