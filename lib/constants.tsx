import {
  Code2,
  Palette,
  Lightbulb,
  Rocket,
  Mail,
  Home,
  Info,
  Settings,
  Briefcase,
  Github,
  Linkedin,
  Instagram,
  MessagesSquare,
  Brain,
  TestTubeDiagonal,
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
    "We don’t just build websites or brands. We design digital experiences that move fast, scale effortlessly, and leave an impression. From bold startups to growing enterprises, our work combines design-led thinking, modern development, and an obsession with quality.",
  content: [
    {
      title: "Who We Are",
      text: "vHackBotz is a creative-tech studio where curiosity meets execution. We’re a collective of designers, engineers, and strategists who believe in building what we wish existed then sharing it with the world. Whether it’s a custom SaaS platform, a reimagined brand identity, or an internal tool that becomes your next product, we love turning ideas into impact.",
    },
    {
      title: "Our Approach",
      text: "Design-led. Code-driven. Brand-focused. We start by understanding your vision, your users, and your goals. Then we move quickly, prototyping and refining until the solution is not only functional but unforgettable. Collaboration is at the heart of everything we do: we work as an extension of your team to launch with confidence.",
    },
    {
      title: "Our Expertise",
      text: "From full-stack product development and responsive websites to distinctive brand systems and content strategies, our expertise bridges design and engineering. We thrive at the intersection of creativity and technology—and we bring that mindset to every project.",
    },
  ],
};

export const whyUs = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "We Think Like Founders",
    description:
      "We’ve built our own products  so we understand what it takes to launch fast, stay lean, and create value. We're not just an agency  we’re builders at heart.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Design Meets Code",
    description:
      "We blend clean, intentional design with scalable engineering. Whether you need a landing page or a full SaaS platform, we bring the best of UI/UX and full-stack development.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Strategy-First Approach",
    description:
      "From positioning and messaging to branding and launch planning, we help you make the right moves  before and after you ship.",
  },
  {
    icon: <TestTubeDiagonal className="h-8 w-8 text-primary" />,
    title: "We Experiment So You Can Grow",
    description:
      "We're constantly building, testing, and evolving. Our studio model lets us innovate internally and apply real insights to every project we take on.",
  },
];

export const services = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Product Engineering",
    description:
      "Custom websites, MVPs, and full-stack SaaS platforms built with the latest technologies for performance and scalability.",
    points: [
      "Mobile-first, responsive design to ensure a seamless experience across devices.",
      "API integrations, automation, and secure deployments that grow with your business.",
    ],
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Brand Identity",
    description:
      "Logo design, visual identity systems, and brand guidelines that make your business stand out and build trust.",
    points: [
      "Comprehensive brand kits including color palettes, typography, and usage rules.",
      "Consistent visual storytelling across all your digital touchpoints.",
    ],
  },
  {
    icon: <MessagesSquare className="h-10 w-10" />,
    title: "Social Media Marketing",
    description:
      "Strategy, content creation, and daily management to grow your brand and engage your audience on every platform.",
    points: [
      "Campaign planning and scheduling tailored to your target audience.",
      "Performance tracking and optimization to maximize reach and conversions.",
    ],
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Studio Experiments",
    description:
      "We launch our own products to solve real problems and test bold ideas.",
    points: [
      "Rapid prototyping and market validation to identify new opportunities.",
      "Dedicated support and continuous improvement for products we incubate.",
    ],
  },
];

export const projects = [
  {
    id: "SaaS",
    title: "DropaNote",
    description:
      "DropaNote is a lightweight feedback collection tool that allows users to create embeddable feedback forms instantly.",
    image: "/dropanote.svg",
    link: "https://dropanote.onrender.com/",
  },
  {
    id: "Product",
    title: "BuilderClan Website",
    description:
      "BuilderClan is a tech community where innovators, developers, and enthusiasts come together to collaborate, learn, and build impactful projects.",
    image: "/builderclan-site.svg",
    link: "https://builderclan.vercel.app",
  },
  // {
  //   id: "edtech",
  //   title: "EdTech Learning Platform",
  //   description: "Personalized learning experiences powered by AI adaptivity.",
  //   image: "https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg",
  //   link: "https://edtech.vhackbotz.com",
  // },
];

export const cta = {
  badge: "Join the Process",
  title: "Ready to Launch Your Next Big Idea?",
  description:
    "From startup SaaS products to brand makeovers, vHackBotz helps founders build what they've always wanted. Let's create something remarkable together.",
  primaryButton: {
    text: "Book a Free Consultation",
    href: "https://cal.com/vhackbotz",
    type: "calendar",
  },
  secondaryButton: {
    text: "For Enquiries",
    href: "mailto:alvindennis80@gmail.com",
    type: "email",
  },
};

export const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "#", label: "Github" },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/company/vhackbotz",
    label: "LinkedIn",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://www.instagram.com/vhackbotz/",
    label: "Instagram",
  },
];
