export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

type MilestonePost = Omit<BlogPost, "slug" | "date" | "readTime"> & {
  slug?: string;
  readTime?: string;
};

const sourdoughImage = "/brand/blog/sourdough-bread.png";
const frescasImage = "/brand/blog/aguas-frescas-horchata.png";
const bakeryImage = "/brand/blog/mexican-southern-bakery.png";

const journalEndDate = "2026-05-14";

const monthThemes = {
  "01": {
    category: "Founder Journal",
    image: bakeryImage,
    imageAlt: "Early bakery notes with sourdough and aguas frescas",
    title: "Daily Founder Note",
    focus: "the first shape of Madre Frescas",
    work:
      "Luis and Rachel kept coming back to the same idea: Mexican freshness, Southern Kentucky baking, and a small Austin food brand people could understand quickly.",
    photo:
      "Recreate this photo with a notebook, coffee, flour, cinnamon sticks, and two empty glasses on a kitchen table.",
  },
  "02": {
    category: "Naming",
    image: frescasImage,
    imageAlt: "Aguas frescas and sourdough on a table",
    title: "Naming and Brand Notes",
    focus: "the Madre Frescas name and brand story",
    work:
      "The month was about finding language that could hold sourdough, aguas frescas, coffee, and healthier sweets without making the brand feel too narrow.",
    photo:
      "Recreate this photo with name ideas on paper, a laptop, a glass of horchata, and a loaf cooling nearby.",
  },
  "03": {
    category: "Recipe Testing",
    image: sourdoughImage,
    imageAlt: "Sliced sourdough bread on a bakery table",
    title: "Recipe Testing Note",
    focus: "sourdough, horchata, hibiscus, and menu testing",
    work:
      "March became the testing month, with notes on bread texture, drink sweetness, cinnamon balance, hibiscus brightness, and what should be available first.",
    photo:
      "Recreate this photo with dough, a scored loaf, hibiscus tea, horchata ingredients, and tasting notes.",
  },
  "04": {
    category: "Menu Progress",
    image: bakeryImage,
    imageAlt: "Bakery samples and drinks on a table",
    title: "Menu Progress Note",
    focus: "the first full Madre Frescas menu",
    work:
      "April was about making the menu feel complete: organic sourdough, aguas frescas, coffee, sourdough bagels, healthy sweet treats, and event-friendly options.",
    photo:
      "Recreate this photo with a tasting table, sliced bread, drinks, cinnamon rolls, oat bites, crackers, and handwritten feedback.",
  },
  "05": {
    category: "Launch Journal",
    image: bakeryImage,
    imageAlt: "Sourdough, aguas frescas, coffee, and pastries on a table",
    title: "Launch Week Note",
    focus: "website launch, preorders, and local SEO",
    work:
      "May was focused on making Madre Frescas look ready for customers with a website, preorder flow, Google setup, social posts, and a clear Austin brand story.",
    photo:
      "Recreate this photo with the website open on a laptop, the logo nearby, sourdough, aguas frescas, and a printed menu draft.",
  },
} as const;

