export type ThreadMessage = {
  id: string;
  role: "human" | "ai";
  content: string;
};

export type Thread = {
  id: string;
  name: string;
  summary: string;
  created_at: string;
  updated_at: string;
  is_pinned: boolean;
  is_temporary: boolean;
  chat_messages: ThreadMessage[];
};

export const threads: Thread[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Earth & Planetary Science",
    summary: "Exploring Earth's systems and place in the universe.",
    created_at: "2026-09-12T07:11:24.158161Z",
    updated_at: "2026-09-12T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000001001",
        role: "human",
        content: "Tell me something interesting about Earth.",
      },
      {
        id: "00000000-0000-4000-8000-000000001002",
        role: "ai",
        content:
          "Earth is a dynamic, interconnected planet whose atmosphere, oceans, geology, and living organisms continually influence one another.",
      },
      {
        id: "00000000-0000-4000-8000-000000001003",
        role: "human",
        content: "How did Earth become suitable for life?",
      },
      {
        id: "00000000-0000-4000-8000-000000001004",
        role: "ai",
        content:
          "Liquid water, a protective atmosphere, solar energy, and a stable climate created favorable conditions for life as we know it.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    name: "Family Recipe Collection & Meal Planning",
    summary: "Organizing recipes and planning balanced meals.",
    created_at: "2026-09-11T07:11:24.158161Z",
    updated_at: "2026-09-11T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000002001",
        role: "human",
        content: "Help me organize our family recipes.",
      },
      {
        id: "00000000-0000-4000-8000-000000002002",
        role: "ai",
        content:
          "Group recipes by meal type, preparation time, and the people who enjoy them most.",
      },
      {
        id: "00000000-0000-4000-8000-000000002003",
        role: "human",
        content: "How can I plan a balanced week of meals?",
      },
      {
        id: "00000000-0000-4000-8000-000000002004",
        role: "ai",
        content:
          "Choose a few flexible proteins, seasonal vegetables, and staple grains, then reuse ingredients across meals.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    name: "Fitness Tracker & Workout Routines",
    summary: "Building a consistent and sustainable fitness routine.",
    created_at: "2026-09-10T07:11:24.158161Z",
    updated_at: "2026-09-10T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000003001",
        role: "human",
        content: "Help me create a realistic workout routine.",
      },
      {
        id: "00000000-0000-4000-8000-000000003002",
        role: "ai",
        content:
          "A sustainable routine balances strength, mobility, recovery, and activities you genuinely enjoy.",
      },
      {
        id: "00000000-0000-4000-8000-000000003003",
        role: "human",
        content: "How should I track my progress?",
      },
      {
        id: "00000000-0000-4000-8000-000000003004",
        role: "ai",
        content:
          "Track consistency, effort, repetitions, and how you feel rather than focusing only on scale weight.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    name: "Book Notes & Reading List",
    summary: "Keeping reading notes and choosing the next book.",
    created_at: "2026-09-09T07:11:24.158161Z",
    updated_at: "2026-09-09T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000004001",
        role: "human",
        content: "How should I organize my reading notes?",
      },
      {
        id: "00000000-0000-4000-8000-000000004002",
        role: "ai",
        content:
          "Capture the main idea, memorable details, and one question or connection for every book.",
      },
      {
        id: "00000000-0000-4000-8000-000000004003",
        role: "human",
        content: "How do I choose my next book?",
      },
      {
        id: "00000000-0000-4000-8000-000000004004",
        role: "ai",
        content:
          "Choose from your interests, alternate challenging books with enjoyable ones, and keep a short prioritized list.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    name: "Sustainable Gardening Tips & Plant Care",
    summary: "Learning practical, sustainable gardening techniques.",
    created_at: "2026-09-08T07:11:24.158161Z",
    updated_at: "2026-09-08T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000005001",
        role: "human",
        content: "What are some sustainable gardening practices?",
      },
      {
        id: "00000000-0000-4000-8000-000000005002",
        role: "ai",
        content:
          "Composting, mulching, native plants, and careful watering are simple ways to make a garden more sustainable.",
      },
      {
        id: "00000000-0000-4000-8000-000000005003",
        role: "human",
        content: "What should I plant first?",
      },
      {
        id: "00000000-0000-4000-8000-000000005004",
        role: "ai",
        content:
          "Start with native plants suited to your light, soil, and local growing season.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000006",
    name: "Language Learning Progress & Resources",
    summary: "Tracking language practice and useful resources.",
    created_at: "2026-09-07T07:11:24.158161Z",
    updated_at: "2026-09-07T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000006001",
        role: "human",
        content: "How can I make steady language-learning progress?",
      },
      {
        id: "00000000-0000-4000-8000-000000006002",
        role: "ai",
        content:
          "Short daily practice across listening, speaking, reading, and writing is more effective than occasional long sessions.",
      },
      {
        id: "00000000-0000-4000-8000-000000006003",
        role: "human",
        content: "What should I practice each day?",
      },
      {
        id: "00000000-0000-4000-8000-000000006004",
        role: "ai",
        content:
          "Review vocabulary, listen to a short conversation, write a few sentences, and speak aloud for several minutes.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000007",
    name: "Home Renovation Ideas & Budget Tracker",
    summary: "Planning improvements while staying within budget.",
    created_at: "2026-09-06T07:11:24.158161Z",
    updated_at: "2026-09-06T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000007001",
        role: "human",
        content: "How should I plan a home renovation budget?",
      },
      {
        id: "00000000-0000-4000-8000-000000007002",
        role: "ai",
        content:
          "Separate essential work from upgrades, price materials early, and keep a contingency for unexpected repairs.",
      },
      {
        id: "00000000-0000-4000-8000-000000007003",
        role: "human",
        content: "What should I do before hiring someone?",
      },
      {
        id: "00000000-0000-4000-8000-000000007004",
        role: "ai",
        content:
          "Define the scope, compare written estimates, verify references, and agree on milestones before work begins.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000008",
    name: "Personal Finance & Investment Portfolio",
    summary: "Building a clear personal finance plan.",
    created_at: "2026-09-05T07:11:24.158161Z",
    updated_at: "2026-09-05T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000008001",
        role: "human",
        content: "Where should I start with a personal finance plan?",
      },
      {
        id: "00000000-0000-4000-8000-000000008002",
        role: "ai",
        content:
          "Begin with a clear view of cash flow, an emergency fund, manageable debt, and long-term goals.",
      },
      {
        id: "00000000-0000-4000-8000-000000008003",
        role: "human",
        content: "How should I approach investing?",
      },
      {
        id: "00000000-0000-4000-8000-000000008004",
        role: "ai",
        content:
          "Set goals, understand your time horizon and risk tolerance, and favor a diversified long-term plan.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000009",
    name: "Movie & TV Show Watchlist with Reviews",
    summary: "Keeping a watchlist and writing short reviews.",
    created_at: "2026-09-04T07:11:24.158161Z",
    updated_at: "2026-09-04T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000009001",
        role: "human",
        content: "How can I keep a useful movie watchlist?",
      },
      {
        id: "00000000-0000-4000-8000-000000009002",
        role: "ai",
        content:
          "Track what you want to watch, why it interests you, and a short note after viewing it.",
      },
      {
        id: "00000000-0000-4000-8000-000000009003",
        role: "human",
        content: "What makes a good short review?",
      },
      {
        id: "00000000-0000-4000-8000-000000009004",
        role: "ai",
        content:
          "Mention the premise without spoilers, what worked, what did not, and who might enjoy it.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000010",
    name: "Daily Habit Tracker & Goal Setting",
    summary: "Turning goals into small daily habits.",
    created_at: "2026-09-03T07:11:24.158161Z",
    updated_at: "2026-09-03T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000010001",
        role: "human",
        content: "How can I make goals easier to follow?",
      },
      {
        id: "00000000-0000-4000-8000-000000010002",
        role: "ai",
        content:
          "Turn each goal into a small action with a clear cue, then review progress regularly instead of aiming for perfection.",
      },
      {
        id: "00000000-0000-4000-8000-000000010003",
        role: "human",
        content: "How small should a new habit be?",
      },
      {
        id: "00000000-0000-4000-8000-000000010004",
        role: "ai",
        content:
          "Make it small enough to complete on a difficult day, then increase it only after consistency feels easy.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000011",
    name: "Coffee Brewing Techniques",
    summary: "Comparing brewing methods and dialing in better coffee.",
    created_at: "2026-09-02T07:11:24.158161Z",
    updated_at: "2026-09-02T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000011001",
        role: "human",
        content: "How can I improve my pour-over coffee?",
      },
      {
        id: "00000000-0000-4000-8000-000000011002",
        role: "ai",
        content:
          "Use freshly ground beans, consistent pouring, and adjust grind size one variable at a time.",
      },
      {
        id: "00000000-0000-4000-8000-000000011003",
        role: "human",
        content: "Why does my coffee taste bitter?",
      },
      {
        id: "00000000-0000-4000-8000-000000011004",
        role: "ai",
        content:
          "Try a coarser grind, cooler water, or a shorter brew time to reduce extraction.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000012",
    name: "Photography Composition Ideas",
    summary: "Practicing composition and finding stronger photographs.",
    created_at: "2026-09-01T07:11:24.158161Z",
    updated_at: "2026-09-01T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000012001",
        role: "human",
        content: "What are some simple composition techniques?",
      },
      {
        id: "00000000-0000-4000-8000-000000012002",
        role: "ai",
        content:
          "Try leading lines, framing, negative space, and changing your camera height before changing your equipment.",
      },
      {
        id: "00000000-0000-4000-8000-000000012003",
        role: "human",
        content: "How can I practice composition?",
      },
      {
        id: "00000000-0000-4000-8000-000000012004",
        role: "ai",
        content:
          "Choose one technique each week and make ten photos that use it in different ways.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000013",
    name: "Quick Weeknight Dinners",
    summary: "Finding simple meals for busy evenings.",
    created_at: "2026-08-31T07:11:24.158161Z",
    updated_at: "2026-08-31T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000013001",
        role: "human",
        content: "What makes a good weeknight dinner?",
      },
      {
        id: "00000000-0000-4000-8000-000000013002",
        role: "ai",
        content:
          "Choose one quick protein, one vegetable, and a flexible staple such as rice, pasta, or flatbread.",
      },
      {
        id: "00000000-0000-4000-8000-000000013003",
        role: "human",
        content: "Can you suggest a simple formula?",
      },
      {
        id: "00000000-0000-4000-8000-000000013004",
        role: "ai",
        content:
          "Cook a sheet-pan protein and vegetables while a grain or salad comes together separately.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000014",
    name: "Music Discovery and Playlists",
    summary: "Finding new music and building thoughtful playlists.",
    created_at: "2026-08-30T07:11:24.158161Z",
    updated_at: "2026-08-30T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000014001",
        role: "human",
        content: "How should I build a discovery playlist?",
      },
      {
        id: "00000000-0000-4000-8000-000000014002",
        role: "ai",
        content:
          "Start with a few anchor songs, then add related artists while keeping a consistent mood or story.",
      },
      {
        id: "00000000-0000-4000-8000-000000014003",
        role: "human",
        content: "How many songs should it have?",
      },
      {
        id: "00000000-0000-4000-8000-000000014004",
        role: "ai",
        content:
          "Begin with 20 to 30 songs so the playlist has variety without becoming difficult to curate.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000015",
    name: "Desk Setup Improvements",
    summary: "Making a workspace more comfortable and focused.",
    created_at: "2026-08-29T07:11:24.158161Z",
    updated_at: "2026-08-29T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000015001",
        role: "human",
        content: "How can I improve my desk setup?",
      },
      {
        id: "00000000-0000-4000-8000-000000015002",
        role: "ai",
        content:
          "Prioritize monitor height, comfortable lighting, clear cable paths, and keeping frequently used items within reach.",
      },
      {
        id: "00000000-0000-4000-8000-000000015003",
        role: "human",
        content: "What should I fix first?",
      },
      {
        id: "00000000-0000-4000-8000-000000015004",
        role: "ai",
        content:
          "Start with posture and screen height, then improve lighting and remove distractions from your primary work area.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000016",
    name: "Weekend Activity Ideas",
    summary: "Planning enjoyable and restorative weekends.",
    created_at: "2026-08-28T07:11:24.158161Z",
    updated_at: "2026-08-28T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000016001",
        role: "human",
        content: "What are some good low-cost weekend activities?",
      },
      {
        id: "00000000-0000-4000-8000-000000016002",
        role: "ai",
        content:
          "A walk in a new neighborhood, a library visit, cooking something unfamiliar, or a local free event can all make a good weekend.",
      },
      {
        id: "00000000-0000-4000-8000-000000016003",
        role: "human",
        content: "How can I make the weekend feel restorative?",
      },
      {
        id: "00000000-0000-4000-8000-000000016004",
        role: "ai",
        content:
          "Balance one planned activity with open time, outdoor movement, and enough space to recover before the week begins.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000017",
    name: "Podcast Recommendations",
    summary: "Finding thoughtful podcasts for commutes and walks.",
    created_at: "2026-08-27T07:11:24.158161Z",
    updated_at: "2026-08-27T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000017001",
        role: "human",
        content: "How can I find better podcasts?",
      },
      {
        id: "00000000-0000-4000-8000-000000017002",
        role: "ai",
        content:
          "Look for shows by topic and format, then sample several episodes before subscribing to the whole series.",
      },
      {
        id: "00000000-0000-4000-8000-000000017003",
        role: "human",
        content: "What should I look for in a good show?",
      },
      {
        id: "00000000-0000-4000-8000-000000017004",
        role: "ai",
        content:
          "Look for clear audio, thoughtful structure, trustworthy sources, and episodes that respect your available time.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000018",
    name: "Learning Something New",
    summary: "Choosing a manageable topic for curious exploration.",
    created_at: "2026-08-26T07:11:24.158161Z",
    updated_at: "2026-08-26T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000018001",
        role: "human",
        content: "How should I start learning a new subject?",
      },
      {
        id: "00000000-0000-4000-8000-000000018002",
        role: "ai",
        content:
          "Pick a narrow question, learn the basic vocabulary, and make a small project that demonstrates what you understand.",
      },
      {
        id: "00000000-0000-4000-8000-000000018003",
        role: "human",
        content: "How can I avoid getting overwhelmed?",
      },
      {
        id: "00000000-0000-4000-8000-000000018004",
        role: "ai",
        content:
          "Limit your first project, use one main resource, and review your progress before adding more material.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000019",
    name: "Journal Prompts for Reflection",
    summary: "Using writing prompts to reflect with more clarity.",
    created_at: "2026-08-25T07:11:24.158161Z",
    updated_at: "2026-08-25T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000019001",
        role: "human",
        content: "Can you suggest a useful journal prompt?",
      },
      {
        id: "00000000-0000-4000-8000-000000019002",
        role: "ai",
        content:
          "Write about what gave you energy today, what drained it, and one small change you want to try tomorrow.",
      },
      {
        id: "00000000-0000-4000-8000-000000019003",
        role: "human",
        content: "How often should I journal?",
      },
      {
        id: "00000000-0000-4000-8000-000000019004",
        role: "ai",
        content:
          "Choose a schedule you can keep, even if that means writing for five minutes a few times each week.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000020",
    name: "Exploring Local History",
    summary: "Discovering the history of nearby places and communities.",
    created_at: "2026-08-24T07:11:24.158161Z",
    updated_at: "2026-08-24T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000020001",
        role: "human",
        content: "How can I research local history?",
      },
      {
        id: "00000000-0000-4000-8000-000000020002",
        role: "ai",
        content:
          "Begin with local archives, library newspapers, historical maps, and conversations with long-time residents.",
      },
      {
        id: "00000000-0000-4000-8000-000000020003",
        role: "human",
        content: "How do I verify what I find?",
      },
      {
        id: "00000000-0000-4000-8000-000000020004",
        role: "ai",
        content:
          "Compare independent sources, note their dates and authors, and separate documented facts from oral traditions.",
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000021",
    name: "Thoughtful Gift Ideas",
    summary: "Choosing practical and personal gifts for friends and family.",
    created_at: "2026-08-23T07:11:24.158161Z",
    updated_at: "2026-08-23T12:26:54.941175Z",
    is_pinned: false,
    is_temporary: false,
    chat_messages: [
      {
        id: "00000000-0000-4000-8000-000000021001",
        role: "human",
        content: "How can I choose a more thoughtful gift?",
      },
      {
        id: "00000000-0000-4000-8000-000000021002",
        role: "ai",
        content:
          "Think about the person's current routines, interests, and a small problem you could help make easier.",
      },
      {
        id: "00000000-0000-4000-8000-000000021003",
        role: "human",
        content: "What if I do not know what they need?",
      },
      {
        id: "00000000-0000-4000-8000-000000021004",
        role: "ai",
        content:
          "Choose an experience, a consumable item, or a useful upgrade that reflects something they already enjoy.",
      },
    ],
  },
];

export function getPinnedThreads() {
  return threads.filter((thread) => thread.is_pinned);
}

export function getThread(threadId: string) {
  return threads.find((thread) => thread.id === threadId);
}
