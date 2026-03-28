import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Return Policy",
  description: "Refund and returns policy for Strings Technologies services and products.",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-surface shrink">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-8 border-b pb-4">Refund and Return Policy</h1>
        
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>
          
          <p>At Strings Technologies, we strive to ensure that our clients are completely satisfied with our software solutions, consultancy, and training services.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Custom Development and Services</h3>
          <p>Due to the nature of custom software development, digital marketing, and consultancy services, refunds are generally not provided once work has commenced or a deliverable has been handed over. We operate on a milestone-based payment structure ensuring you review and approve work periodically.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Software Products (SaaS / Licenses)</h3>
          <p>For our out-of-the-box software solutions (like LMS, CMS, ERP), we offer a 14-day trial period. Once a subscription or perpetual license is purchased and the license key is issued, it is non-refundable, except in cases where the software fails to perform its core advertised functionality and our support team cannot resolve the issue.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Learn to Earn Training Program</h3>
          <p>For our technical training programs, enrollment fees are fully refundable if requested at least 7 days prior to the start of the cohort. Once the cohort begins, no refunds will be issued under any circumstances.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Requesting a Refund</h3>
          <p>To request a refund under the eligible conditions, please email us directly with your project details or invoice number.</p>
          <p>
            Email: info@strings.com.pk<br />
            Phone: +92 3139306607
          </p>
        </div>
      </div>
    </div>
  );
}
