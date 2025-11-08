"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
  if (link.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

type NavItem = {
  name: string;
  link: string;
  isExternal?: boolean;
};

export function Header() {
  const navItems: NavItem[] = [
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Services",
      link: "/services/blue-metrics",
    },
    {
      name: "Insights",
      link: "/insights",
    },
    {
      name: "Research",
      link: "/research",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Impact",
      link: "/impact",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="bg-blue-600/20 backdrop-blur-sm">
          <NavbarLogo />
          <NavItems 
            items={navItems.map(item => ({
              ...item,
              className: "text-white hover:text-blue-100",
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, item.link)
            }))} 
          />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="text-white border-white hover:bg-white hover:text-blue-600">Learn More</NavbarButton>
            <NavbarButton variant="primary" className="bg-white text-blue-600 hover:bg-blue-100">Contact us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="bg-blue-600/20 backdrop-blur-sm">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-blue-600/20 backdrop-blur-sm"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleScroll(e, item.link);
                }}
                className="relative text-white hover:text-blue-100"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-white text-blue-600 hover:bg-blue-100"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-white text-blue-600 hover:bg-blue-100"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
