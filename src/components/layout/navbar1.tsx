"use client";

import { Menu } from "lucide-react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeTogglle";
import Link from "next/link";
import Logo from "../common/logo";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url?: string;
    src?: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    // url: "https://www.shadcnblocks.com",
    // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "HikmiFy",
  },
  menu = [
    { title: "Home", url: "/" },
    // {
    //   title: "Products",
    //   url: "#",
    // },
    // {
    //   title: "Resources",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Help Center",
    //       description: "Get all the answers you need right here",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Contact Us",
    //       description: "We are here to help you with any questions you have",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Status",
    //       description: "Check the current status of our services and APIs",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Terms of Service",
    //       description: "Our terms and conditions for using our services",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //   ],
    // },
    { title: "Tutors", url: "/tutors" },
    { title: "Blog", url: "/blog" },
    { title: "Become a tutor", url: "/become-tutor" },
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between h-16 px-4 rounded-2xl border border-border bg-background/70 backdrop-blur-md shadow-sm">
          {/* LEFT */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Logo />
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-3">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="relative px-4 py-2 text-base font-semibold text-foreground/80 rounded-lg transition-all hover:text-[#153151] hover:bg-[#153151]/5 group"
              >
                {item.title}

                {/* underline */}
                <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-[#153151] transition-all duration-300 group-hover:w-2/3 group-hover:-translate-x-1/2" />
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {/* <Button
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-[#153151]"
            >
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>

            <Button
              asChild
              className="bg-[#153151] hover:bg-[#1f4a7a] text-white rounded-xl px-5"
            >
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button> */}

            <ProfileAvatar/>
          </div>
        </nav>

        {/* Mobile Menu */}

        <div className="block lg:hidden">
          <div className="flex items-center justify-between h-14 px-3 border border-border rounded-xl bg-background/70 backdrop-blur-md shadow-sm">
            {/* Logo */}
            <Logo />

            <div className="flex items-center gap-2">
              <ModeToggle></ModeToggle>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="p-0 flex flex-col">
                  {/* HEADER */}
                  <div className="flex items-center justify-between px-5 py-4 border-b bg-background/80 backdrop-blur">
                    <Logo />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                    {/* NAV LINKS */}
                    <div className="flex flex-col gap-2">
                      {menu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="text-base font-medium py-3 px-3 rounded-xl hover:bg-muted transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t pt-5 space-y-3">
                      <ProfileAvatar/>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar1 };
