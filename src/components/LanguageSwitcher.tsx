import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "zh", label: "中文" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-body text-[11px] tracking-wide">
      {options.map((opt, i) => (
        <span key={opt.value} className="flex items-center">
          {i > 0 && <span className="text-foreground/25 mx-1">|</span>}
          <button
            onClick={() => setLang(opt.value)}
            className={`transition-colors px-0.5 ${
              lang === opt.value
                ? "text-foreground font-semibold"
                : "text-foreground/45 hover:text-foreground/70"
            }`}
          >
            {opt.label}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
