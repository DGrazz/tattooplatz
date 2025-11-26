import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <div className="fixed right-6 top-6 z-50">
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 p-2 backdrop-blur-sm shadow-lg">
        <Languages className="h-4 w-4 text-muted-foreground ml-2" />
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              language === lang.code
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            <span>{lang.flag}</span>
            <span className="hidden sm:inline">{lang.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
