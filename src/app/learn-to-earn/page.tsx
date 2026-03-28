import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Diamond, GraduationCap, Users } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learn To Earn Program",
  description: "Skill empowerment initiative by Strings Technologies to bridge the skills gap.",
};

export default function LearnToEarnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-hero py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Learn To Earn</h1>
          <p className="text-xl md:text-2xl text-hero-soft leading-relaxed max-w-2xl mx-auto">
            A vocational and technical training initiative designed to empower absolute beginners into industry-ready software professionals.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is Learn To Earn?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We believe that education should directly translate to capability and financial independence. The <b>Learn To Earn</b> program is an intensive, modern curriculum designed by the expert developers at Strings Technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Rather than focusing merely on theory, we prioritize hands-on project building. From day one, you will write code, solve logic problems, and build applications that mimic real-world software demands.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Intensive 16-week coding bootcamps",
                  "Mentorship from Senior Software Engineers",
                  "Resume building and interview preparation",
                  "Direct pipeline to junior roles at Strings Technologies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-base")}>
                Apply for the Next Cohort
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-surface-muted border border-border p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <GraduationCap className="h-48 w-48 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10 border-b border-border pb-4">Core Focus Areas</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="bg-surface p-3 shadow-sm rounded-xl h-fit border"><BookOpen className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Modern Web Development</h4>
                    <p className="text-muted-foreground text-sm">HTML, CSS, JavaScript, React, and Next.js</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface p-3 shadow-sm rounded-xl h-fit border"><Diamond className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Backend Engineering</h4>
                    <p className="text-muted-foreground text-sm">Node.js, Databases, API creation and integrations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface p-3 shadow-sm rounded-xl h-fit border"><Users className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Soft Skills & freelancing</h4>
                    <p className="text-muted-foreground text-sm">Communication, client management, and Upwork basics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-muted text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Invest in Your Future</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Spots are limited per cohort to ensure high-quality, personalized mentorship. Contact us today to learn more about the enrollment process.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-lg h-14 px-8")}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
