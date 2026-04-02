import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import SocialIcons from "./SocialIcons";
import bisouLogo from "@/assets/bisou-logo.webp";

const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const { t } = useLanguage();

  const footerNav = [
    { label: t(translations.nav.home), href: "#home" },
    { label: t(translations.nav.stylists), href: "#stylists" },
    { label: t(translations.nav.services), href: "#services" },
    { label: t(translations.nav.portfolio), href: "#portfolio" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-site py-8 md:py-16 lg:py-20">
        {/* Desktop layout — 5 columns with col 2 empty */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 lg:gap-8">
          {/* Column 1: Logo + tagline + social */}
          <div className="col-span-1">
            <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
              <img src={bisouLogo} alt="Bisou Hair Salon" className="h-[50px] w-auto" />
            </a>
            <p className="font-body text-[14px] text-muted-foreground leading-relaxed mb-5">
              {t(translations.footer.tagline)}
            </p>
            <SocialIcons />
          </div>

          {/* Column 2: Intentionally empty */}
          <div className="col-span-1" />

          {/* Column 3: Navigation */}
          <div className="col-span-1">
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.navigation)}</h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleAnchor(e, link.href)} className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Careers */}
          <div className="col-span-1">
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.careers)}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#join-team" onClick={(e) => handleAnchor(e, "#join-team")} className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {t(translations.nav.joinTeam)}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1">
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.contactTitle)}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a href="tel:604-451-1552" className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">604-451-1552</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="font-body text-[15px] text-muted-foreground">#392 - 4800 Kingsway<br />Burnaby, BC</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="font-body text-[15px] text-muted-foreground whitespace-pre-line">
                  {t(translations.footer.hoursShort)}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
              <img src={BISOU_LOGO} alt="Bisou Hair Salon" className="h-[44px] w-auto mx-auto" />
            </a>
            <SocialIcons className="justify-center" />
          </div>

          <div className="border-t border-border pt-6 grid grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-3">{t(translations.footer.navigation)}</h4>
              <ul className="space-y-2">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleAnchor(e, link.href)} className="font-body text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-3">{t(translations.footer.contactTitle)}</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Phone className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <a href="tel:604-451-1552" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">604-451-1552</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-[13px] text-muted-foreground">#392 - 4800 Kingsway, Burnaby, BC</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3 h-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-[13px] text-muted-foreground whitespace-pre-line">{t(translations.footer.hoursShort)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-site py-5 text-center">
          <p className="font-body text-[12px] text-muted-foreground leading-relaxed">
            © 2026 Bisou Hair Salon. All rights reserved. |{" "}
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">Bluluma</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
