import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck, Component } from "lucide-react";
import { products } from "@/data/products";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-hero py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
            Software Product
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
            {product.title}
          </h1>
          <p className="text-xl text-hero-soft leading-relaxed max-w-2xl mx-auto">
            {product.shortDescription}
          </p>
          <div className="mt-8">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-base shadow-lg shadow-primary/20")}>
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">

          {/* Screenshot Placeholder */}
          <div className="w-full aspect-[16/9] bg-surface-muted rounded-2xl border border-border overflow-hidden relative shadow-lg mb-20 group">
             <div className="absolute inset-0 flex items-center justify-center flex-col">
               <Component className="h-16 w-16 text-hero-soft mb-4" />
               <span className="text-muted-foreground font-semibold text-lg">{product.title} Interface Placeholder</span>
             </div>
             {/* Fake browser bar */}
             <div className="absolute top-0 w-full h-10 bg-surface-muted border-b border-border flex items-center px-4 space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-success"></div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Summary */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Product Overview</h2>
                <div className="prose prose-lg prose-neutral text-muted-foreground max-w-none leading-relaxed">
                  <p>{product.description}</p>
                </div>
              </div>

               {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Core Modules & Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start bg-surface-muted p-5 rounded-xl border border-border">
                      <ShieldCheck className="h-6 w-6 text-primary mr-3 shrink-0" />
                      <span className="text-muted-foreground font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              <div className="bg-surface-muted border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 border-b pb-4">Business Benefits</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 shrink-0" />
                      <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-hero text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 border-b border-border/30 pb-4">Ideal For</h3>
                <ul className="space-y-4 text-hero-soft">
                  {product.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="text-primary mr-2">›</span> {useCase}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
