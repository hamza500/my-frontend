import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, Megaphone, Smartphone, Presentation, BookOpen, Layers, CheckCircle2, Zap, Database, Brain, Laptop, GraduationCap, ShoppingCart } from "lucide-react";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the comprehensive range of digital and business services offered by Strings Technologies.",
};

const iconMap: Record<string, any> = {
  "laptop": Laptop,
  "megaphone": Megaphone,
  "brain": Brain,
  "graduation-cap": GraduationCap,
  "briefcase": Briefcase,
  "code": Code,
  "smartphone": Smartphone,
  "pen-tool": BookOpen,
  "layers": Layers,
  "check-circle": CheckCircle2,
  "zap": Zap,
  "database": Database,
  "book-open": BookOpen,
  "shopping-cart": ShoppingCart
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-hero py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-hero-soft leading-relaxed max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your growth, optimize performance, and redefine your industry.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Presentation;
              return (
                <Card key={service.id} className="h-full hover:border-primary/50 hover:shadow-lg transition-all flex flex-col group border-border bg-surface">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground leading-relaxed">{service.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="pt-6 border-t border-border mt-auto">
                    <Link href={`/services/${service.slug}`} className="text-primary font-semibold flex items-center hover:underline w-full justify-between">
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Need a custom solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sometimes off-the-shelf just won't cut it. Reach out to our consultancy team to architect a bespoke technical solution for your unique business challenges.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-lg h-14 px-8")}>
            Request Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
