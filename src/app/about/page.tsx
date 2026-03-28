import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Lightbulb, Shield } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Strings Technologies, our mission, vision, and the value we bring to your business.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-surface-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">About Strings Technologies</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a team of passionate technologists dedicated to driving digital transformation and building innovative solutions that matter.
          </p>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Empowering Businesses Through Technology</h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to bridge the gap between traditional operations and modern digital capabilities, Strings Technologies has grown into a premier technology consulting and development firm based in Peshawar, Pakistan.
              </p>
              <p className="text-lg text-muted-foreground">
                We don't just write code; we solve complex business problems. By combining industry expertise with cutting-edge technology, we help companies streamline their processes, engage their customers, and scale their operations globally.
              </p>
            </div>
            <div className="bg-surface-muted p-8 rounded-2xl border">
              <div className="space-y-12">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-lg w-fit h-fit"><Target className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">To deliver highly reliable, intelligent, and scalable technological solutions that empower our clients to achieve unprecedented business growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-lg w-fit h-fit"><Lightbulb className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">To be the most trusted technology partner in the region, recognized for our commitment to quality, innovation, and client success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-hero text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Value Proposition</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", desc: "A collective of highly skilled engineers, designers, and strategists." },
              { title: "Agile Approach", desc: "Flexible methodology ensuring rapid delivery and adaptability." },
              { title: "Client-Centric", desc: "Your goals are our priority; we succeed when you succeed." },
              { title: "Innovation First", desc: "Always adopting the latest, most effective technologies." },
              { title: "End-to-End Service", desc: "From ideation to deployment and ongoing maintenance." },
              { title: "Security & Scale", desc: "Solutions built to be secure and scale with your growth." },
            ].map((prop, i) => (
              <div key={i} className="flex gap-4 bg-surface-dark/80 p-6 rounded-xl border border-border/30">
                <Shield className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">{prop.title}</h4>
                  <p className="text-hero-soft text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to start your digital journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate to build something extraordinary. Our team is ready to discuss your next big idea.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-lg h-14 px-8")}>
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
