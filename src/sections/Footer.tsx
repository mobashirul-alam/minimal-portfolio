"use client";

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { iconArrowUpRight } from "@/utils/myIcons";
import { useInView } from "motion/react";
import { FC, MouseEvent, useEffect } from "react";

const Footer: FC = () => {
  const navItems = [
    { href: "#intro", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
                ref={scope}
              >
                Enough talk. Let&apos;s build something together
              </h2>
              <Button
                variant="secondary"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      {iconArrowUpRight}
                      {iconArrowUpRight}
                    </div>
                  </div>
                }
                className="mt-8"
              >
                info@anderson.com
              </Button>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="py-16">
          <p className="text-white/30 text-sm hover:text-white transition-colors duration-1000">
            Copyright &copy; Anderson &bull; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
