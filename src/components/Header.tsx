import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const BOOKING_URL =
  "https://www.fresha.com/book-now/bisou-hair-salon-zc41qh7e/all-offer?share=true&pId=129242";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.home), href: "#home" },
    { label: t(translations.nav.stylists), href: "#stylists" },
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.portfolio), href: "#portfolio" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]" : "bg-background"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex-shrink-0"
        >
          <img
            src={bisouLogo}
            alt="Bisou Hair Salon"
            className="h-[54px] md:h-[64px] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body text-[11px] tracking-[0.16em] font-medium text-foreground/55 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop: Language + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[12px] py-2.5 px-6"
          >
            {t(translations.nav.bookAppointment)}
          </a>
        </div>

        {/* Mobile: Language + Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-background z-40">
          <nav className="container-site py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-body text-[15px] tracking-[0.1em] font-medium text-foreground py-4 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-6"
            >
              {t(translations.nav.bookAppointment)}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
