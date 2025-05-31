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
  title: "Pioneering Tech Solutions",
  subtitle: "Transforming Ideas into Reality",
  description:
    "vHackBotz is a cutting-edge technology company specializing in innovative solutions across web development, hardware integration, and creative design. Founded in 2018, we've been delivering exceptional digital experiences that help businesses thrive in the digital age.",
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
    description: "Full-stack web solutions with cutting-edge technologies.",
    features: [
      "Next.js & React Applications",
      "Custom Web Platforms",
      "E-commerce Solutions",
      "Progressive Web Apps",
    ],
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Hardware Solutions",
    description: "Custom hardware development and IoT solutions.",
    features: [
      "IoT Device Development",
      "Embedded Systems",
      "Hardware Prototyping",
      "Circuit Design",
    ],
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Design Services",
    description: "Creative design solutions for digital products.",
    features: [
      "UI/UX Design",
      "Brand Identity",
      "Motion Graphics",
      "3D Visualization",
    ],
  },
];

export const statsData = [
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
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
