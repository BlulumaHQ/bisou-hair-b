const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BisouHairMetro",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@bisou.hair.salon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bisouhair_vancouver/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@bisouhair_vancouver",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12.5 7.5c2.5 0 4 1.5 4 4s-1.5 4-4 4c-1.5 0-2.5-.5-3-1.5" />
        <path d="M8.5 12c0-2.5 1.5-4.5 4-4.5" />
      </svg>
    ),
  },
];

interface SocialIconsProps {
  className?: string;
  iconSize?: string;
}

const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
