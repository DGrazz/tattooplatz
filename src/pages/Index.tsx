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
    // Pequeño delay para la animación de salida del login
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        <motion.div
          key="login"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <LoginForm onSuccess={handleLoginSuccess} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProposalContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
