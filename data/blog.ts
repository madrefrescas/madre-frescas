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

export const blogPosts: BlogPost[] = [
  {
    slug: "why-sourdough-bread-feels-different",
    title: "Why Sourdough Bread Feels Different",
    excerpt:
      "A simple guide to long fermentation, real ingredients, and why naturally leavened sourdough has a different texture, flavor, and feel.",
    date: "2026-05-12",
    readTime: "4 min read",
    category: "Sourdough",
    image: "/brand/blog/sourdough-bread.png",
    imageAlt: "Sliced sourdough bread on a bakery table",
    keywords: [
      "Austin sourdough bread",
      "naturally leavened bread",
      "organic sourdough Austin",
    ],
    sections: [
      {
        heading: "Slow fermentation builds flavor",
        body:
          "Sourdough bread gets its character from time. Instead of relying only on commercial yeast, naturally leavened bread uses a living starter and a slower fermentation process. That time helps build a deeper flavor, a crisp crust, and the soft, chewy crumb people look for in a good loaf.",
      },
      {
        heading: "Real ingredients matter",
        body:
          "At Madre Frescas, our sourdough menu centers on organic unbleached flour where possible, water, salt, and sourdough starter. The goal is simple bread with a clean ingredient list and enough flavor to stand on its own.",
      },
      {
        heading: "How to serve it",
        body:
          "Classic sourdough works for toast, sandwiches, soup, breakfast boards, and event spreads. For Austin pickup orders, it pairs especially well with horchata, hibiscus agua fresca, and bakery sweets for a full brunch-style box.",
      },
    ],
  },
  {
    slug: "aguas-frescas-with-less-sugar",
    title: "Aguas Frescas With Less Sugar, More Fresh Flavor",
    excerpt:
      "How Madre Frescas approaches hibiscus agua fresca, horchata, and naturally sweetened drinks for Austin heat and everyday gatherings.",
    date: "2026-05-12",
    readTime: "3 min read",
    category: "Aguas Frescas",
    image: "/brand/blog/aguas-frescas-horchata.png",
    imageAlt: "Hibiscus agua fresca and horchata in glasses",
    keywords: [
      "aguas frescas Austin",
      "hibiscus agua fresca",
      "naturally sweetened drinks Austin",
    ],
    sections: [
      {
        heading: "Fresh drinks should taste bright",
        body:
          "Aguas frescas are meant to be refreshing. Our approach keeps the flavor clear: fruit, florals, herbs, cinnamon, citrus, and enough sweetness to round everything out without making the drink feel heavy.",
      },
      {
        heading: "Hibiscus is a natural Austin fit",
        body:
          "Hibiscus agua fresca has a ruby color, tart finish, and floral depth that works beautifully in warm weather. It is easy to pair with sourdough, pastry boxes, market pickups, and catering orders.",
      },
      {
        heading: "Lighter sweetener options",
        body:
          "We build our drink menu with lighter sweetener options like stevia or monk fruit where they make sense. The goal is a better-for-you agua fresca that still feels generous, colorful, and worth ordering.",
      },
    ],
  },
  {
    slug: "mexican-southern-bakery-austin",
    title: "The Story Behind a Mexican-Southern Bakery in Austin",
    excerpt:
      "Madre Frescas brings Mexican aguas frescas and Southern Kentucky baking together through sourdough, horchata, and better-for-you sweets.",
    date: "2026-05-12",
    readTime: "4 min read",
    category: "Brand Story",
    image: "/brand/blog/mexican-southern-bakery.png",
    imageAlt: "Sourdough, aguas frescas, horchata, and pastries on a table",
    keywords: [
      "Mexican bakery Austin",
      "Southern bakery Austin",
      "Austin bakery catering",
    ],
    sections: [
      {
        heading: "Two traditions at one table",
        body:
          "Madre Frescas comes from two food memories meeting in one place: Mexican aguas frescas, canela, horchata, and bright fruit on one side; Southern Kentucky baking, slow bread, and home comfort on the other.",
      },
      {
        heading: "Why Madre Frescas",
        body:
          "Madre nods to the sourdough mother, the starter that gives bread life. Frescas points to fresh drinks, fresh flavor, and the lighter side of the menu. Together, the name gives the brand room for bread, drinks, sweets, catering, and future seasonal boxes.",
      },
      {
        heading: "Built for Austin gatherings",
        body:
          "The menu is designed for Austin pickup, pop-ups, offices, wellness events, brunch tables, and celebrations. Sourdough boards, fresh horchata, hibiscus agua fresca, and better-for-you sweets make the brand easy to order and easy to remember.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
