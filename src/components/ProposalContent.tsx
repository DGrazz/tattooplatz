import { motion } from "framer-motion";
import { Bot, Calendar, Globe } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";

export const ProposalContent = () => {
  const services = [
    {
      title: "Smart Instagram Bot",
      description: "Automates direct message handling, responding only when a genuine booking or information request is detected.",
      features: [
        "Configurable keyword detection without assistance",
        "Automatic responses to frequently asked questions",
        "Fully customizable bot responses",
        "Direct redirection to the booking tool",
        "Studio notification for messages outside keywords",
        "Communication about date availability",
      ],
      icon: Bot,
    },
    {
      title: "Booking Tool",
      description: "Exclusive tool developed to centralize and optimize the studio's appointment management.",
      features: [
        "Access for each artist, with the ability to view, modify or block their schedules",
        "Dashboard displaying all studio bookings in real-time",
        "Functionality to accept or reject appointment requests",
        "Complete control over the team's general availability",
        "Statistics to visualize booking volume and system usage",
        "Direct integration with the bot and website",
      ],
      icon: Calendar,
    },
    {
      title: "Website",
      description: "Exclusive tool developed to centralize and optimize the studio's appointment management.",
      features: [
        "Integrated booking system",
        "Responsive, fast and optimized design",
        "Clear navigation focused on user experience",
        "Ready to scale with new features in the future",
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
            More Clients. Less Management.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              All in one system.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A solution that combines intelligent automation, booking management, and digital presence to optimize your studio.
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
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Our Proposal</h2>
            <p className="text-lg text-muted-foreground">
              Three fundamental pillars to modernize your studio
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
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Investment</h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing with everything included
            </p>
          </motion.div>

          <PricingCard />
        </div>
      </section>

    </motion.div>
  );
};
