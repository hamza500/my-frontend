import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions of use for Strings Technologies.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-surface shrink">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-8 border-b pb-4">Terms and Conditions</h1>
        
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></p>
          
          <p>Welcome to Strings Technologies. These Terms and Conditions govern your use of our website located at strings.com.pk operated by Strings Technologies.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h3>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials on Strings Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h3>
          <p>The materials on Strings Technologies' website are provided on an 'as is' basis. Strings Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Limitations</h3>
          <p>In no event shall Strings Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Strings Technologies' website.</p>
        </div>
      </div>
    </div>
  );
}
