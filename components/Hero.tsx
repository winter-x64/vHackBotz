"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-glow">Hack.</span>
            <span className="block gradient-text">Build.</span>
            <span className="block text-primary">Dominate.</span>
          </h1>
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We build cutting-edge digital solutions that transform businesses
            and drive growth in the digital age.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-lg w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                variant="outline"
                className="gradient-border text-foreground hover:text-primary font-medium text-lg w-full sm:w-auto"
                asChild
              >
                <a href="#services" className="flex items-center">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="w-8 h-12 border-2 border-muted rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
