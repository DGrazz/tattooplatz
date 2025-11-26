import { motion } from "framer-motion";
import { Bot, Calendar, Globe } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";

export const ProposalContent = () => {
  const services = [
    {
      title: "Bot de Instagram Inteligente",
      description: "Automatiza la atención en mensajes directos, respondiendo únicamente cuando se detecta una intención real de reservar o solicitar información.",
      features: [
        "Detección de palabras clave configurables sin ayuda",
        "Respuestas automáticas a preguntas frecuentes",
        "Respuestas del bot completamente personalizables",
        "Redirección directa a la herramienta de reservas",
        "Notificación al estudio cuando se recibe un mensaje fuera de las palabras clave",
        "Comunicación sobre disponibilidad de fechas",
      ],
      icon: Bot,
    },
    {
      title: "Herramienta de Reservas",
      description: "Herramienta exclusiva desarrollada para centralizar y optimizar la gestión de citas del estudio.",
      features: [
        "Acceso para cada artista, con posibilidad de ver, modificar o bloquear sus horarios",
        "Panel que muestra todas las reservas del estudio en tiempo real",
        "Funcionalidad para aceptar o rechazar solicitudes de cita",
        "Control total sobre la disponibilidad general del equipo",
        "Estadísticas para visualizar volumen de reservas y uso del sistema",
        "Integración directa con el bot y la web",
      ],
      icon: Calendar,
    },
    {
      title: "Página Web",
      description: "Herramienta exclusiva desarrollada para centralizar y optimizar la gestión de citas del estudio.",
      features: [
        "Sistema de reservas integrado",
        "Diseño responsivo, rápido y optimizado",
        "Navegación clara y enfocada en la experiencia del usuario",
        "Preparada para escalar con nuevas funcionalidades en el futuro",
      ],
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
            Más Clientes. Menos Gestión.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Todo en un solo sistema.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Una solución que combina automatización inteligente, gestión de reservas y presencia digital para optimizar tu estudio.
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
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Nuestra propuesta</h2>
            <p className="text-lg text-muted-foreground">
              Tres pilares fundamentales para modernizar tu estudio
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
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Inversión</h2>
            <p className="text-lg text-muted-foreground">
              Precio transparente con todo incluido
            </p>
          </motion.div>

          <PricingCard />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary p-12 text-center shadow-[var(--glow-primary)]"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contáctanos para comenzar y aprovecha el primer mes gratuito
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Comenzar Ahora
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};
