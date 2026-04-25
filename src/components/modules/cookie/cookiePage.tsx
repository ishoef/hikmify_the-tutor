// components/layout/cookie-policy.tsx

export default function CookiePolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-6">
            Cookies & Privacy
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: April 2026
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            We use cookies to make your experience on HikmiFy better, faster,
            and more personal.
          </p>
        </div>

        <div className="space-y-14 text-[17px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help us remember your preferences, keep
              you logged in, and understand how you use HikmiFy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why We Use Cookies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Essential Cookies",
                  desc: "These are necessary for the website to function properly — like logging you in and keeping your sessions secure.",
                },
                {
                  title: "Performance Cookies",
                  desc: "Help us understand how you use HikmiFy so we can improve speed, design, and overall experience.",
                },
                {
                  title: "Functionality Cookies",
                  desc: "Remember your preferences (like language or theme) so you don’t have to set them every time.",
                },
                {
                  title: "Analytics Cookies",
                  desc: "Allow us to see which pages are popular and how users interact with the platform.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-muted/50 rounded-3xl p-7">
                  <h3 className="font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15.5px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third-Party Cookies
            </h2>
            <p>
              We also use trusted third-party services (like Google Analytics,
              payment providers, and video call tools) that may place cookies on
              your device. These help us process payments securely and analyze
              usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How to Manage Cookies
            </h2>
            <p>
              You can control cookies through your browser settings. Most
              browsers allow you to:
            </p>
            <ul className="mt-5 space-y-3 pl-6 list-disc">
              <li>Block cookies completely</li>
              <li>Delete cookies already stored on your device</li>
              <li>Receive a warning before a cookie is stored</li>
            </ul>
            <p className="mt-6 text-sm">
              Note: If you disable essential cookies, some parts of HikmiFy may
              not work properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Promise
            </h2>
            <p>
              We respect your privacy and only use cookies to make your learning
              experience better. We do not sell your data, and we never use
              cookies for targeted advertising without your consent.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-12 border-t border-border bg-muted/30 rounded-3xl p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Questions About Cookies?
            </h2>
            <p className="mb-6">
              If you have any questions or concerns about our use of cookies,
              feel free to reach out.
            </p>

            <div className="text-center">
              <p className="text-[#153151] font-medium text-xl mb-1">
                support@hikmify.com
              </p>
              <p className="text-sm text-muted-foreground">
                We usually reply within 24 hours
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-24 pt-12 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} HikmiFy • We believe in transparent and respectful use
          of technology
        </div>
      </div>
    </div>
  );
}
