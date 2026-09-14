export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

export const dummyConversation: ChatMessage[] = [
  {
    id: "user-1",
    role: "user",
    content:
      "Tell me something interesting about Earth.",
  },
  {
    id: "assistant-1",
    role: "assistant",
    content:
      "# 🌍 Earth: Our Remarkable Home\n\nEarth is the **third planet from the Sun** and the only planet currently known to support life. It has vast oceans, a dynamic atmosphere, active geology, and an enormous variety of living organisms.\n\nWhat makes Earth especially fascinating is how these systems interact. The atmosphere affects the oceans, oceans influence climate, plants interact with the atmosphere, and geological processes continually reshape the surface.\n\n> Earth is not just a place where life exists — life and Earth have influenced each other for billions of years.",
  },
  {
    id: "user-2",
    role: "user",
    content:
      "How did Earth become suitable for life?",
  },
  {
    id: "assistant-2",
    role: "assistant",
    content:
      "## 🌎 The Major Systems of Earth\n\nScientists often describe Earth as a collection of interconnected systems. Each system has its own characteristics, but none of them exists completely independently.\n\n### The Four Major Earth Systems\n\n- **Atmosphere** — the layer of gases surrounding Earth.\n- **Hydrosphere** — Earth's water, including oceans, rivers, lakes, groundwater, and ice.\n- **Geosphere** — the solid Earth, including rocks, soil, mountains, and Earth's interior.\n- **Biosphere** — all known living organisms and the environments in which they live.\n\nThese systems constantly exchange energy and matter. For example, water can evaporate from the ocean, enter the atmosphere, fall as rain, flow through rivers, and eventually return to the ocean.\n\n***The fascinating part is the connection between them.***",
  },

  {
    id: "user-3",
    role: "user",
    content:
      "Can you explain Earth's layers?",
  },

  {
    id: "assistant-3",
    role: "assistant",
    content:
      "### 🧅 Earth's Internal Structure\n\nEarth is made of several major layers. Starting from the outside and moving inward, we can describe them as the **crust**, **mantle**, **outer core**, and **inner core**.\n\n1. **Crust** — the thin, solid outer layer where we live.\n2. **Mantle** — a much thicker layer of hot rock beneath the crust.\n3. **Outer core** — a very hot, mostly liquid metallic layer.\n4. **Inner core** — a dense, solid central region.\n\nThe movement of material inside Earth is connected to important geological processes. These processes help explain phenomena such as **volcanic activity**, earthquakes, and the movement of tectonic plates.\n\nEarth's interior may seem distant from everyday life, but it plays a major role in shaping the surface we see.",
  },

  {
    id: "user-4",
    role: "user",
    content:
      "What are some of the biggest things happening on Earth's surface?",
  },

  {
    id: "assistant-4",
    role: "assistant",
    content:
      "## 🌋 A Dynamic Planet\n\nEarth's surface is constantly changing, even when those changes happen too slowly for us to notice.\n\nSome important processes include:\n\n- 🌋 **Volcanism** — molten material can reach the surface and create new rock.\n- 🌊 **Erosion** — wind and water gradually wear down rocks and landscapes.\n- 🏔️ **Mountain building** — tectonic forces can push Earth's crust upward.\n- 🌊 **Ocean circulation** — moving seawater transports heat and nutrients.\n- 🌱 **Biological activity** — organisms can change soil, ecosystems, and even atmospheric chemistry.\n\n### A Simple Example\n\nImagine a mountain exposed to rain and wind. Over thousands or millions of years, its rocks can break down and be transported elsewhere.\n\nThat material may eventually become part of a river delta, sedimentary rock, or soil.\n\n> Small changes can become enormous when they continue for millions of years.",
  },

  {
    id: "user-5",
    role: "user",
    content:
      "Can you give me a list of things that make Earth suitable for life?",
  },

  {
    id: "assistant-5",
    role: "assistant",
    content:
      "## 🌱 Why Can Life Exist on Earth?\n\nEarth has several characteristics that make it a remarkably suitable environment for life as we know it.\n\n### Important Factors\n\n1. **Liquid water**\n   - Water participates in many biological and chemical processes.\n   - Earth has enormous quantities of water on and beneath its surface.\n\n2. **An atmosphere**\n   - The atmosphere contains gases important to life.\n   - It also influences Earth's temperature and climate.\n\n3. **A relatively stable environment**\n   - Earth's climate and geological systems operate over long periods of time.\n\n4. **Energy from the Sun**\n   - Solar energy drives many processes on Earth's surface.\n\n5. **A protective magnetic field**\n   - Earth's magnetic field helps deflect charged particles from the solar wind.\n\nThe combination of these factors is one reason Earth is such an important subject for planetary science.",
  },

  {
    id: "user-6",
    role: "user",
    content:
      "What about Earth's atmosphere?",
  },

  {
    id: "assistant-6",
    role: "assistant",
    content:
      "## 🌬️ Earth's Atmosphere\n\nEarth's atmosphere is a mixture of gases held around the planet by gravity. It is essential to many processes that make Earth's surface habitable.\n\nThe atmosphere helps regulate temperature, moves water around the planet through the water cycle, and provides gases used by living organisms.\n\n### Atmospheric Composition\n\nA simplified representation of dry air is approximately:\n\n| Gas | Approximate proportion |\n| --- | ---: |\n| Nitrogen | 78% |\n| Oxygen | 21% |\n| Other gases | ~1% |\n\nThe atmosphere also contains variable amounts of **water vapor**, along with trace gases such as carbon dioxide.\n\nIts composition and behavior are important parts of Earth's climate system.",
  },

  {
    id: "user-7",
    role: "user",
    content:
      "How does the water cycle work?",
  },

  {
    id: "assistant-7",
    role: "assistant",
    content:
      "## 💧 The Water Cycle\n\nThe water cycle describes the continuous movement of water between Earth's surface, atmosphere, and underground environments.\n\nA simplified cycle looks like this:\n\n```text\nOcean → Evaporation → Atmosphere\n                    ↓\n                 Clouds\n                    ↓\n              Precipitation\n                    ↓\n        Rivers → Groundwater → Ocean\n```\n\nIn a typical cycle, water **evaporates** from oceans, lakes, and other surfaces. Plants also release water vapor through **transpiration**.\n\nWater vapor can condense into clouds and eventually return to Earth's surface as precipitation. From there, water may flow into rivers, infiltrate the ground, freeze as ice, or eventually return to the ocean.\n\nThis cycle is one of the clearest examples of how Earth's systems are interconnected.",
  },

  {
    id: "user-8",
    role: "user",
    content:
      "Can you show me some Markdown-style examples using Earth?",
  },

  {
    id: "assistant-8",
    role: "assistant",
    content:
      "## 📝 Earth in Markdown\n\nMarkdown can make scientific information easier to organize and read.\n\nFor example, you can write **important scientific terms in bold**, or use *italics for emphasis*.\n\nYou can also combine them: ***Earth is an extraordinary planet.***\n\n### Lists\n\n- Continents\n- Oceans\n- Mountains\n- Deserts\n- Forests\n\nOr use an ordered list:\n\n1. Observe Earth.\n2. Study its systems.\n3. Understand their interactions.\n4. Protect the environment.\n\n### Inline Code\n\nA programmer might represent Earth's average surface temperature as a variable such as `earthTemperature`.\n\nYou can also write a small calculation such as `temperatureCelsius = temperatureKelvin - 273.15`.",
  },

  {
    id: "user-9",
    role: "user",
    content:
      "Can you show links and an image example too?",
  },

  {
    id: "assistant-9",
    role: "assistant",
    content:
      "## 🔗 Exploring Earth Further\n\nYou can use Markdown links to point readers toward useful resources. For example, learn more about [Earth on Wikipedia](https://en.wikipedia.org/wiki/Earth).\n\nYou can also add a link with a title, such as [NASA](https://www.nasa.gov/ \"NASA's official website\").\n\nA raw URL can also be written as <https://www.nasa.gov/>.\n\n### 🖼️ Image Example\n\nMarkdown can represent an image using alternative text and an image URL:\n\n![Earth viewed from space](https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg \"Earth from space\")\n\nThe **alt text** helps describe the image when it cannot be displayed.",
  },

  {
    id: "user-10",
    role: "user",
    content:
      "What other Markdown features could we demonstrate?",
  },

  {
    id: "assistant-10",
    role: "assistant",
    content:
      "## 🧪 A Few More Markdown Examples\n\nMarkdown also supports blockquotes, horizontal rules, escaped characters, and HTML in many Markdown implementations.\n\n> **Earth science reminder:** Earth's atmosphere, oceans, land, ice, and living organisms constantly interact.\n\n---\n\n### Escaping Characters\n\nSometimes you want Markdown characters to appear as ordinary characters instead of being interpreted as formatting.\n\nFor example:\n\n\\*This is not an italic sentence.\\*\n\nYou can also escape characters such as `#`, `+`, `-`, `[`, `]`, and `!` when necessary.\n\n### HTML\n\nSome Markdown applications allow HTML alongside Markdown:\n\n<em>Earth is constantly changing.</em>\n\n<strong>Understanding those changes helps us understand our planet.</strong>\n\nThe exact HTML support depends on the Markdown processor being used.",
  },

  {
    id: "user-11",
    role: "user",
    content:
      "Can you summarize everything we've learned?",
  },

  {
    id: "assistant-11",
    role: "assistant",
    content:
      "# 🌍 Earth: A Quick Summary\n\nEarth is a **dynamic, interconnected planet** with a complex relationship between its physical environment and living organisms.\n\n### Key Ideas\n\n- 🌎 Earth is the **third planet from the Sun**.\n- 💧 Water is found in oceans, ice, underground reservoirs, lakes, rivers, and the atmosphere.\n- 🌬️ The atmosphere regulates temperature and supports many biological processes.\n- 🌋 Geological activity continually reshapes Earth's surface.\n- 🌱 The biosphere contains an enormous diversity of life.\n- ☀️ Solar energy drives many processes at Earth's surface.\n- 🧲 Earth's magnetic field helps protect the planet from the solar wind.\n\n> The most important idea is that Earth's systems are **connected**. Changes in one system can influence many others.\n\n---\n\nIf you want to understand Earth more deeply, a useful approach is to study it from several perspectives: **geology**, *climate science*, **oceanography**, *ecology*, and **astronomy*.\n\nThat combination gives us a much better picture of how our planet works.",
  },
];