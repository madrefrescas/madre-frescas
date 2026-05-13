import Image from "next/image";
import { MenuAndPreorder } from "@/components/MenuAndPreorder";
import { BrandMark } from "@/components/BrandMark";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/data/blog";

// Flip available to true or false to control what customers can order now.
const menu = [
  {
    category: "Organic Sourdough Bread",
    name: "Classic Sourdough Loaf",
    tag: "Naturally leavened",
    price: "$12",
    available: true,
    description:
      "Organic unbleached flour, sourdough starter, blistered crust, and a tender everyday crumb.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Jalapeno Cheddar Loaf",
    tag: "Savory loaf",
    price: "$16",
    available: false,
    description:
      "Slow-fermented sourdough with jalapeno heat and cheddar folded through the loaf.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Dark Chocolate Chip Loaf",
    tag: "Sweet loaf",
    price: "$15",
    available: false,
    description:
      "A softer sourdough loaf with dark chocolate chips for breakfast slices and sweet toast.",
  },
  {
    category: "Aguas Frescas",
    name: "Horchata",
    tag: "Naturally sweetened",
    price: "$8",
    available: true,
    description:
      "Creamy cinnamon horchata made with real flavor and natural sugar alternatives.",
  },
  {
    category: "Aguas Frescas",
    name: "Hibiscus Agua Fresca",
    tag: "Naturally sweetened",
    price: "$8",
    available: true,
    description:
      "Ruby hibiscus fresca with a bright, floral finish and a lighter sweetener profile.",
  },
  {
    category: "Aguas Frescas",
    name: "Lemonade Agua Fresca",
    tag: "Naturally sweetened",
    price: "$8",
    available: false,
    description:
      "Fresh lemonade agua fresca with bright citrus flavor and natural sugar alternatives.",
  },
  {
    category: "Sourdough Bagels",
    name: "Original Bagels",
    tag: "4 for $12 / 6 for $16",
    price: "$12+",
    available: false,
    description:
      "Sourdough bagels with a chewy bite and simple classic flavor.",
  },
  {
    category: "Sourdough Bagels",
    name: "Cinnamon Bagels",
    tag: "4 for $13 / 6 for $18",
    price: "$13+",
    available: false,
    description:
      "A warm cinnamon sourdough bagel option with cozy bakery flavor.",
  },
  {
    category: "Sourdough Bagels",
    name: "Jalapeno Cheddar Bagels",
    tag: "4 for $15 / 6 for $21",
    price: "$15+",
    available: false,
    description:
      "Cheddar-rich sourdough bagels with jalapeno heat.",
  },
  {
    category: "Healthy Sweet Treats",
    name: "Sourdough Cinnamon Rolls",
    tag: "4 for $18",
    price: "$18",
    available: false,
    description:
      "Sourdough cinnamon rolls with homemade lighter cream cheese frosting.",
  },
  {
    category: "Healthy Sweet Treats",
    name: "Dark Chocolate Oat Bites",
    tag: "6 for $15",
    price: "$15",
    available: false,
    description:
      "Soft oat bites with dark chocolate, cinnamon, and a lighter naturally sweet finish.",
  },
  {
    category: "Healthy Sweet Treats",
    name: "Herb & Seed Sourdough Crackers",
    tag: "Bag for $12",
    price: "$12",
    available: false,
    description:
      "Crisp sourdough crackers with olive oil, rosemary, seeds, and a lighter savory finish.",
  },
  {
    category: "Coffee",
    name: "Horchata Espresso",
    tag: "Iced coffee",
    price: "$8",
    available: false,
    description:
      "Creamy horchata poured with espresso for a rich cinnamon coffee drink.",
  },
  {
    category: "Coffee",
    name: "Iced Coffee",
    tag: "Classic coffee",
    price: "$6",
    available: false,
    description:
      "Smooth iced coffee made for pairing with sourdough and sweets.",
  },
  {
    category: "Coffee",
    name: "Hot Chocolate Coffee",
    tag: "Chocolate coffee",
    price: "$7",
    available: false,
    description:
      "A warm chocolate coffee drink with a cozy bakery-style finish.",
  },
];

