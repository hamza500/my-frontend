import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Enterprise-grade software products developed by Strings Technologies.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-hero py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Our Software Products</h1>
          <p className="text-xl md:text-2xl text-hero-soft leading-relaxed max-w-2xl mx-auto">
            Ready-to-deploy, highly customizable enterprise products built to scale operations and boost organizational efficiency.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-xl transition-shadow flex flex-col group border-border overflow-hidden">
                <div className="h-2 w-full bg-surface-muted group-hover:bg-primary transition-colors delay-75"></div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                      <Box className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base pt-2 text-muted-foreground">{product.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle2 className="mr-3 h-5 w-5 text-success shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 bg-surface-muted border-t border-border mt-auto flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                  <Link href={`/products/${product.slug}`} className={cn(buttonVariants({ variant: "default" }), "w-full")}>
                    Explore Product Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-muted text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Want a live demonstration?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide free, guided demonstrations of all our software products to ensure they fit your organizational needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-lg h-14 px-8 w-full sm:w-auto")}>
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
