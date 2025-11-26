export type Language = 'es' | 'en' | 'de';

interface LoginTranslations {
  title: string;
  subtitle: string;
  password: string;
  accessButton: string;
  verifying: string;
  incorrectPassword: string;
  tryAgain: string;
}

interface HeroTranslations {
  title1: string;
  title2: string;
  subtitle: string;
}

interface ServiceTranslations {
  title: string;
  description: string;
  features: string[];
}

interface ServicesTranslations {
  sectionTitle: string;
  sectionSubtitle: string;
  features: string;
  instagramBot: ServiceTranslations;
  bookingTool: ServiceTranslations;
  website: ServiceTranslations;
}

interface PricingTranslations {
  sectionTitle: string;
  sectionSubtitle: string;
  cardTitle: string;
  cardSubtitle: string;
  setup: string;
  month: string;
  paymentPlan: string;
  monthlyAfterSetup: string;
  monthlyIncludes: string;
  includes: string[];
}

export interface Translations {
  login: LoginTranslations;
  hero: HeroTranslations;
  services: ServicesTranslations;
  pricing: PricingTranslations;
}

export const translations: Record<Language, Translations> = {
  es: {
    login: {
      title: "Propuesta Confidencial",
      subtitle: "Introduce la contrasena para acceder",
      password: "Contrasena",
      accessButton: "Acceder",
      verifying: "Verificando...",
      incorrectPassword: "Contrasena incorrecta",
      tryAgain: "Por favor, intenta nuevamente",
    },
    hero: {
      title1: "Mas Clientes. Menos Gestion.",
      title2: "Todo en un solo sistema.",
      subtitle: "Una solucion que combina automatizacion inteligente, gestion de reservas y presencia digital para optimizar tu estudio.",
    },
    services: {
      sectionTitle: "Nuestra propuesta",
      sectionSubtitle: "Tres pilares fundamentales para modernizar tu estudio",
      features: "Caracteristicas:",
      instagramBot: {
        title: "Bot de Instagram Inteligente",
        description: "Automatiza la atencion en mensajes directos, respondiendo unicamente cuando se detecta una intencion real de reservar o solicitar informacion.",
        features: [
          "Deteccion de palabras clave configurables sin ayuda",
          "Respuestas automaticas a preguntas frecuentes",
          "Respuestas del bot completamente personalizables",
          "Redireccion directa a la herramienta de reservas",
          "Notificacion al estudio cuando se recibe un mensaje fuera de las palabras clave",
          "Comunicacion sobre disponibilidad de fechas",
        ],
      },
      bookingTool: {
        title: "Herramienta de Reservas",
        description: "Herramienta exclusiva desarrollada para centralizar y optimizar la gestion de citas del estudio.",
        features: [
          "Acceso para cada artista, con posibilidad de ver, modificar o bloquear sus horarios",
          "Panel que muestra todas las reservas del estudio en tiempo real",
          "Funcionalidad para aceptar o rechazar solicitudes de cita",
          "Control total sobre la disponibilidad general del equipo",
          "Estadisticas para visualizar volumen de reservas y uso del sistema",
          "Integracion directa con el bot y la web",
        ],
      },
      website: {
        title: "Pagina Web",
        description: "Herramienta exclusiva desarrollada para centralizar y optimizar la gestion de citas del estudio.",
        features: [
          "Sistema de reservas integrado",
          "Diseno responsivo, rapido y optimizado",
          "Navegacion clara y enfocada en la experiencia del usuario",
          "Preparada para escalar con nuevas funcionalidades en el futuro",
        ],
      },
    },
    pricing: {
      sectionTitle: "Inversion",
      sectionSubtitle: "Precio transparente con todo incluido",
      cardTitle: "Inversion Total",
      cardSubtitle: "Todo incluido, sin sorpresas",
      setup: "Setup",
      month: "/mes",
      paymentPlan: "50% por adelantado - 50% al terminar",
      monthlyAfterSetup: "Mensualidad solo tras setup completo",
      monthlyIncludes: "El precio mensual incluye",
      includes: [
        "Hosting profesional y seguro",
        "Soporte tecnico continuo",
        "Mantenimiento del sistema",
        "Mejoras y actualizaciones constantes",
      ],
    },
  },
  en: {
    login: {
      title: "Confidential Proposal",
      subtitle: "Enter the password to access",
      password: "Password",
      accessButton: "Access",
      verifying: "Verifying...",
      incorrectPassword: "Incorrect password",
      tryAgain: "Please try again",
    },
    hero: {
      title1: "More Clients. Less Management.",
      title2: "All in one system.",
      subtitle: "A solution that combines intelligent automation, booking management, and digital presence to optimize your studio.",
    },
    services: {
      sectionTitle: "Our Proposal",
      sectionSubtitle: "Three fundamental pillars to modernize your studio",
      features: "Features:",
      instagramBot: {
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
      },
      bookingTool: {
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
      },
      website: {
        title: "Website",
        description: "Exclusive tool developed to centralize and optimize the studio's appointment management.",
        features: [
          "Integrated booking system",
          "Responsive, fast and optimized design",
          "Clear navigation focused on user experience",
          "Ready to scale with new features in the future",
        ],
      },
    },
    pricing: {
      sectionTitle: "Investment",
      sectionSubtitle: "Transparent pricing with everything included",
      cardTitle: "Total Investment",
      cardSubtitle: "Everything included, no surprises",
      setup: "Setup",
      month: "/month",
      paymentPlan: "50% upfront - 50% upon completion",
      monthlyAfterSetup: "Monthly fee only after setup completion",
      monthlyIncludes: "The monthly price includes",
      includes: [
        "Professional and secure hosting",
        "Continuous technical support",
        "System maintenance",
        "Constant improvements and updates",
      ],
    },
  },
  de: {
    login: {
      title: "Vertraulicher Vorschlag",
      subtitle: "Passwort eingeben, um Zugang zu erhalten",
      password: "Passwort",
      accessButton: "Zugriff",
      verifying: "Ueberpruefung...",
      incorrectPassword: "Falsches Passwort",
      tryAgain: "Bitte versuchen Sie es erneut",
    },
    hero: {
      title1: "Mehr Kunden. Weniger Verwaltung.",
      title2: "Alles in einem System.",
      subtitle: "Eine Loesung, die intelligente Automatisierung, Buchungsverwaltung und digitale Praesenz kombiniert, um Ihr Studio zu optimieren.",
    },
    services: {
      sectionTitle: "Unser Angebot",
      sectionSubtitle: "Drei grundlegende Saeulen zur Modernisierung Ihres Studios",
      features: "Funktionen:",
      instagramBot: {
        title: "Intelligenter Instagram-Bot",
        description: "Automatisiert die Bearbeitung von Direktnachrichten und antwortet nur bei echten Buchungs- oder Informationsanfragen.",
        features: [
          "Konfigurierbare Schluesselworterkennung ohne Hilfe",
          "Automatische Antworten auf haeufig gestellte Fragen",
          "Vollstaendig anpassbare Bot-Antworten",
          "Direkte Weiterleitung zum Buchungstool",
          "Studio-Benachrichtigung bei Nachrichten ausserhalb der Schluesselwoerter",
          "Kommunikation ueber Datumsverfuegbarkeit",
        ],
      },
      bookingTool: {
        title: "Buchungstool",
        description: "Exklusives Tool zur Zentralisierung und Optimierung der Terminverwaltung des Studios.",
        features: [
          "Zugang fuer jeden Kuenstler mit der Moeglichkeit, Zeitplaene anzusehen, zu aendern oder zu blockieren",
          "Dashboard mit allen Studio-Buchungen in Echtzeit",
          "Funktion zum Annehmen oder Ablehnen von Terminanfragen",
          "Vollstaendige Kontrolle ueber die allgemeine Verfuegbarkeit des Teams",
          "Statistiken zur Visualisierung von Buchungsvolumen und Systemnutzung",
          "Direkte Integration mit Bot und Website",
        ],
      },
      website: {
        title: "Webseite",
        description: "Exklusives Tool zur Zentralisierung und Optimierung der Terminverwaltung des Studios.",
        features: [
          "Integriertes Buchungssystem",
          "Responsives, schnelles und optimiertes Design",
          "Klare Navigation mit Fokus auf Benutzererfahrung",
          "Bereit fuer neue Funktionen in der Zukunft",
        ],
      },
    },
    pricing: {
      sectionTitle: "Investition",
      sectionSubtitle: "Transparente Preise mit allem inklusive",
      cardTitle: "Gesamtinvestition",
      cardSubtitle: "Alles inklusive, keine Ueberraschungen",
      setup: "Setup",
      month: "/Monat",
      paymentPlan: "50% im Voraus - 50% bei Fertigstellung",
      monthlyAfterSetup: "Monatliche Gebuehr erst nach Setup-Abschluss",
      monthlyIncludes: "Der monatliche Preis beinhaltet",
      includes: [
        "Professionelles und sicheres Hosting",
        "Kontinuierlicher technischer Support",
        "Systemwartung",
        "Staendige Verbesserungen und Updates",
      ],
    },
  },
};
