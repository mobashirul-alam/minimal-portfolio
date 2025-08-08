import Button from "@/components/Button";
import { iconArrowUpRight } from "@/utils/myIcons";
import { FC } from "react";

const Footer: FC = () => {
  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Testimonials" },
    { href: "#", label: "FAQs" },
    { href: "#", label: "Contact" },
  ];

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Enough talk. Let&apos;s build something together
              </h2>
              <Button
                variant="secondary"
                iconAfter={iconArrowUpRight}
                className="mt-8"
              >
                info@anderson.com
              </Button>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Anderson &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
