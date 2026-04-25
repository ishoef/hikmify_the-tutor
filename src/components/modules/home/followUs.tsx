"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



type SocialItem = {
  name: string;
  icon: React.ElementType;
  color: string;
  link: string;
};

const socials: SocialItem[] = [
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "bg-[#3b5998]",
    link: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    color: "bg-[#1DA1F2]",
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "bg-[#0077b5]",
    link: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    color: "bg-[#FF0000]",
    link: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "bg-gradient-to-r from-pink-500 to-yellow-500",
    link: "#",
  },
];

export default function FollowUs() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* HEADER */}
        <p className="text-sm text-muted-foreground mb-2">Our Social Network</p>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">
          Follow Us
        </h2>

        {/* SOCIAL BAR */}
        <div className="max-w-4xl mx-auto flex overflow-hidden rounded-2xl shadow-sm border border-border">
          {socials.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className={`flex-1 h-24 flex items-center justify-center text-white transition-all duration-300 ${item.color}
                  hover:scale-105 hover:z-10`}
              >
                <Icon size={32} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
