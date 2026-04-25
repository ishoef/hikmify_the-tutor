// components/layout/terms-page.tsx

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-6">
            Legal Stuff
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: April 2026
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Please read this carefully — it’s important, but we kept it as
            simple as possible.
          </p>
        </div>

        <div className="space-y-14 text-[17px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Welcome to HikmiFy
            </h2>
            <p>
              By using HikmiFy, you agree to these Terms of Service. If you
              don’t agree, unfortunately you can’t use the platform (but we hope
              you stick around!).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. What We Do
            </h2>
            <p>
              HikmiFy is a platform that connects students with awesome tutors
              for live, personalized learning sessions. We handle booking, video
              calls, payments, and everything in between to make learning smooth
              and enjoyable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Your Account
            </h2>
            <p>
              You need an account to use most features. Keep your password safe
              and don’t share your login details. You’re responsible for
              everything that happens under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Playing Nice Together
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/50 rounded-3xl p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  👨‍🎓 For Students
                </h3>
                <ul className="space-y-3">
                  {[
                    "Be honest when signing up",
                    "Show up on time for your sessions",
                    "Treat your tutor with respect",
                    "Pay for sessions as agreed",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#153151] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-3xl p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  👩‍🏫 For Tutors
                </h3>
                <ul className="space-y-3">
                  {[
                    "Come prepared and deliver great sessions",
                    "Be on time — students hate waiting",
                    "Keep student information private",
                    "Be honest about your skills and experience",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#153151] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Payments & Refunds
            </h2>
            <p>
              Payments are handled securely by trusted third-party providers.
              Once a session starts, it’s generally non-refundable. If you need
              to cancel, check our cancellation policy — we try to be fair.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. What’s Not Allowed
            </h2>
            <p>
              Don’t use HikmiFy to harass others, share inappropriate content,
              break the law, or try to hack or abuse the platform. We want this
              to be a safe and positive space for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Who Owns What
            </h2>
            <p>
              All the content, logos, and design on HikmiFy belong to us (or our
              partners). You can’t copy or reuse them without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Our Responsibility
            </h2>
            <p>
              We work hard to keep the platform running smoothly, but we can’t
              guarantee every tutor session will be perfect. Tutors are
              independent — we’re here to connect you, not control them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. We Can End Accounts
            </h2>
            <p>
              If someone breaks these rules, we may suspend or close their
              account. We’ll try to be reasonable, but safety and respect come
              first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Changes to These Terms
            </h2>
            <p>
              We might update these terms occasionally. If we do, we’ll post the
              new version here. Continuing to use HikmiFy means you accept the
              updates.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              Have Questions?
            </h2>
            <p className="mb-6">
              We’re here to help! Feel free to reach out anytime.
            </p>

            <div className="bg-[#153151]/5 border border-[#153151]/10 rounded-3xl p-10 text-center">
              <p className="text-[#153151] font-medium text-2xl">
                support@hikmify.com
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                We usually reply within 24 hours
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-24 pt-12 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} HikmiFy • Made with ❤️ for learners and tutors
          everywhere
        </div>
      </div>
    </div>
  );
}
