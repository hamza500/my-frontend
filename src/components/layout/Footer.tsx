"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t border-footer-border">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight text-white">
                Strings Technologies
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-footer-muted">
              Transforming Ideas into INNOVATIVE SOLUTIONS. We help businesses grow through cutting-edge technology solutions.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to Newsletter</h4>
              <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-footer border-footer-border focus-visible:ring-primary text-sm"
                />
                <Button type="submit" variant="default" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-primary rounded-full mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Gallery", href: "/gallery" },
                { label: "Learn to Earn", href: "/learn-to-earn" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors flex items-center">
                    <span className="text-primary mr-2 opacity-50">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-primary rounded-full mr-2"></span>
              Information
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund & Return Policy", href: "/refund-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors flex items-center">
                    <span className="text-primary mr-2 opacity-50">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-1 h-4 bg-primary rounded-full mr-2"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-footer-muted">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span>
                  Office 5, 6
                  <br />
                  KP-IT Park, PTCL Training Center
                  <br />
                  Peshawar, Pakistan
                </span>
              </li>
              <li className="flex items-center text-footer-muted">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span>+92 3139306607</span>
              </li>
              <li className="flex items-center text-footer-muted">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span>info@strings.com.pk</span>
              </li>
            </ul>

            <div className="mt-8 flex items-center space-x-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-footer border border-footer-border hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-footer border border-footer-border hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-footer border border-footer-border hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-footer-border text-center text-xs text-footer-muted">
          <p>&copy; {new Date().getFullYear()} Strings Technologies. All rights reserved. Professionally Rebuilt.</p>
        </div>
      </div>
    </footer>
  );
}
