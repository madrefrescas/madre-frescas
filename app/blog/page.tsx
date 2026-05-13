import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { BrandMark } from "@/components/BrandMark";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Madre Frescas",
  description:
    "Read Madre Frescas stories and guides about Austin sourdough bread, aguas frescas, coffee, sweets, and Mexican-Southern bakery catering.",
  alternates: {
    canonical: "https://madrefrescas.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="section blog-hero">
          <p className="eyebrow">Madre Frescas blog</p>
          <h1>Sourdough, frescas, and Austin food stories.</h1>
          <p>
            Guides and stories about naturally leavened bread, lighter aguas
            frescas, coffee, Mexican-Southern baking, and catering fresh food
            in Austin.
          </p>
        </section>
        <section className="section blog-index-section">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
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
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">Read article</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <BrandMark compact />
        <p>Austin, Texas · Sourdough · Aguas frescas · Healthy sweets</p>
        <a href="mailto:madrefrescas@gmail.com">Email us</a>
      </footer>
    </>
  );
}
