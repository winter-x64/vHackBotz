"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management.",
    image: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced analytics platform using machine learning algorithms.",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Smart Home System",
    description: "IoT-based home automation system with voice control.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    tags: ["IoT", "React", "AWS"],
  },
];

export default function WorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-muted opacity-80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Latest <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
            that have helped businesses grow.
          </p>
        </motion.div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group relative overflow-hidden glass-card rounded-2xl hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-glow">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full gradient-border hover:text-primary transition-colors"
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}