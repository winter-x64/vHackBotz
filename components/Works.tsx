"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

export default function Works() {
  return (
    <section id="works" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative
            solutions that have helped businesses grow.
          </p>
        </div>

        <div className="group flex max-md:flex-col justify-center gap-2 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto mb-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[25%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[25%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-full before:bg-gradient-to-t before:from-black/70 before:to-black/30 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-black/70 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
            >
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 md:opacity-70 md:group-hover:opacity-0 transition-opacity duration-300 z-10" />

              <div
                className={`hidden md:flex absolute inset-0 ${
                  projects.indexOf(project) % 2 === 0
                    ? "items-start pt-4"
                    : "items-end pb-4"
                } justify-center z-20 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300`}
              >
                <span className="px-4 py-2 text-white text-sm font-medium text-center max-w-[90%] overflow-hidden text-ellipsis">
                  {project.title}
                </span>
              </div>

              <a
                className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
                href="https://localhost:3000"
              >
                <h2 className="text-3xl font-medium md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {project.title}
                </h2>
                <p className="text-small font-medium md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {project.description}
                </p>
              </a>
              <div className="absolute inset-0 bg-black/30 group-hover/article:bg-black/0 transition-all duration-300" />
              <Image
                className="object-cover h-72 md:h-[420px] w-full"
                src={project.image}
                alt={project.title}
                width={960}
                height={480}
                priority
              />
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer">
            View all Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