const milestonePosts: Record<string, MilestonePost> = {
  "2026-01-01": {
    title: "Starting 2026 With a Food Brand Idea",
    excerpt:
      "Luis and Rachel began the year with the first serious conversation about building a food brand together in Austin.",
    category: "Founder Journal",
    image: bakeryImage,
    imageAlt: "Early bakery notes with sourdough and aguas frescas",
    keywords: ["Madre Frescas", "Austin bakery idea", "Mexican Southern food brand"],
    sections: [
      {
        heading: "The first note of the year",
        body:
          "The year started with a simple question: what would it look like if Luis and Rachel built a food brand around both of their roots? The first notes were not polished yet, but they kept pointing toward fresh drinks, homemade baking, and something made for Austin.",
      },
      {
        heading: "Two food memories",
        body:
          "Luis kept coming back to Mexican aguas frescas, cinnamon, hibiscus, and fresh flavor. Rachel kept coming back to Southern Kentucky baking, sourdough, and the kind of comfort food that feels made to share.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use a kitchen table with a notebook dated January 1, a pen, flour, cinnamon sticks, coffee, and two empty glasses waiting for aguas frescas.",
      },
    ],
  },
  "2026-01-05": {
    title: "The First Madre Frescas Idea",
    excerpt:
      "The idea started becoming more real as sourdough, aguas frescas, and healthier sweets began to feel like one brand.",
    category: "Founder Journal",
    image: bakeryImage,
    imageAlt: "Early bakery notes with sourdough and aguas frescas",
    keywords: ["Madre Frescas", "Austin bakery idea", "sourdough and aguas frescas"],
    sections: [
      {
        heading: "A conversation that kept coming back",
        body:
          "The idea kept returning because it felt personal. It was not just a bakery and not just a drink stand. It was a way to put Luis and Rachel's backgrounds on one table.",
      },
      {
        heading: "The early shape",
        body:
          "The first version included sourdough, aguas frescas, coffee, and sweets that could work for pickups, brunches, and gatherings. Austin felt like the right city for a food idea with a clear story.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Recreate this post with a notebook, early menu words, a loaf, a glass of hibiscus, and natural window light.",
      },
    ],
  },
  "2026-01-12": {
    title: "Why Sourdough and Aguas Frescas Started to Make Sense",
    excerpt:
      "The mix of slow bread and bright fresh drinks gave Madre Frescas a direction that felt memorable.",
    category: "Brand Story",
    image: bakeryImage,
    imageAlt: "Sourdough and aguas frescas arranged together",
    keywords: ["sourdough and aguas frescas", "Austin food idea", "Mexican Southern bakery"],
    sections: [
      {
        heading: "The contrast worked",
        body:
          "Sourdough is warm, patient, and baked. Aguas frescas are cold, bright, and refreshing. Together they gave the brand a contrast that felt different but still easy to understand.",
      },
      {
        heading: "A brand people can remember",
        body:
          "The more we talked about it, the more the idea became clear: fresh bread, fresh drinks, and healthy sweet treats for Austin pickups, office drops, weekend gatherings, and events.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Place a loaf on one side, two colorful aguas frescas on the other, and a notebook in the middle with early menu ideas.",
      },
    ],
  },
  "2026-01-24": {
    title: "First Sourdough Starter Notes",
    excerpt:
      "The sourdough starter became the symbol behind the Madre side of Madre Frescas.",
    category: "Sourdough",
    image: sourdoughImage,
    imageAlt: "Sourdough bread and starter notes on a table",
    keywords: ["sourdough starter Austin", "sourdough mother", "naturally leavened bread"],
    sections: [
      {
        heading: "A living starting point",
        body:
          "A sourdough starter is simple, but it asks for attention. Feeding it, watching it rise, and learning its timing became a good symbol for the brand we wanted to build carefully.",
      },
      {
        heading: "Why naturally leavened bread",
        body:
          "Naturally leavened bread has texture and flavor that come from time. That fit the direction of Madre Frescas: real ingredients, fresh flavor, and food that does not feel rushed.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use a clear jar of sourdough starter, a spoon, flour, a kitchen towel, and one simple handwritten starter note.",
      },
    ],
  },
  "2026-02-03": {
    title: "Choosing the Name Madre Frescas",
    excerpt:
      "The name started to click: Madre for the sourdough mother and Frescas for fresh drinks, fresh ingredients, and a fresh direction.",
    category: "Naming",
    image: frescasImage,
    imageAlt: "Aguas frescas and sourdough on a table",
    keywords: ["Madre Frescas", "sourdough mother starter", "Austin food brand name"],
    sections: [
      {
        heading: "The name had to hold both sides",
        body:
          "We needed a name that could hold sourdough, aguas frescas, healthy sweets, coffee, and events without sounding too narrow. Madre Frescas gave us room to grow while still feeling rooted and memorable.",
      },
      {
        heading: "What Madre means to us",
        body:
          "Madre points to the sourdough mother, the starter that gives bread life. It also carries warmth, care, and family, which fits the feeling we wanted behind the food.",
      },
      {
        heading: "What Frescas adds",
        body:
          "Frescas points to aguas frescas, fresh ingredients, and the lighter direction of the brand. Together, the words tell customers that this is bread, drinks, and comfort with a fresh point of view.",
      },
    ],
  },
  "2026-02-14": {
    title: "Luis, Rachel, and the Story Behind Madre Frescas",
    excerpt:
      "The brand started with Luis's Mexican roots, Rachel's Southern Kentucky baking, and the idea of bringing both traditions to one Austin table.",
    category: "Brand Story",
    image: bakeryImage,
    imageAlt: "Bakery table with sourdough, aguas frescas, and coffee",
    keywords: ["Mexican Southern bakery Austin", "Madre Frescas story", "Austin bakery founders"],
    sections: [
      {
        heading: "Two roots, one table",
        body:
          "Madre Frescas is personal for us. Luis brings Mexican flavors, aguas frescas, cinnamon, hibiscus, and a love for fresh drinks. Rachel brings Southern Kentucky baking, comfort, and the kind of homemade food people remember.",
      },
      {
        heading: "Why Austin made sense",
        body:
          "Austin is a city that understands food with a story. It is local, creative, health-aware, and open to brands that mix tradition with something new.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use Luis and Rachel at a kitchen table with a loaf of sourdough, two aguas frescas, and simple ingredients from both sides of the brand.",
      },
    ],
  },
  "2026-02-24": {
    title: "Sketching the First Madre Frescas Menu",
    excerpt:
      "Before the menu had final prices, Luis and Rachel mapped the first ideas: sourdough, aguas frescas, coffee, bagels, and healthier sweets.",
    category: "Menu Planning",
    image: bakeryImage,
    imageAlt: "Sourdough, drinks, and pastries arranged on a table",
    keywords: ["Austin bakery menu", "sourdough and aguas frescas", "healthy sweets Austin"],
    sections: [
      {
        heading: "What belongs on the first menu",
        body:
          "The first menu had to be focused enough to launch but flexible enough to grow. Organic sourdough, aguas frescas, coffee, sourdough bagels, and healthy sweet treats gave the brand a clear shape.",
      },
      {
        heading: "Available versus rotating",
        body:
          "Not every idea needed to be available on day one. Separating current items from rotating items helped keep the preorder experience honest while still showing where the brand is going.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use a handwritten menu draft, a laptop, coffee, and ingredient bowls for cinnamon, hibiscus, flour, oats, and dark chocolate.",
      },
    ],
  },
  "2026-03-04": {
    title: "March Was for Sourdough Recipe Testing",
    excerpt:
      "Rachel's baking skills and a lot of trial notes helped shape the sourdough direction for Madre Frescas.",
    category: "Sourdough",
    image: sourdoughImage,
    imageAlt: "Sliced sourdough bread on a bakery table",
    keywords: ["Austin sourdough bread", "organic sourdough Austin", "sourdough preorder Austin"],
    sections: [
      {
        heading: "The loaf had to carry the brand",
        body:
          "Sourdough is one of the anchors of Madre Frescas, so March became a month for testing structure, crust, crumb, and flavor. A good loaf needed to feel homemade but consistent enough for preorders.",
      },
      {
        heading: "A Southern baking foundation",
        body:
          "Rachel's baking background gave the bread side of the brand its comfort. The goal was to make sourdough that could work for toast, brunch boards, event spreads, and everyday slices.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use dough in a bowl, flour on the counter, a scored loaf before baking, and a finished sliced loaf in the same frame.",
      },
    ],
  },
  "2026-03-12": {
    title: "Building a Horchata With Natural Sugar Alternatives",
    excerpt:
      "Luis worked through a lighter horchata direction that still keeps the cinnamon comfort people expect.",
    category: "Aguas Frescas",
    image: frescasImage,
    imageAlt: "Creamy horchata beside hibiscus agua fresca",
    keywords: ["horchata Austin", "natural sugar alternatives", "aguas frescas with less sugar"],
    sections: [
      {
        heading: "Keeping the comfort",
        body:
          "Horchata has to feel creamy, cinnamon-forward, and familiar. The challenge was finding a lighter direction without losing the comfort that makes horchata worth ordering in the first place.",
      },
      {
        heading: "A better fit for the brand",
        body:
          "Natural sugar alternatives made sense because Madre Frescas is not trying to be an ordinary sweets-and-drinks brand. The goal is fresh flavor, real ingredients, and drinks that people can enjoy more often.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use cinnamon sticks, rice, a glass of horchata over ice, and a small card with recipe testing notes beside it.",
      },
    ],
  },
  "2026-03-22": {
    title: "Testing Hibiscus Agua Fresca for Austin Heat",
    excerpt:
      "Hibiscus became one of the first available drinks because it is bright, floral, refreshing, and easy to pair with sourdough.",
    category: "Aguas Frescas",
    image: frescasImage,
    imageAlt: "Hibiscus agua fresca and horchata in glasses",
    keywords: ["hibiscus agua fresca Austin", "aguas frescas Austin", "naturally sweetened drinks Austin"],
    sections: [
      {
        heading: "Bright color, clean finish",
        body:
          "Hibiscus agua fresca quickly felt right for Madre Frescas. It has a deep ruby color, a tart floral flavor, and the kind of refreshing finish that works especially well in Austin weather.",
      },
      {
        heading: "Balancing sweetness",
        body:
          "The drink needed enough sweetness to feel complete without becoming heavy. The goal was a fresher profile that could sit next to sourdough, cinnamon, coffee, and healthier sweets.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use dried hibiscus, a glass pitcher, ice, citrus slices, and a finished ruby drink near a loaf or cinnamon roll.",
      },
    ],
  },
  "2026-03-30": {
    title: "The First Feedback That Helped the Menu Make Sense",
    excerpt:
      "Early tasting notes helped Luis and Rachel understand what people remembered most about Madre Frescas.",
    category: "Taste Testing",
    image: bakeryImage,
    imageAlt: "Bakery samples and drinks on a table",
    keywords: ["Austin food brand", "bakery taste testing", "Madre Frescas menu"],
    sections: [
      {
        heading: "Listening before launching",
        body:
          "Before the site launched, the most useful feedback was simple: people remembered the mix of sourdough and aguas frescas. That told us the concept was different enough to stand out but still easy to understand.",
      },
      {
        heading: "What needed work",
        body:
          "Some items needed better names, cleaner descriptions, or more testing before they belonged on the preorder list. That is why the menu now separates what is available today from rotating items.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use a notebook, tasting spoons, small drink samples, sliced bread, and simple handwritten feedback notes.",
      },
    ],
  },
  "2026-04-06": {
    title: "Healthy Sweet Treats With Real Ingredients",
    excerpt:
      "How Madre Frescas started shaping sourdough cinnamon rolls, dark chocolate oat bites, and lighter bakery treats.",
    category: "Healthy Sweet Treats",
    image: bakeryImage,
    imageAlt: "Small batch pastries and sourdough on a bakery table",
    keywords: ["healthy sweet treats Austin", "sourdough cinnamon rolls", "dark chocolate oat bites"],
    sections: [
      {
        heading: "Sweet without feeling heavy",
        body:
          "The sweet side of Madre Frescas needed to feel special without turning into a heavy dessert menu. That is why the ideas moved toward sourdough cinnamon rolls, dark chocolate oat bites, and treats that still fit the fresh direction of the brand.",
      },
      {
        heading: "Rachel's baking instincts",
        body:
          "Rachel's Southern baking background helped shape the comfort side of the menu. The goal was not to remove the joy from sweets, but to make them feel thoughtful, homemade, and easier to pair with bread, coffee, or aguas frescas.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use cinnamon rolls on parchment, lighter cream cheese frosting, dark chocolate oat bites, and a few simple ingredients around them.",
      },
    ],
  },
  "2026-04-15": {
    title: "Thinking Through Coffee, Bagels, and Brunch Orders",
    excerpt:
      "Why coffee and sourdough bagels became part of the long-term Madre Frescas menu for Austin preorder mornings.",
    category: "Menu Planning",
    image: sourdoughImage,
    imageAlt: "Sourdough bread on a bakery table",
    keywords: ["Austin brunch preorder", "sourdough bagels Austin", "coffee and sourdough Austin"],
    sections: [
      {
        heading: "A morning menu makes sense",
        body:
          "Sourdough, coffee, and aguas frescas naturally point toward breakfast, brunch, office drops, and weekend gatherings. Bagels became part of that conversation because they make the menu feel easy to order in groups.",
      },
      {
        heading: "Keeping it focused",
        body:
          "We did not want coffee and bagels to distract from the core of Madre Frescas. The idea is to keep them simple, fresh, and useful for customers who want one order that covers bread, drinks, and something easy to share.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use bagels on a cooling rack, a small cup of coffee, a sliced loaf nearby, and a simple linen or wood background.",
      },
    ],
  },
  "2026-04-24": {
    title: "Our First Full Menu Taste Test",
    excerpt:
      "A late-April menu test helped us think through sourdough, horchata, hibiscus, coffee, bagels, and healthier sweets together.",
    category: "Taste Testing",
    image: bakeryImage,
    imageAlt: "Sourdough and drinks arranged for a tasting",
    keywords: ["Austin bakery taste test", "sourdough menu testing", "healthy sweets Austin"],
    sections: [
      {
        heading: "Putting the menu on one table",
        body:
          "By late April, the goal was to see the whole menu together instead of testing one idea at a time. A loaf, a drink, a coffee idea, and a sweet treat need to feel like they belong to the same brand.",
      },
      {
        heading: "What we learned",
        body:
          "The best items had a clear job. Sourdough brought comfort, aguas frescas brought brightness, coffee brought an everyday ritual, and healthier sweets gave people something special without feeling too heavy.",
      },
      {
        heading: "Photo idea to recreate",
        body:
          "Use a tasting table with sliced sourdough, two aguas frescas, one coffee drink, cinnamon rolls, dark chocolate oat bites, and handwritten notes.",
      },
    ],
  },
  "2026-05-05": {
    title: "Building the Madre Frescas Website",
    excerpt:
      "How the Madre Frescas website came together with SEO, preorder details, menu structure, and a brand story for Austin customers.",
    category: "Website",
    image: bakeryImage,
    imageAlt: "Bakery table with sourdough, aguas frescas, and coffee",
    keywords: ["Austin bakery website", "Madre Frescas preorder", "sourdough aguas frescas Austin"],
    sections: [
      {
        heading: "A place for the brand to live",
        body:
          "By May, we knew Madre Frescas needed more than a social page. The website became the home for the brand story, preorder menu, events, blog posts, and local search terms that help people understand what we make.",
      },
      {
        heading: "Designed for preorders",
        body:
          "The preorder form was built around a simple idea: customers should be able to see what is available now, what is rotating, and how to ask about events or larger orders. That matters for a young food brand because clarity builds trust.",
      },
      {
        heading: "SEO from the beginning",
        body:
          "We built the content around Austin sourdough, aguas frescas, coffee, healthy sweet treats, Mexican-Southern baking, and event preorders. Those phrases describe the brand clearly and help Google understand what Madre Frescas offers.",
      },
    ],
  },
  "2026-05-12": {
    title: "Madre Frescas Is Live in Austin",
    excerpt:
      "Luis and Rachel launched Madre Frescas as an Austin preorder brand for sourdough, aguas frescas, coffee, and healthy sweet treats.",
    category: "Launch Journal",
    image: bakeryImage,
    imageAlt: "Sourdough, aguas frescas, coffee, and pastries on a table",
    keywords: ["Madre Frescas Austin", "Austin sourdough preorder", "aguas frescas Austin"],
    sections: [
      {
        heading: "The site is finally live",
        body:
          "After months of notes, testing, naming, and building, Madre Frescas is officially live. The site gives people a place to learn the story, see the menu, and send preorder requests for sourdough, aguas frescas, coffee, healthy sweet treats, and events in Austin.",
      },
      {
        heading: "What we are starting with",
        body:
          "The first available menu focuses on organic sourdough bread, horchata, and hibiscus agua fresca while the rest of the menu continues to rotate through testing. That gives us a strong starting point without rushing every idea before it is ready.",
      },
      {
        heading: "What comes next",
        body:
          "Luis and Rachel are treating this launch as the beginning of the Madre Frescas journey. The next steps are real photos, customer feedback, small preorder batches, events, and continuing to shape a brand that blends Mexican freshness with Southern Kentucky baking.",
      },
    ],
  },
};

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function monthKey(date: string) {
  return date.slice(5, 7) as keyof typeof monthThemes;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function dayNumber(date: string) {
  return Number(date.slice(8, 10));
}

function dailyTitle(date: string) {
  const theme = monthThemes[monthKey(date)];
  const day = dayNumber(date);
  const details = [
    "Ingredient Notes",
    "Menu Thoughts",
    "Recipe Journal",
    "Brand Work",
    "Testing Notes",
    "Photo Planning",
    "Preorder Planning",
  ];

  return `${theme.title}: ${details[day % details.length]}`;
}

function dailyPost(date: string): BlogPost {
  const theme = monthThemes[monthKey(date)];
  const day = dayNumber(date);
  const title = dailyTitle(date);

  return {
    slug: `${date}-${slugify(title)}`,
    title,
    excerpt: `A daily Madre Frescas progress note from ${date} about ${theme.focus} as Luis and Rachel built the Austin sourdough, aguas frescas, coffee, and healthy sweets brand.`,
    date,
    readTime: "2 min read",
    category: theme.category,
    image: theme.image,
    imageAlt: theme.imageAlt,
    keywords: [
      "Madre Frescas",
      "Austin sourdough",
      "aguas frescas Austin",
      "healthy sweets Austin",
    ],
    sections: [
      {
        heading: "What we worked on",
        body: `${theme.work} This note captures one small piece of the process from day ${day}: testing ideas, tightening the menu, and making sure the brand stayed clear before launch.`,
      },
      {
        heading: "Why it mattered",
        body:
          "A food brand is built through small decisions that add up. Each day helped us get more specific about what customers should taste, remember, and understand when they hear the name Madre Frescas.",
      },
      {
        heading: "Photo idea to recreate",
        body: theme.photo,
      },
    ],
  };
}

function buildDailyJournal() {
  const posts: BlogPost[] = [];
  const start = new Date("2026-01-01T12:00:00Z");
  const end = new Date(`${journalEndDate}T12:00:00Z`);

  for (const current = start; current <= end; current.setUTCDate(current.getUTCDate() + 1)) {
    const date = formatDate(current);
    const milestone = milestonePosts[date];

    if (milestone) {
      posts.push({
        ...milestone,
        slug: milestone.slug ?? slugify(milestone.title),
        date,
        readTime: milestone.readTime ?? "3 min read",
      });
    } else {
      posts.push(dailyPost(date));
    }
  }

  return posts.sort((firstPost, secondPost) =>
    secondPost.date.localeCompare(firstPost.date),
  );
}

export const blogPosts: BlogPost[] = buildDailyJournal();

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