const faqs = [
  [
    "Where is Madre Frescas located?",
    "Madre Frescas serves Austin, Texas through preorders, pop-ups, local delivery windows, and scheduled market pickups.",
  ],
  [
    "Are the aguas frescas sugar free?",
    "Our goal is naturally sweet, lighter drinks. Most flavors are made with fruit, spices, herbs, and natural sugar alternatives instead of refined sugar.",
  ],
  [
    "Can I order sourdough and drinks together?",
    "Yes. The site is set up around preorder bundles so customers can reserve bread, aguas frescas, sweets, and coffee drinks for pickup or event catering.",
  ],
  [
    "Do you offer catering?",
    "Yes. Madre Frescas is built for office breakfasts, pop-ups, showers, wellness events, and Austin gatherings that need fresh drinks and handmade baked goods.",
  ],
  [
    "How far ahead should I place a preorder?",
    "For sourdough bread and aguas frescas, ordering at least 24 to 48 hours ahead is best. Larger catering orders and event drink bars should be requested as early as possible so we can plan quantities and pickup timing.",
  ],
  [
    "What ingredients do you use?",
    "Our menu focuses on real ingredients, sourdough starter, organic unbleached flour where possible, fresh fruit, spices, herbs, and natural sugar alternatives for select aguas frescas.",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Madre Frescas",
  image: "https://madrefrescas.com/brand/photos/madre-frescas-hero.png",
  url: "https://madrefrescas.com",
  servesCuisine: ["Mexican", "Southern", "Bakery", "Healthy"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: "Austin, Texas",
  description:
    "Austin sourdough bakery and aguas frescas brand making naturally leavened bread, naturally sweetened drinks, sweets, coffee, and Mexican-Southern comfort food.",
  makesOffer: menu.map((item) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: item.name,
      description: item.description,
    },
    price: item.price.replace("$", "").replace("+", ""),
    priceCurrency: "USD",
    availability: item.available
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main>
        <section className="hero">
          <Image
            src="/brand/photos/madre-frescas-hero.png"
            alt="Sourdough bread and aguas frescas on a table"
            fill
            className="hero-image"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Austin sourdough bakery + aguas frescas</p>
            <h1>Mexican freshness meets Southern baking.</h1>
            <p>
              Handcrafted sourdough, naturally sweetened aguas frescas, sweets,
              and coffee drinks made for Austin mornings, markets, and
              gatherings.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#preorder">
                Reserve a box
              </a>
              <a className="button secondary" href="#menu">
                See the menu
              </a>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Brand promises">
          <span>Naturally leavened</span>
          <span>No refined sugar drink options</span>
          <span>Mexican + Kentucky roots</span>
          <span>Austin pickup + catering</span>
        </section>

        <MenuAndPreorder menu={menu} />

        <section id="story" className="section story-section">
          <div className="story-mark">
            <BrandMark />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Two heritages, one table.</h2>
            <p>
              Madre Frescas was born from Mexican aguas frescas and Southern
              Kentucky baking meeting in Austin. One side brings bright fruit,
              canela, and fresh drinks. The other brings patient
              dough, home-baked comfort, and the skill of feeding people well.
            </p>
            <p>
              “Madre” honors the sourdough mother that gives every loaf life.
              “Fresca” carries the fresh drink side of the brand: colorful,
              lighter, and made with intention.
            </p>
          </div>
        </section>

        <section className="section seo-section">
          <div>
            <p className="eyebrow">Austin-made</p>
            <h2>Fresh Mexican flavor with Southern bakery comfort.</h2>
          </div>
          <div className="seo-grid">
            <article>
              <h3>Sourdough bread in Austin</h3>
              <p>
                Naturally leavened loaves made with organic unbleached flour
                where possible, long fermentation, a crisp crust, and a soft
                everyday crumb.
              </p>
            </article>
            <article>
              <h3>Aguas frescas</h3>
              <p>
                Refreshing aguas frescas made for Austin heat, brunch tables,
                office orders, events, and weekend pickup.
              </p>
            </article>
            <article>
              <h3>Better-for-you sweets</h3>
              <p>
                Small-batch bakery treats with real ingredients, rotating
                flavors, and lighter sweetener options for customers who want
                comfort without the heavy feeling.
              </p>
            </article>
          </div>
        </section>

        <section id="catering" className="section catering-section">
          <div className="section-heading">
            <p className="eyebrow">Events + wholesale</p>
            <h2>Catering fresh sourdough, aguas frescas, and sweets across Austin.</h2>
            <p>
              Madre Frescas creates Mexican-Southern catering for office
              breakfasts, private events, wellness gatherings, markets, and
              celebrations with sourdough boards, fresh aguas frescas, pastry
              boxes, coffee drinks, and sweets.
            </p>
          </div>
          <div className="bundle-row">
            <span>Fresca bar</span>
            <span>Sourdough brunch board</span>
            <span>Healthy sweets table</span>
            <span>Market pickup boxes</span>
            <span>Office breakfast bundles</span>
            <span>Wholesale bread orders</span>
          </div>
        </section>

        <section className="section blog-preview-section">
          <div className="section-heading">
            <p className="eyebrow">From the blog</p>
            <h2>Learn about sourdough, frescas, coffee, and baking.</h2>
            <p>
              Read Madre Frescas guides on naturally leavened bread, aguas
              frescas, coffee, and fresh Mexican-Southern food in Austin.
            </p>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <a className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={768}
                  height={512}
                  className="blog-card-image"
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
                <div className="card-topline">
                  <span>{post.category}</span>
                  <strong>{post.readTime}</strong>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">Read article</span>
              </a>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about ordering.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark compact />
        <p>
          Austin, Texas · Sourdough · Aguas frescas · Healthy sweets
        </p>
        <a href="mailto:madrefrescas@gmail.com">Email us</a>
      </footer>
    </>
  );
}
