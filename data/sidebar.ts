export type SidebarThread = {
  name: string
  url: string
  emoji: string
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
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  pinned: [
    {
      id: "meaningful-life",
      type: "thread",
      thread: {
        name: "What Makes a Life Meaningful?",
        url: "#",
        emoji: "🧭",
      },
    },
    {
      id: "uncertainty",
      type: "thread",
      thread: {
        name: "How Should We Face Uncertainty?",
        url: "#",
        emoji: "🌌",
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
            emoji: "🌎",
          },
          {
            name: "Shutter Speed & Aperture Techniques",
            url: "#",
            emoji: "🗺️",
          },
          {
            name: "Photo Gallery",
            url: "#",
            emoji: "",
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
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
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
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
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
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
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
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
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
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
}
