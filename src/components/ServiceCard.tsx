import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  index: number;
}

export const ServiceCard = ({ title, description, features, icon: Icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--glow-primary)]">
        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="relative">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
          
          <h3 className="mb-3 text-2xl font-bold">{title}</h3>
          <p className="mb-6 text-muted-foreground">{description}</p>
          
          <div className="space-y-3">
            <p className="text-sm font-semibold text-primary">Características:</p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
