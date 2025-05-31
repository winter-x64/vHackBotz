"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { whyUs } from "@/lib/constants";


export default function WhyUs() {
  const containerRef = useRef(null);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">vHackBotz</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence and innovation sets us apart in
            delivering exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.title}
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
