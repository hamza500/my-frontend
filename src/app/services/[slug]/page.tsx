import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-hero py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
            Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-hero-soft leading-relaxed max-w-2xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                <div className="prose prose-lg prose-neutral max-w-none">
                  <p>{service.description}</p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start bg-surface-muted p-4 rounded-xl border border-border">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Process</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-surface-muted group-[.is-active]:bg-primary text-muted-foreground group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-muted p-4 rounded border border-border shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-foreground">{step}</div>
                        </div>
                        <div className="text-muted-foreground text-sm">Step {i + 1} involves meticulous execution of {step.toLowerCase()} to ensure measurable success.</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-5">
                    <h4 className="font-bold text-foreground mb-2">How long does an engagement typically take?</h4>
                    <p className="text-muted-foreground text-sm">Engagement duration varies widely based on complexity, but an average initialization phase takes 2-4 weeks.</p>
                  </div>
                  <div className="border border-border rounded-lg p-5">
                    <h4 className="font-bold text-foreground mb-2">Do you provide ongoing support?</h4>
                    <p className="text-muted-foreground text-sm">Yes, Strings Technologies provides extensive post-launch / post-deployment maintenance and SLA-based support.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-surface-muted border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Interested in this service?</h3>
                <p className="text-muted-foreground text-sm">Our experts are standing by to discuss your specific requirements and how we can deliver exceptional value.</p>
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full text-center")}>
                  Get a Free Quote
                </Link>
                
                <hr className="border-border my-6" />

                <h4 className="font-semibold text-foreground mb-4">Technologies usually involved:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "AWS", "Figma"].map(tech => (
                    <span key={tech} className="bg-surface border border-border text-muted-foreground text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
