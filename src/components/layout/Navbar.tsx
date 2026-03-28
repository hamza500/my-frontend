"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { services } from "@/data/services";
import { products } from "@/data/products";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
        <NavigationMenuLink
          render={<Link href={props.href || "#"} ref={ref as any} />}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block tracking-tight text-primary">
            Strings Technologies
          </span>
          <span className="font-bold text-xl sm:hidden tracking-tight text-primary">
            Strings
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        render={<Link href="/services" />}
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our full range of digital transformation and business solutions.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    {services.slice(0, 4).map((service) => (
                      <ListItem
                        key={service.slug}
                        title={service.title}
                        href={`/services/${service.slug}`}
                      >
                        {service.shortDescription}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.slice(0, 6).map((product) => (
                      <ListItem
                        key={product.slug}
                        title={product.title}
                        href={`/products/${product.slug}`}
                      >
                        {product.shortDescription}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/team" className={navigationMenuTriggerStyle()}>
                  Our Team
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact CTA & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link href="/contact" className={cn("px-4 py-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md")}>
              Contact Us
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={cn("md:hidden inline-flex items-center justify-center rounded-md border border-input bg-background h-10 w-10 hover:bg-accent hover:text-accent-foreground")}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle mobile menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="font-bold text-2xl text-primary" onClick={() => setIsOpen(false)}>
                  Strings Technologies
                </Link>
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                  <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
                  <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
                  <div className="pl-4 flex flex-col space-y-2 border-l-2">
                    {services.slice(0,4).map(s => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</Link>
                  <div className="pl-4 flex flex-col space-y-2 border-l-2">
                    {products.slice(0,4).map(p => (
                      <Link key={p.slug} href={`/products/${p.slug}`} className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
                        {p.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/team" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Our Team</Link>
                  <Link href="/gallery" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Gallery</Link>
                  <Link href="/learn-to-earn" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Learn To Earn</Link>
                  <Link href="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
                  <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </nav>
                <Link href="/contact" className={cn("flex justify-center w-full px-4 py-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md")} onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
