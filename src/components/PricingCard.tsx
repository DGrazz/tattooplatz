import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const PricingCard = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl"
    >
      <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card to-secondary p-10 shadow-[var(--glow-primary)]">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="relative">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-3xl font-bold">{t.pricing.cardTitle}</h3>
            <p className="text-muted-foreground">{t.pricing.cardSubtitle}</p>
          </div>

          <div className="mb-8 text-center">
            <div className="mb-2">
              <span className="text-3xl sm:text-5xl font-bold text-primary whitespace-nowrap">3.500 CHF</span>
              <span className="ml-2 text-sm sm:text-lg text-muted-foreground">{t.pricing.setup}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{t.pricing.paymentPlan}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-4xl font-bold">300 CHF</span>
              <span className="text-base sm:text-lg text-muted-foreground">{t.pricing.month}</span>
            </div>
            <div className="mt-4 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">{t.pricing.monthlyAfterSetup}</span>
            </div>
          </div>

          <div className="space-y-4 border-t border-border pt-8">
            <p className="mb-4 text-center font-semibold text-foreground">{t.pricing.monthlyIncludes}</p>
            {t.pricing.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
