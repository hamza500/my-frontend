import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Search } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Latest insights, news, and technical articles from Strings Technologies.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-surface-muted py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">Our Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mx-auto max-w-2xl text-center mb-8">
            Expert perspectives on digital transformation, industry trends, and the future of technology.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-hero-soft" />
            <Input 
              type="text" 
              placeholder="Search articles (visual only)..." 
              className="pl-10 h-14 bg-surface rounded-full border-border text-base"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col group h-full">
                <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-2xl bg-surface-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm border border-border/50">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="h-4 w-4 mr-1"/> {post.date}</span>
                  <span className="flex items-center"><User className="h-4 w-4 mr-1"/> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href={`/blog/${post.slug}`} className="text-primary font-semibold inline-flex items-center hover:underline">
                    Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
             <button className="px-6 py-3 border border-border text-muted-foreground font-medium rounded-lg hover:bg-surface-muted hover:text-foreground transition-colors">
               Load More Articles
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
