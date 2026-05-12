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
    price: "$9",
    available: true,
    description:
      "Organic unbleached flour, sourdough starter, blistered crust, and a tender everyday crumb.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Jalapeno Cheddar Loaf",
    tag: "Savory loaf",
    price: "$13",
    available: false,
    description:
      "Slow-fermented sourdough with jalapeno heat and cheddar folded through the loaf.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Cheddar & Onion Loaf",
    tag: "Savory loaf",
    price: "$13",
    available: false,
    description:
      "A comfort-forward sourdough loaf with cheddar and onion for sandwiches, soups, and boards.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Scallion & Chilli Crisp Loaf",
    tag: "Savory loaf",
    price: "$12",
    available: false,
    description:
      "Scallion sourdough with a chile crisp kick and a rich, savory finish.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Chocolate Chip Loaf",
    tag: "Sweet loaf",
    price: "$12",
    available: false,
    description:
      "A softer sourdough loaf with chocolate chips for breakfast slices and sweet toast.",
  },
  {
    category: "Organic Sourdough Bread",
    name: "Butter Cinnamon Sugar Swirl",
    tag: "Sweet loaf",
    price: "$12",
    available: false,
    description:
      "A buttery cinnamon sugar swirl loaf made for weekend mornings and gifting.",
  },
  {
    category: "Aguas Frescas",
    name: "Horchata",
    tag: "Naturally sweetened",
    price: "$6",
    available: true,
    description:
      "Creamy cinnamon horchata made with real flavor and sweetened with stevia.",
  },
  {
    category: "Aguas Frescas",
    name: "Hibiscus Agua Fresca",
    tag: "Naturally sweetened",
    price: "$6",
    available: true,
    description:
      "Ruby hibiscus fresca with a bright, floral finish and a lighter sweetener profile.",
  },
  {
    category: "Sourdough Bagels",
    name: "Original Bagels",
    tag: "4 for $9 / 6 for $12",
    price: "$9+",
    available: false,
    description:
      "Sourdough bagels with a chewy bite and simple classic flavor.",
  },
  {
    category: "Sourdough Bagels",
    name: "Everything Bagels",
    tag: "4 for $10 / 6 for $14",
    price: "$10+",
    available: false,
    description:
      "Sourdough bagels with everything seasoning for a savory market staple.",
  },
  {
    category: "Sourdough Bagels",
    name: "Sesame Bagels",
    tag: "4 for $10 / 6 for $14",
    price: "$10+",
    available: false,
    description:
      "Sourdough bagels topped with sesame for a nutty, classic finish.",
  },
  {
    category: "Sourdough Bagels",
    name: "Cinnamon Sugar Bagels",
    tag: "4 for $10 / 6 for $14",
    price: "$10+",
    available: false,
    description:
      "A sweeter sourdough bagel option with cinnamon sugar comfort.",
  },
  {
    category: "Sourdough Bagels",
    name: "Jalapeno Cheddar Bagels",
    tag: "4 for $12 / 6 for $16",
    price: "$12+",
    available: false,
    description:
      "Cheddar-rich sourdough bagels with jalapeno heat.",
  },
  {
    category: "Sweet Treats",
    name: "Cinnamon Rolls",
    tag: "4 for $14",
    price: "$14",
    available: false,
    description: "Sourdough cinnamon rolls with cream cheese frosting.",
  },
  {
    category: "Sweet Treats",
    name: "Chocolate Chip Cookies",
    tag: "6 for $10",
    price: "$10",
    available: false,
    description:
      "Classic chocolate chip cookies with a Madre Frescas bakery finish.",
  },
  {
    category: "Sweet Treats",
    name: "Chocolate Chip-Toffee Cookies",
    tag: "6 for $10",
    price: "$10",
    available: false,
    description: "Chocolate chip cookies with buttery toffee notes.",
  },
  {
    category: "Sourdough Scones",
    name: "Blueberry Lemon Scones",
    tag: "4 for $12",
    price: "$12",
    available: false,
    description:
      "Bright blueberry lemon sourdough scones for brunch boxes and market pickups.",
  },
  {
    category: "Sourdough Scones",
    name: "Espresso Chocolate Scones",
    tag: "4 for $12",
    price: "$12",
    available: false,
    description:
      "Espresso and chocolate folded into tender sourdough scones.",
  },
  {
    category: "Sourdough Scones",
    name: "Cheddar & Chives Scones",
    tag: "4 for $12",
    price: "$12",
    available: false,
    description:
      "Savory cheddar and chive sourdough scones for breakfast boxes and catering.",
  },
];

const faqs = [
  [
    "Where is Madre Frescas located?",
    "Madre Frescas serves Austin, Texas through preorders, pop-ups, local delivery windows, and scheduled market pickups.",
  ],
  [
    "Are the aguas frescas sugar free?",
    "Our goal is naturally sweet, lighter drinks. Most flavors are made with fruit, spices, herbs, and alternatives like stevia or monk fruit instead of refined sugar.",
  ],
  [
    "Can I order sourdough and drinks together?",
    "Yes. The site is set up around preorder bundles so customers can reserve bread, aguas frescas, horchata, and sweets for pickup or event catering.",
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
    "Our menu focuses on real ingredients, sourdough starter, organic unbleached flour where possible, fresh fruit, spices, herbs, and lighter sweetener options like stevia for select aguas frescas.",
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
    "Austin sourdough bakery and aguas frescas brand making naturally leavened bread, naturally sweetened horchata, healthy sweets, and Mexican-Southern comfort food.",
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
            alt="Sourdough bread, horchata, and aguas frescas on a table"
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
              Handcrafted sourdough, naturally sweetened horchata, colorful
              aguas frescas, and healthier sweets made for Austin mornings,
              markets, and gatherings.
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
              canela, horchata, and fresh drinks. The other brings patient
              dough, home-baked comfort, and the skill of feeding people well.
            </p>
            <p>
              “Madre” honors the sourdough mother that gives every loaf life.
              “Fresca” carries the fresh drink side of the brand: colorful,
              lighter, and made with intention. Together, it gives customers an
              easy story to remember and a specific reason to search.
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
              <h3>Aguas frescas + horchata</h3>
              <p>
                Refreshing aguas frescas and creamy horchata made for Austin
                heat, brunch tables, office orders, events, and weekend pickup.
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
              celebrations with sourdough boards, fresh horchata, hibiscus agua
              fresca, pastry boxes, and better-for-you sweets.
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
            <h2>Learn about sourdough, frescas, and better-for-you baking.</h2>
            <p>
              Read Madre Frescas guides on naturally leavened bread, aguas
              frescas, horchata, and fresh Mexican-Southern food in Austin.
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
