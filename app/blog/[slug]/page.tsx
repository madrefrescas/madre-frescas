import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { BrandMark } from "@/components/BrandMark";
import { blogPosts, getBlogPost } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Madre Frescas`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://madrefrescas.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://madrefrescas.com/blog/${post.slug}`,
      siteName: "Madre Frescas",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1536,
          height: 1024,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://madrefrescas.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Madre Frescas",
    },
    publisher: {
      "@type": "Organization",
      name: "Madre Frescas",
      logo: {
        "@type": "ImageObject",
        url: "https://madrefrescas.com/brand/madre-frescas-logo.png",
      },
    },
    mainEntityOfPage: `https://madrefrescas.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />
      <main className="page-shell">
        <article className="section article-page">
          <Link className="blog-back-link" href="/blog">
            Back to blog
          </Link>
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          <div className="article-meta">
            <span>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}</span>
            <span>{post.readTime}</span>
          </div>
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1536}
            height={1024}
            className="article-hero-image"
            priority
            sizes="(max-width: 980px) 100vw, 980px"
          />
          <div className="article-body">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <div className="article-cta">
            <h2>Ready to order from Madre Frescas?</h2>
            <p>
              Reserve sourdough, horchata, hibiscus agua fresca, or catering
              for your next Austin pickup or event.
            </p>
            <Link className="button primary" href="/#preorder">
              Place a preorder
            </Link>
          </div>
        </article>
      </main>
      <footer className="site-footer">
        <BrandMark compact />
        <p>Austin, Texas · Sourdough · Aguas frescas · Healthy sweets</p>
        <a href="mailto:madrefrescas@gmail.com">Email us</a>
      </footer>
    </>
  );
}
