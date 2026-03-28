import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Strings Technologies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-surface shrink">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>
          
          <p>Strings Technologies ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website strings.com.pk.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Collection of your Information</h3>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use of your Information</h3>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Disclosure of your Information</h3>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Contact Us</h3>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            Strings Technologies<br />
            Office 5, 6 KP-IT Park, PTCL Training Center<br />
            Peshawar, Pakistan<br />
            Email: info@strings.com.pk
          </p>
        </div>
      </div>
    </div>
  );
}
