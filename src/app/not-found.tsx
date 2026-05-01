import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/40">
      <div className="text-center max-w-lg space-y-6">
        {/* BIG 404 */}
        <h1 className="text-7xl font-extrabold text-[#153151] tracking-tight">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold">Page not found</h2>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Try going back home or explore other sections.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-3 flex-wrap">
          <Link href="/">
            <Button className="bg-[#153151] hover:bg-[#1f4a7a]">Go Home</Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
