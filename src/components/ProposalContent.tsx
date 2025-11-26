import { motion } from "framer-motion";
import { Bot, Calendar, Globe } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

export const ProposalContent = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t.services.instagramBot.title,
      description: t.services.instagramBot.description,
      features: t.services.instagramBot.features,
      icon: Bot,
    },
    {
      title: t.services.bookingTool.title,
      description: t.services.bookingTool.description,
      features: t.services.bookingTool.features,
      icon: Calendar,
    },
    {
      title: t.services.website.title,
      description: t.services.website.description,
      features: t.services.website.features,
      icon: Globe,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background"
    >
      <LanguageSelector />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero),_transparent_50%)]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {t.hero.title1}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">{t.services.sectionTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {t.services.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">{t.pricing.sectionTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {t.pricing.sectionSubtitle}
            </p>
          </motion.div>

          <PricingCard />
        </div>
      </section>

    </motion.div>
  );
};
