"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
    alert("Thank you for contacting Strings Technologies. We will get back to you shortly.");
    reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-surface-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind or want to learn more about our services? Let's talk.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We are always looking for new challenges. Reach out to discuss how Strings Technologies can help accelerate your business growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-xl mr-6 shrink-0 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Office Address</h3>
                    <p className="text-muted-foreground">
                      Office 5, 6<br />
                      KP-IT Park, PTCL Training Center<br />
                      Peshawar, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-xl mr-6 shrink-0 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">+92 3139306607</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-xl mr-6 shrink-0 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@strings.com.pk</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-surface-muted rounded-2xl border border-border overflow-hidden relative group">
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <MapPin className="h-10 w-10 text-hero-soft mb-2" />
                   <span className="text-muted-foreground font-medium">Interactive Map Placeholder</span>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface-muted border border-border p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-surface" {...register("name")} />
                    {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-surface" {...register("email")} />
                    {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+92 300 1234567" className="bg-surface" {...register("phone")} />
                    {errors.phone && <p className="text-sm font-medium text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" className="bg-surface" {...register("subject")} />
                    {errors.subject && <p className="text-sm font-medium text-destructive">{errors.subject.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-surface px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Tell us about your project or inquiry..."
                    {...register("message")} 
                  />
                  {errors.message && <p className="text-sm font-medium text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-base mt-4">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
