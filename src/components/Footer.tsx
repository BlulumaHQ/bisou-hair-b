import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const BOOKING_URL =
  "https://www.fresha.com/book-now/bisou-hair-salon-zc41qh7e/all-offer?share=true&pId=129242";

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
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
              <span className="font-heading text-xl font-bold text-foreground">Bisou Hair Salon</span>
            </a>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
              {t(translations.footer.tagline)}
            </p>
          </div>
          <div>
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
          <div>
            <h4 className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground mb-5">{t(translations.footer.quickLinks)}</h4>
            <ul className="space-y-3">
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {t(translations.nav.bookAppointment)}
                </a>
              </li>
            </ul>
          </div>
          <div>
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

        {/* Mobile compact layout */}
        <div className="md:hidden">
          <a href="#home" onClick={(e) => handleAnchor(e, "#home")} className="inline-block mb-4">
            <span className="font-heading text-xl font-bold text-foreground">Bisou Hair Salon</span>
          </a>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
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
              <div className="mt-4 space-y-1.5">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors block">{t(translations.nav.bookAppointment)} →</a>
              </div>
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
