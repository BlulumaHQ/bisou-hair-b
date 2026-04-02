import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Phone, MapPin, Clock, ChevronDown, Send, Instagram } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const BOOKING_URL =
  "https://www.fresha.com/book-now/bisou-hair-salon-zc41qh7e/all-offer?share=true&pId=129242";

/* ── Stylists Data ── */
const stylists = [
  { name: "DONNA", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/08/initial-hair-pic-42.jpg", instagram: "" },
  { name: "VIVI", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/08/initial-hair-pic-44.jpg", instagram: "https://www.instagram.com/kuvivi9531?igsh=Z2poMnNpajh6Zmhs" },
  { name: "FIONA", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/08/initial-hair-pic-40.jpg", instagram: "https://www.instagram.com/fionachung1133?igsh=Ym9kdWpjZDkxcW1z" },
  { name: "ANGEL", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2025/03/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88.png-1.jpeg", instagram: "https://www.instagram.com/bisou_angel1015?igsh=YXcwbnQ4NGR4ZnV6" },
  { name: "DOLLY", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/08/initial-hair-pic-39.jpg", instagram: "https://www.instagram.com/superjuniordolly?igsh=MW11dXZ0bzhkNHI0MA%3D%3D" },
  { name: "HUBERT", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/08/initial-hair-pic-46.jpg", instagram: "https://www.instagram.com/hubert_hairstar?igsh=ZjVhaWJtaDJ3bTI2" },
  { name: "YUWEI", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-pic-yu-we5.jpg", instagram: "https://www.instagram.com/uway2day/" },
  { name: "JAMIE", title: "Stylist", img: "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-pic-jamie2.jpg", instagram: "https://www.instagram.com/jamie_vanhair?igsh=eWkxaXNjYnZtdzdt" },
];

const testimonials = [
  { text: "Hairstylist Jamie is delicate and sweet. Throughout the haircut, she constantly asks whether I like it or not and makes me feel relaxed. I will continue to cut my hair at Jamie's from now on.", author: "Eunseong J." },
  { text: "My stylist, Human is super knowledgeable and took all my concerns into consideration and some more! Couldn't ask for a better style. Amazing haircut experience.", author: "Julia C." },
  { text: "Very good service from Fiona keep up the good work..very nice and clean salon with complete service with a warm water 🥂🥂", author: "Mitch" },
  { text: "First time there and I love it! Clean, amazing customer service and my new haircut looks fabulous. Thank you Angel for your great hair styling tips 🙏🌸", author: "Elizabeth" },
  { text: "Dolly was amazing! I was a little apprehensive with new stylists but she did a great job with layering my hair to how it naturally curls! I wish you lived in Victoria Dolly! See you again…", author: "Maria" },
  { text: "My partner and I both went in to get a cut and colour. Both stylists were knowledgeable and professional. The colour came out looking great for both of us, and we were very happy with the haircuts.", author: "Harlan C." },
  { text: "I'm sooo so happy with my appointment, thank you very much to the hairdresser to understand what I wanted and do a hairstyle based on my hairtype and to have done a haircut I can play with. She was very kind and so professional, I'll come again!", author: "Ora P." },
  { text: "Hubert was wonderful! He was patient, thorough, and helped me with my hair blowout right away. I felt valued as a customer and the walk in wait time was really reasonable. I received several compliments on my hair for the rest of the day!", author: "Anna" },
];

/* ── Portfolio images ── */
const portfolioImages = [
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-17.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-18.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-19.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-7.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-11.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-3.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-5.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-6.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-8.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-9.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-10.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-2.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-12.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-13.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-15.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/09/bisoul-hair-portfolio-16.jpg",
];

/* ── Hero slides data ── */
const heroImages = [
  "https://bisouvancouver.com/wp-content/uploads/2024/06/bisoul-hair-pic-5.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/06/bisoul-hair-pic-7.jpg",
  "https://bisouvancouver.com/wp-content/uploads/2024/06/bisoul-hair-pic-9.jpg",
];

const heroSlides = [
  {
    image: heroImages[0],
    imagePositionClassName: "object-bottom",
    content: null,
  },
  {
    image: heroImages[1],
    imagePositionClassName: "object-center",
    contentKey: "slide2" as const,
  },
  {
    image: heroImages[2],
    imagePositionClassName: "object-center",
    contentKey: "slide3" as const,
  },
];

/* ── Hero Slider Component ── */
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const { t } = useLanguage();

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const goTo = (i: number) => {
    setCurrent(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  const slide = heroSlides[current];
  const content = slide.content === null ? null : slide.contentKey ? translations.hero[slide.contentKey] : null;

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[92vh] flex items-end pb-12 md:pb-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slide.image}
          alt="Bisou Hair Salon"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 w-full h-full object-cover ${slide.imagePositionClassName}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" />

      <div className="relative z-10 container-site w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg"
          >
            <div className="h-[11.5rem] sm:h-[12.5rem] md:h-[14.5rem] lg:h-[15.5rem] mb-8 flex flex-col justify-end">
              {content && (
                <>
                  <p className="font-body text-[11px] tracking-[0.3em] uppercase text-background/60 mb-4">
                    {t(content.subtitle)}
                  </p>
                  <h1
                    className="font-heading text-background leading-[1.05] tracking-tight mb-5"
                    style={{ fontSize: "clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem)" }}
                  >
                    {t(content.title)}
                  </h1>
                  <p className="font-body text-[15px] md:text-base text-background/75 leading-relaxed max-w-sm">
                    {t(content.description)}
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                {t(translations.nav.bookAppointment)}
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline border-background/25 text-background hover:bg-background hover:text-foreground text-center"
              >
                {t(translations.hero.viewServices)}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-background" : "w-4 bg-background/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Reveal helper ── */
const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Mobile Testimonial Carousel ── */
const MobileTestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((tItem, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="pl-5 border-l border-border py-2">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary/60 text-secondary/60" />
                  ))}
                </div>
                <p className="font-body text-[15px] text-foreground/80 leading-[1.8] italic mb-4">"{tItem.text}"</p>
                <p className="font-body text-[11px] font-semibold text-foreground tracking-wider uppercase">— {tItem.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-foreground" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Desktop Testimonial Rotation (4 at a time) ── */
const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setPage((p) => (p + 1) % totalPages), 8000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentTestimonials = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-16 md:py-28 lg:py-32 bg-accent/40">
      <div className="container-site max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-12 md:mb-16">
          <motion.span variants={reveal} custom={0} className="section-label">{t(translations.testimonials.label)}</motion.span>
          <motion.h2 variants={reveal} custom={1} className="section-title">{t(translations.testimonials.title)}</motion.h2>
        </motion.div>

        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-8"
            >
              {currentTestimonials.map((tItem) => (
                <div key={tItem.author} className="relative pl-5 border-l border-border">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-secondary/60 text-secondary/60" />
                    ))}
                  </div>
                  <p className="font-body text-[15px] text-foreground/80 leading-[1.8] italic mb-4">"{tItem.text}"</p>
                  <p className="font-body text-[12px] font-semibold text-foreground tracking-wider uppercase">— {tItem.author}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-foreground" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <MobileTestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

/* ── Service categories with translations ── */
const serviceKeys = ["cut", "styling", "perm", "colour", "treatment", "updos"] as const;

/* ── Page ── */
const Index = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Bisou Hair Salon – Sculpting Stylish Solution"
        description="Welcome to Bisou Hair Salon in Metrotown Mall, Burnaby. Expert haircutting, stunning colouring, and fabulous perms. Book your appointment today."
      />

      <HeroSlider />

      {/* ═══════ ABOUT ═══════ */}
      <section className="py-16 md:py-28 lg:py-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.span variants={reveal} custom={0} className="section-label">{t(translations.about.label)}</motion.span>
              <motion.h2 variants={reveal} custom={1} className="section-title mb-6">{t(translations.about.title)}</motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-muted-foreground leading-[1.8] mb-4 text-base">
                {t(translations.about.p1)}
              </motion.p>
              <motion.p variants={reveal} custom={3} className="font-body text-muted-foreground leading-[1.8] text-base">
                {t(translations.about.p2)}
              </motion.p>
              <motion.div variants={reveal} custom={4} className="mt-6">
                <SocialIcons />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://bisouvancouver.com/wp-content/uploads/2024/06/bisoul-hair-pic-9_result.webp"
                alt="Bisou Hair Salon interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STYLISTS ═══════ */}
      <section id="stylists" className="py-16 md:py-28 lg:py-32 bg-accent/40">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-12 md:mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">{t(translations.stylists.label)}</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">{t(translations.stylists.title)}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10"
          >
            {stylists.map((s, i) => (
              <motion.div key={s.name} variants={reveal} custom={i} className="text-center group">
                <div className="aspect-[3/4] overflow-hidden mb-3 bg-muted">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="font-heading text-sm md:text-[15px] font-bold text-foreground tracking-wide">{s.name}</h3>
                  <a href={s.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} Instagram`} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
                {s.title && <p className="font-body text-[11px] md:text-[12px] text-muted-foreground mt-0.5 tracking-wider uppercase">{s.title}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="py-16 md:py-28 lg:py-32">
        <div className="container-site max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-12 md:mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">{t(translations.services.label)}</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">{t(translations.services.title)}</motion.h2>
          </motion.div>

          {/* Accordion */}
          <div className="divide-y divide-border border-t border-b border-border">
            {serviceKeys.map((key, ci) => {
              const cat = translations.services.categories[key];
              return (
                <div key={key}>
                  <button
                    onClick={() => setExpandedService(expandedService === ci ? null : ci)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <div>
                      <span className="font-heading text-[17px] font-bold text-foreground">{t(cat.title)}</span>
                      {t(cat.note) && <span className="block font-body text-[12px] text-muted-foreground mt-0.5">{t(cat.note)}</span>}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${expandedService === ci ? "rotate-180" : ""}`} />
                  </button>
                  {expandedService === ci && (
                    <div className="pb-5">
                      {cat.items.map((item) => (
                        <div key={item.price} className="flex items-baseline justify-between py-2.5">
                          <span className="font-body text-[15px] text-foreground">{t(item.name)}</span>
                          <span className="font-body text-[15px] text-muted-foreground tabular-nums">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="font-body text-[12px] text-muted-foreground text-center mt-6 tracking-wide">
            {t(translations.services.priceNote)}
          </p>

          <div className="text-center mt-8 mb-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t(translations.nav.bookAppointment)}
            </a>
          </div>

          {/* ── Policy Block ── */}
          <div className="border-t border-border pt-8">
            <h3 className="font-heading text-[15px] font-bold text-foreground mb-4 tracking-wide">{t(translations.policy.title)}</h3>
            <div className="space-y-3 font-body text-[13px] md:text-[14px] text-muted-foreground leading-[1.9]">
              <p dangerouslySetInnerHTML={{ __html: t(translations.policy.p1) }} />
              <p dangerouslySetInnerHTML={{ __html: t(translations.policy.p2) }} />
              <p dangerouslySetInnerHTML={{ __html: t(translations.policy.p3) }} />
              <p>{t(translations.policy.p4)}</p>
              <p>{t(translations.policy.p5)}</p>
              <p className="pt-1 italic">{t(translations.policy.p6)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PORTFOLIO ═══════ */}
      <section id="portfolio" className="py-16 md:py-28 lg:py-32 bg-accent/40">
        <div className="container-site">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-12 md:mb-16">
            <motion.span variants={reveal} custom={0} className="section-label">{t(translations.portfolio.label)}</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title">{t(translations.portfolio.title)}</motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3"
          >
            {portfolioImages.map((img, i) => (
              <motion.div key={img} variants={reveal} custom={i} className="aspect-square overflow-hidden bg-muted">
                <img src={img} alt={`Bisou Hair Salon portfolio ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROMOTION ═══════ */}
      <section className="py-16 md:py-28 lg:py-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.span variants={reveal} custom={0} className="section-label">{t(translations.promotion.label)}</motion.span>
              <motion.h2 variants={reveal} custom={1} className="section-title mb-6">{t(translations.promotion.title)}</motion.h2>
              <motion.p variants={reveal} custom={2} className="font-body text-muted-foreground leading-[1.8] text-base">
                {t(translations.promotion.description)}
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src="https://bisouvancouver.com/wp-content/uploads/2024/08/bisoul-hair-pic-88.jpg"
                alt="Bisou Hair Salon products"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialsSection />

      {/* ═══════ CONTACT + INFO ═══════ */}
      <section id="contact" className="py-16 md:py-28 lg:py-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Left — info */}
            <div>
              <span className="section-label">{t(translations.contact.label)}</span>
              <h2 className="section-title mb-8">{t(translations.contact.title)}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t(translations.contact.phone)}</p>
                    <a href="tel:604-451-1552" className="font-body text-[15px] text-foreground hover:text-secondary transition-colors">604-451-1552</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t(translations.contact.address)}</p>
                    <p className="font-body text-[15px] text-foreground">#392 - 4800 Kingsway, Burnaby, BC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t(translations.contact.hours)}</p>
                    <p className="font-body text-[15px] text-foreground whitespace-pre-line">{t(translations.contact.hoursValue)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {t(translations.nav.bookAppointment)}
                </a>
              </div>
            </div>

            {/* Right — map */}
            <div className="aspect-video lg:aspect-auto overflow-hidden bg-muted">
              <iframe
                title="Bisou Hair Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5!2d-123.0083!3d49.2276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676e2e4f0e3b7%3A0x7c3a7d1c5e8f2a00!2s4800%20Kingsway%2C%20Burnaby%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000"
                className="w-full h-full min-h-[280px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ JOIN OUR TEAM ═══════ */}
      <section id="join-team" className="py-16 md:py-28 lg:py-32 bg-accent/40">
        <div className="container-site max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <motion.span variants={reveal} custom={0} className="section-label">{t(translations.joinTeam.label)}</motion.span>
            <motion.h2 variants={reveal} custom={1} className="section-title mb-6">{t(translations.joinTeam.title)}</motion.h2>
            <motion.p variants={reveal} custom={2} className="font-body text-[15px] md:text-base text-muted-foreground leading-[1.9] mb-10 max-w-xl mx-auto">
              {t(translations.joinTeam.description)}
            </motion.p>
          </motion.div>

          {/* Simple contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-left space-y-5 max-w-md mx-auto"
          >
            <div>
              <label className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">{t(translations.joinTeam.nameLabel)}</label>
              <input type="text" className="w-full border border-border bg-background px-4 py-3.5 font-body text-[15px] text-foreground focus:outline-none focus:border-foreground/30 transition-colors" placeholder={t(translations.joinTeam.namePlaceholder)} />
            </div>
            <div>
              <label className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">{t(translations.joinTeam.emailLabel)}</label>
              <input type="email" className="w-full border border-border bg-background px-4 py-3.5 font-body text-[15px] text-foreground focus:outline-none focus:border-foreground/30 transition-colors" placeholder={t(translations.joinTeam.emailPlaceholder)} />
            </div>
            <div>
              <label className="font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">{t(translations.joinTeam.messageLabel)}</label>
              <textarea rows={4} className="w-full border border-border bg-background px-4 py-3.5 font-body text-[15px] text-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none" placeholder={t(translations.joinTeam.messagePlaceholder)} />
            </div>
            <button type="submit" className="btn-primary w-full gap-2 justify-center py-4">
              <Send className="w-3.5 h-3.5" /> {t(translations.joinTeam.submit)}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
