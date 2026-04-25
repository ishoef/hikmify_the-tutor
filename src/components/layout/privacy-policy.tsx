// components/layout/privacy-policy.tsx

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-6">
            Legal
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: April 2026
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12 text-[17px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              1. Introduction
            </h2>
            <p>
              Welcome to{" "}
              <span className="font-medium text-[#153151]">HikmiFy</span>. Your
              privacy is important to us. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal information
              when you use our platform to connect with tutors and book learning
              sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              2. Information We Collect
            </h2>
            <div className="bg-muted/60 rounded-3xl p-8 space-y-4">
              {[
                "Personal information (name, email, profile photo)",
                "Account credentials and authentication data",
                "Booking details and session history",
                "Payment information (processed securely via third-party providers)",
                "Usage and technical data (device information, IP address, interaction logs)",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#153151] mt-1 text-lg">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 pl-2">
              {[
                "To provide and improve our tutoring services",
                "To process bookings and manage live sessions",
                "To communicate important updates and support",
                "To ensure platform security and prevent fraud",
                "To personalize your learning experience",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#153151] mt-1">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell your personal data. We only share information with
              trusted third-party service providers (such as payment processors
              and cloud hosting) when necessary to deliver our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              5. Data Security
            </h2>
            <p>
              We use industry-standard technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, or loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, update, or request deletion
              of your personal data. You may also withdraw consent or object to
              certain processing. Contact us anytime to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              7. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to improve your experience
              and analyze platform usage. You can manage your cookie preferences
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will
              be posted here with an updated "Last updated" date. We encourage
              you to review it periodically.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-10 border-t border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              9. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please reach
              out to us:
            </p>

            <div className="bg-[#153151]/5 border border-[#153151]/10 rounded-3xl p-8 text-center">
              <p className="text-[#153151] font-medium text-xl">
                support@hikmify.com
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-12 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} HikmiFy. All rights reserved.
        </div>
      </div>
    </div>
  );
}
