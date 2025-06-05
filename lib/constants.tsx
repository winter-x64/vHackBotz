import {
  Code2,
  Cpu,
  Palette,
  Lightbulb,
  Rocket,
  Mail,
  Home,
  Info,
  Settings,
  Briefcase,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Works", href: "#works", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const aboutUs = {
  headline: "Pioneering Tech Solutions",
  subheadline: "Transforming Ideas into Reality",
  description:
    "vHackBotz is a cutting-edge technology company specializing in innovative solutions across web development, hardware integration, and creative design. Founded in 2018, we've been delivering exceptional digital experiences that help businesses thrive in the digital age.",
  content: [
    {
      title: "Who We Are",
      text: "We are a diverse team of engineers, designers, and visionaries passionate about pushing the boundaries of what's possible with technology. Our experts combine deep technical knowledge with creative problem-solving to deliver solutions that matter.",
    },
    {
      title: "Our Approach",
      text: "We believe in collaborative development that puts your needs first. Our agile methodology ensures transparent communication, rapid iterations, and solutions that evolve with your requirements.",
    },
    {
      title: "Our Expertise",
      text: "From cutting-edge web applications to IoT solutions and immersive digital experiences, our technical prowess spans across multiple domains. We specialize in turning complex problems into elegant, efficient solutions.",
    },
  ],
};

export const whyUs = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation First",
    description:
      "We stay ahead of technological trends to deliver forward-thinking solutions.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Technical Excellence",
    description:
      "Our team of experts ensures the highest quality in every project we deliver.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Rapid Delivery",
    description:
      "We believe in agile development to bring your ideas to market faster.",
  },
];

export const services = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Web Development",
    description:
      "Enterprise-grade web applications engineered with modern frameworks and serverless architecture.",
    points: [
      "Enterprise SaaS solutions for enterprise business requirements",
      "Robust architecture designed for seamless integration and extensibility",
      "High-performance applications with 99.9% uptime guarantee",
      "Comprehensive API development with industry-standard documentation",
    ],
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Hardware Solutions",
    description:
      "Custom embedded systems and IoT infrastructure designed for industrial applications.",
    points: [
      "Mission-critical embedded systems for industrial environments",
      "End-to-end encrypted infrastructure ensuring data security",
      "Advanced monitoring systems with predictive maintenance",
      "Standards-compliant sensor networks for industrial automation",
    ],
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Design Services",
    description:
      "User-centered interface design and experience architecture focused on accessibility and conversion.",
    points: [
      "Evidence-based research methods driving user experience strategy",
      "Accessibility-compliant interfaces meeting international standards",
      "Scalable design frameworks ensuring consistent brand experience",
      "Data-driven design optimization to maximize conversion metrics",
    ],
  },
];

export const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management.",
    image:
      "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics",
    description:
      "Advanced analytics platform using machine learning algorithms.",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  },
  {
    title: "Smart Home System",
    description: "IoT-based home automation system with voice control.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
  },
  {
    id: "vr-training",
    title: "Virtual Reality Training",
    description:
      "Immersive VR-based training solutions for various industries.",
    image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Research",
    description:
      "Pioneering research into quantum algorithms and applications.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    id: "delivery-robots",
    title: "Autonomous Delivery Robots",
    description: "Self-navigating robots for last-mile delivery solutions.",
    image: "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Defense Platform",
    description:
      "Advanced threat detection and prevention system for enterprises.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
  },
  {
    id: "edtech",
    title: "EdTech Learning Platform",
    description: "Personalized learning experiences powered by AI adaptivity.",
    image: "https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg",
  },
];

export const contactInfo = [
  {
    title: "Email",
    value: "info@vhackbotz.com",
    href: "mailto:info@vhackbotz.com",
  },
  {
    title: "Schedule a Meeting",
    value: "Book a time on our calendar",
    href: "https://cal.com/vhackbotz/meeting",
  },
];

export const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Github className="h-5 w-5" />, href: "#", label: "Github" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
];

export const ctaContent = {
  badge: "Join the Innovation",
  title: "Accelerate Your Business Growth with Impactful Solutions",
  description:
    "In today's rapidly evolving tech landscape, staying competitive requires innovative solutions. Our platform leverages cutting-edge AI to streamline operations, analyze data, and drive intelligent decision-making for forward-thinking businesses.",
  primaryButtonText: "Book a Demo",
  secondaryButtonText: "Contact Sales",
};
