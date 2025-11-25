import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "@/components/LoginForm";
import { ProposalContent } from "@/components/ProposalContent";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasAccess = localStorage.getItem("proposal_access") === "granted";
    if (hasAccess) {
      setIsAuthenticated(true);
      setShowContent(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    // Esperar a que el login desaparezca antes de mostrar las puertas
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div 
            key="login"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <LoginForm onSuccess={handleLoginSuccess} />
          </motion.div>
        ) : (
          <>
            {/* Door opening effect - Left door */}
            <motion.div
              key="door-left"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 left-0 w-1/2 bg-background z-50 border-r-2 border-primary/20 shadow-2xl"
              style={{
                background: "linear-gradient(to right, hsl(var(--background)), hsl(var(--card)))",
              }}
            />
            
            {/* Door opening effect - Right door */}
            <motion.div
              key="door-right"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 left-1/2 w-1/2 bg-background z-50 border-l-2 border-primary/20 shadow-2xl"
              style={{
                background: "linear-gradient(to left, hsl(var(--background)), hsl(var(--card)))",
              }}
            />

            {/* Content entering forward */}
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.7, z: -100 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1]
              }}
            >
              <ProposalContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
