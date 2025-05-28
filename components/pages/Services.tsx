"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
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

export default function ServicesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-muted opacity-80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering innovative solutions across web, hardware, and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 hover-glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="bg-primary/10 p-4 rounded-xl w-fit mb-6"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-glow">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full gradient-border hover:text-primary transition-colors"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ y }}
          className="mt-16 glass-card rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
