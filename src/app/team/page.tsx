import { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experts at Strings Technologies driving digital innovation.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-surface-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The passionate engineers, designers, and strategists behind Strings Technologies.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative flex flex-col items-center bg-surface rounded-2xl border border-border shadow-sm p-8 hover:shadow-xl transition-all duration-300">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-surface-muted group-hover:border-primary/20 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground text-center mb-1">{member.name}</h3>
                <p className="tracking-widest text-xs uppercase text-primary font-bold mb-4">{member.role}</p>
                <p className="text-center text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-surface-muted text-hero-soft hover:bg-surface-muted hover:text-primary transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-surface-muted text-hero-soft hover:bg-surface-muted hover:text-primary transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-surface-muted text-hero-soft hover:bg-surface-muted hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
