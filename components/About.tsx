"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutFeatures } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Ideas into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            At vHackBotz, we blend innovation with expertise to create
            cutting-edge solutions that drive business growth and digital
            transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {aboutFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 hover-glow"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
