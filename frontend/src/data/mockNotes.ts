import type { Note } from "@/types/notes";

export const mockNoteDB: Note[] = [
  {
    _id: "60d0fe4f5311236168a109cb",
    title: "A Bewildering Take on the Meaning Of Life",
    content: `<p>In search of meaning, I go through this desert of meaninglessness. In search of meaning, I leave the pleasures of this hedonistic palm grove. I go far and wide in this search. I pass through cities; inhabited and abandoned. I pass through ruins, forests, and jungles.</p>
    <img src="/placeholder.svg?height=300&width=600" alt="Desert landscape" />
    <p>I cross mighty rivers of great thoughts with their beautiful greenery to search for my meaning. I climb high mountains of ever snow where no human thought can live and which are crossed by wanderers only with coats and sealskins of humility and awe. I cross all these paths in search of my meaning but where is it that I seek?</p>
    <p>Perhaps it is the sun rising and setting on me every day. Yet in the snow of these high mountains, the heat of the sun is very weak. In the forests and jungles, the sun barely shows its face in the day. In the rivers, I am too busy swimming. In the desert, its scorching heat is too intense for me to seek it. I need a moderate thought climate but it is nowhere to be found. What should I do?</p>
    <p>I seek the sun! Oh, I seek the sun! but woe on me that I can't seek it. My eyes are too weak to really see its bright face. My legs are too weak to travel with it on its journey. I am powerless in front of it. I am humbled by its greatness and yet I can't seek it. What should I do? What should I do?</p>
    <p>Wait! What do I do at night? Nothing. I sleep. Why not do something different? Okay, I will seek the sun in the night. (laughter) Are you going mad? Who seeks the sun in the night? I will be the first one to do so!</p>`,
    tags: ["philosophy", "life", "meaning", "search"],
    category: "Recent",
    isPinned: true,
    isPublic: true,
    userId: "user123",
    createdAt: new Date("2023-05-10T10:00:00.000Z"),
    updatedAt: new Date("2023-05-10T10:05:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109cc",
    title: "First meet up with George",
    content:
      "A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, \"What's your favourite animal?\" But this time was different. When she heard the young boy's answer...",
    tags: ["personal", "meeting", "story"],
    category: "Recent",
    isPinned: false,
    isPublic: false,
    userId: "user123",
    createdAt: new Date("2023-08-15T14:30:00.000Z"),
    updatedAt: new Date("2023-08-15T14:30:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109cd",
    title: "A general API helper programming language",
    content:
      "To better explain the project description I firstly need to tell the problem I have. The problem is that I need to interact with many different APIs, each with its own authentication mechanism, request/response format, and error handling. This makes it tedious and error-prone to write code that consumes these APIs.",
    tags: ["programming", "api", "development", "project"],
    category: "Recent",
    isPinned: false,
    isPublic: true,
    userId: "user456",
    createdAt: new Date("2023-01-20T09:00:00.000Z"),
    updatedAt: new Date("2023-01-22T11:20:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109ce",
    title: "From desktop - My Travel Plans",
    content:
      "Planning a trip to Japan for next spring. Need to book flights and accommodation. Also, research visa requirements.",
    tags: ["travel", "japan", "planning"],
    category: "Recent",
    isPinned: true,
    isPublic: false,
    userId: "user123",
    createdAt: new Date("2023-10-01T18:45:00.000Z"),
    updatedAt: new Date("2023-10-05T09:15:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109cf",
    title: "Recipe: Vegan Chocolate Cake",
    content:
      "Ingredients: Flour, sugar, cocoa powder, baking soda, salt, almond milk, apple cider vinegar, vanilla extract, vegetable oil. Instructions: Mix dry ingredients. Mix wet ingredients. Combine. Bake at 350°F for 30-35 minutes.",
    tags: ["recipe", "vegan", "baking", "dessert"],
    category: "Recent",
    isPinned: false,
    isPublic: true,
    userId: "user789",
    createdAt: new Date("2022-11-05T12:00:00.000Z"),
    updatedAt: new Date("2022-11-05T12:00:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109d0",
    title: "Book Review: The Silent Patient",
    content:
      "A gripping psychological thriller with a twist I didn't see coming. Highly recommend for fans of the genre. The character development was excellent, and the pacing kept me hooked until the very end.",
    tags: ["books", "review", "thriller", "reading"],
    category: "Recent",
    isPinned: false,
    isPublic: true,
    userId: "user456",
    createdAt: new Date("2023-09-25T16:20:00.000Z"),
    updatedAt: new Date("2023-09-26T10:00:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109d1",
    title: "Learning TypeScript: Day 5",
    content:
      "Today I focused on interfaces and types. It's starting to click how they help in building more robust applications. Also explored utility types like Partial and Readonly.",
    tags: ["typescript", "learning", "programming", "webdev"],
    category: "Recent",
    isPinned: false,
    isPublic: false,
    userId: "user123",
    createdAt: new Date("2023-10-28T08:00:00.000Z"),
    updatedAt: new Date("2023-10-28T17:30:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109d2",
    title: "Project Ideas Brainstorm",
    content:
      "1. Personal finance tracker. 2. Recipe sharing platform. 3. AI-powered blog post generator. 4. Local events aggregator.",
    tags: ["ideas", "project", "brainstorming"],
    category: "Recent",
    isPinned: true,
    isPublic: false,
    userId: "user789",
    createdAt: new Date("2023-07-11T11:10:00.000Z"),
    updatedAt: new Date("2023-07-12T15:00:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109d3",
    title: "Fitness Goals for November",
    content:
      "Run 3 times a week. Go to the gym twice a week. Drink 2L of water daily. No sugary drinks.",
    tags: ["fitness", "health", "goals", "november"],
    category: "Recent",
    isPinned: false,
    isPublic: false,
    userId: "user123",
    createdAt: new Date("2023-10-30T07:00:00.000Z"),
    updatedAt: new Date("2023-10-30T07:00:00.000Z"),
  },
  {
    _id: "60d0fe4f5311236168a109d4",
    title: "Public Note: Thoughts on Remote Work",
    content:
      "Remote work offers flexibility but requires discipline. Key to success: clear communication, defined work hours, and a dedicated workspace. It's important for companies to foster a sense of community among remote employees.",
    tags: ["work", "remote", "productivity", "opinion"],
    category: "Recent",
    isPinned: false,
    isPublic: true,
    userId: "user456",
    createdAt: new Date("2023-06-01T13:00:00.000Z"),
    updatedAt: new Date("2023-06-02T09:30:00.000Z"),
  },
];
