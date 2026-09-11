export type SidebarThread = {
  name: string
  url: string
  createdAt: number
  lastActiveAt: number
}

export type SidebarProject = {
  name: string
  emoji: string
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

export const sidebarData: {
  threads: SidebarThread[]
  pinned: SidebarPinnedItem[]
  projects: SidebarProject[]
} = {
  threads: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      createdAt: 1711929600000,
      lastActiveAt: 1757462400000,
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      createdAt: 1714521600000,
      lastActiveAt: 1757376000000,
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      createdAt: 1717200000000,
      lastActiveAt: 1757289600000,
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      createdAt: 1719792000000,
      lastActiveAt: 1757203200000,
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      createdAt: 1722470400000,
      lastActiveAt: 1757116800000,
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      createdAt: 1725148800000,
      lastActiveAt: 1757030400000,
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      createdAt: 1727740800000,
      lastActiveAt: 1756944000000,
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      createdAt: 1730419200000,
      lastActiveAt: 1756857600000,
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      createdAt: 1733011200000,
      lastActiveAt: 1756771200000,
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      createdAt: 1735689600000,
      lastActiveAt: 1756684800000,
    },
  ],
  pinned: [
    {
      id: "meaningful-life",
      type: "thread",
      thread: {
        name: "What Makes a Life Meaningful?",
        url: "#",
        createdAt: 1719792000000,
        lastActiveAt: 1757462400000,
      },
    },
    {
      id: "uncertainty",
      type: "thread",
      thread: {
        name: "How Should We Face Uncertainty?",
        url: "#",
        createdAt: 1722470400000,
        lastActiveAt: 1757376000000,
      },
    },
    {
      id: "photography",
      type: "project",
      project: {
        name: "Photography",
        emoji: "📸",
        pages: [
          {
            name: "Lighting & Composition Tips",
            url: "#",
            createdAt: 1725148800000,
            lastActiveAt: 1757289600000,
          },
          {
            name: "Shutter Speed & Aperture Techniques",
            url: "#",
            createdAt: 1727740800000,
            lastActiveAt: 1757203200000,
          },
          {
            name: "Photo Gallery",
            url: "#",
            createdAt: 1730419200000,
            lastActiveAt: 1757116800000,
          },
        ],
      }
    }
  ],
  projects: [
    {
      name: "Personal Life Management",
      emoji: "📔",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          createdAt: 1733011200000,
          lastActiveAt: 1757030400000,
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          createdAt: 1735689600000,
          lastActiveAt: 1756944000000,
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          createdAt: 1738368000000,
          lastActiveAt: 1756857600000,
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          createdAt: 1740960000000,
          lastActiveAt: 1756771200000,
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          createdAt: 1743638400000,
          lastActiveAt: 1756684800000,
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          createdAt: 1746230400000,
          lastActiveAt: 1756598400000,
        },
      ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          createdAt: 1748908800000,
          lastActiveAt: 1756512000000,
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          createdAt: 1751500800000,
          lastActiveAt: 1756425600000,
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          createdAt: 1754179200000,
          lastActiveAt: 1756339200000,
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          createdAt: 1756771200000,
          lastActiveAt: 1756252800000,
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          createdAt: 1756857600000,
          lastActiveAt: 1756166400000,
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          createdAt: 1756944000000,
          lastActiveAt: 1756080000000,
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          createdAt: 1757030400000,
          lastActiveAt: 1755993600000,
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          createdAt: 1757116800000,
          lastActiveAt: 1755907200000,
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          createdAt: 1757203200000,
          lastActiveAt: 1755820800000,
        },
      ],
    },
  ],
}
