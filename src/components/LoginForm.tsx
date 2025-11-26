import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (password === "admin") {
        onSuccess();
      } else {
        toast({
          title: t.login.incorrectPassword,
          description: t.login.tryAgain,
          variant: "destructive",
        });
        setPassword("");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <LanguageSelector />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gradient-hero),_transparent_50%)]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 shadow-[var(--glow-primary)]"
          >
            <Lock className="h-10 w-10 text-primary" />
          </motion.div>
          
          <h1 className="mb-2 text-3xl font-bold">{t.login.title}</h1>
          <p className="text-muted-foreground">
            {t.login.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="password"
              placeholder={t.login.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 border-border bg-card/50 px-4 text-lg backdrop-blur-sm transition-all focus:border-primary focus:shadow-[var(--glow-primary)]"
              disabled={isLoading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading || !password}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-14 w-full rounded-lg bg-primary font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-[var(--glow-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent"
                />
                {t.login.verifying}
              </span>
            ) : (
              t.login.accessButton
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
