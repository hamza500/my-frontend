import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-surface-muted py-20 border-b relative">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground space-x-6 text-sm">
            <span className="flex items-center"><User className="h-4 w-4 mr-2"/> {post.author}</span>
            <span className="flex items-center"><Calendar className="h-4 w-4 mr-2"/> {post.date}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Featured Image */}
          <div className="relative w-full aspect-[21/9] mb-16 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {post.content}
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Navigating the Future</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As technology continues to rapidly evolve, the businesses that adapt with robust integrations and secure platforms will be the ones that succeed in an increasingly competitive environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To learn more about how Strings Technologies can help you navigate this complex landscape, reach out to our consultancy team.
            </p>
          </article>

          {/* Tags & Share */}
          <div className="mt-16 pt-8 border-t flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-hero-soft" />
              <span className="text-sm border bg-surface-muted px-2 py-1 rounded text-muted-foreground">{post.category}</span>
              <span className="text-sm border bg-surface-muted px-2 py-1 rounded text-muted-foreground">Technology</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
