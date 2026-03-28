"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Layout, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { technologies } from "@/data/technologies";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredProducts = products.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-muted pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Transforming Ideas into <br className="hidden sm:block" />
              <span className="text-primary">INNOVATIVE SOLUTIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We empower businesses to grow and scale through cutting-edge technology, intelligent automation, and customized digital strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/services" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-lg h-14 px-8")}>
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto text-lg h-14 px-8")}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">End-to-End Digital Excellence</h3>
            <p className="text-lg text-muted-foreground">
              From initial strategy to final deployment, Strings Technologies provides comprehensive solutions tailored to your unique operational and digital needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Web Solutions", desc: "Scalable web platforms built for high performance." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Native & hybrid applications for iOS and Android." },
              { icon: Layout, title: "UI/UX Design", desc: "Intuitive interfaces designed with user empathy." },
              { icon: Zap, title: "Systems Integration", desc: "Connecting disparate systems into a unified whole." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-muted p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-surface-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Empowering your business with diverse IT services.</h3>
            </motion.div>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Services <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredServices.map((service) => (
              <motion.div variants={fadeIn} key={service.id}>
                <Card className="h-full hover:border-primary/50 transition-colors flex flex-col group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{service.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/services/${service.slug}`} className="text-sm font-medium text-primary flex items-center hover:underline">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Products</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Scalable software ready for your enterprise.</h3>
            </motion.div>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Products <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div variants={fadeIn} key={product.id}>
                <Card className="h-full flex flex-col border-border overflow-hidden group">
                  <div className="h-2 w-full bg-surface-muted group-hover:bg-primary transition-colors delay-75"></div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base pt-2">{product.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 mt-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Link href={`/products/${product.slug}`} className={cn(buttonVariants({ variant: "default" }), "w-full")}>
                      Explore Details
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-hero text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Tech Stack</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Technologies We Use</h3>
            <p className="text-lg text-hero-soft">
              We leverage modern, secure, and robust technologies to build solutions that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((techGroup, index) => (
              <motion.div
                key={techGroup.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface-dark/80 p-6 rounded-2xl border border-border/30 backdrop-blur"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center border-b border-border/30 pb-3">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  {techGroup.category}
                </h4>
                <ul className="space-y-2">
                  {techGroup.items.map((item, i) => (
                    <li key={i} className="text-hero-soft text-sm flex items-center">
                      <span className="text-muted-foreground mr-2">›</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Insights</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Latest from our blog.</h3>
            </motion.div>
            <Link href="/blog" className={cn(buttonVariants({ variant: "outline" }))}>
              Read All Articles <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col h-full group"
              >
                <div className="relative h-48 sm:h-56 mb-6 overflow-hidden rounded-2xl">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
                <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold text-sm inline-flex items-center hover:underline">
                  Read Article <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
