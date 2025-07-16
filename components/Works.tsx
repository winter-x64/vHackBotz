import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HourglassIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/constants";

export default function Works() {
  return (
    <section
      id="works"
      className="w-full py-16 md:py-24 container mx-auto px-4 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ff6a3d10_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-center mb-6 md:mb-8">
          OUR{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#ff9d6a]">
            PROJECTS
          </span>
        </h2>

        <Card className="w-full backdrop-blur-xl bg-black/20 rounded-[40px] border-2 border-[#ff6a3d]/70 p-6 md:p-8 mb-8 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-[#ff6a3d]/10 transition-all duration-500">
          <div className="group flex max-md:flex-col justify-center gap-4 md:gap-6 mx-auto">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[25%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[25%] transition-all duration-500 ease-[cubic-bezier(.3,.85,.3,1)] before:absolute before:inset-x-0 before:bottom-0 before:h-full before:bg-gradient-to-t before:from-black/90 before:to-transparent before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-black/50 after:backdrop-blur-sm after:rounded-lg after:transition-all focus-within:ring-2 focus-within:ring-[#ff6a3d]"
              >
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 md:opacity-70 md:group-hover:opacity-0 transition-opacity duration-300 z-10" />

                <div
                  className={`hidden md:flex absolute inset-0 ${
                    projects.indexOf(project) % 2 === 0
                      ? "items-start pt-4"
                      : "items-end pb-4"
                  } justify-center z-20 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300`}
                >
                  <span className="px-4 py-2 text-white text-sm font-medium text-center max-w-[90%] overflow-hidden text-ellipsis backdrop-blur-sm bg-black/50 rounded-full border border-white/10">
                    {project.title}
                  </span>
                </div>

                <a
                  className="absolute inset-0 text-white z-20 p-5 flex flex-col justify-end"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/article:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="absolute top-4 left-4 opacity-0 group-hover/article:opacity-100 transition-opacity duration-300 ease-out group-hover/article:delay-100">
                    <span className="text-xs text-[#ff6a3d] bg-black font-normal px-2 py-1 rounded-md border border-[#ff6a3d]/30">
                      {project.id}
                    </span>
                  </div>

                  <div className="relative overflow-hidden">
                    <h2 className="text-2xl md:text-3xl font-medium md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-300 ease-out group-hover/article:delay-200 group-focus-within/article:delay-200 text-shadow-sm">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-sm md:text-base font-medium mt-2 md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-300 ease-out group-hover/article:delay-300 group-focus-within/article:delay-300 line-clamp-2 text-white/90 text-shadow-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center mt-4 md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-300 ease-out group-hover/article:delay-400">
                    <span className="text-xs text-[#ff6a3d] bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#ff6a3d]/30">
                      View Project
                    </span>
                  </div>
                </a>

                <div className="absolute inset-0 bg-black/10 group-hover/article:bg-black/0 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                <Image
                  className="object-cover h-72 md:h-[420px] w-full transition-transform duration-700 ease-out group-hover/article:scale-110"
                  src={project.image}
                  alt={project.title}
                  width={960}
                  height={480}
                  loading="lazy"
                />
              </article>
            ))}

            <article className="project-card group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[25%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[25%] transition-all duration-500 ease-[cubic-bezier(.3,.85,.3,1)] focus-within:ring-2 focus-within:ring-[#ff6a3d] bg-black/20 backdrop-blur-sm border border-[#ff6a3d]/30">
              <div className="flex flex-col items-center justify-center h-72 md:h-[420px] w-full p-6 md:p-8 relative z-10">
                <div className="mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff6a3d]/20 border-2 border-[#ff6a3d]/50 rounded-xl flex items-center justify-center">
                    <HourglassIcon className="w-8 h-8 text-[#ff6a3d]" />
                  </div>
                </div>
                <div className="text-center space-y-3 md:space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff6a3d]">
                    Coming Soon...
                  </h3>
                  <p className="text-white/70 text-sm md:text-base max-w-xs leading-relaxed">
                    More awesome projects are on the way.
                    Stay tuned..!
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* <div className="text-center mt-10">
            <div className="inline-block backdrop-blur-md bg-gradient-to-r from-[#ff6a3d]/10 to-[#ff6a3d]/20 p-1 rounded-xl transition-transform hover:scale-105 active:scale-95">
              <Button className="bg-gradient-to-r from-[#ff6a3d] to-[#ff8c6a] text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-[#ff6a3d]/30 hover:shadow-xl hover:shadow-[#ff6a3d]/40 transition-all duration-300">
                Explore All Projects
              </Button>
            </div>
          </div> */}
        </Card>
      </div>
    </section>
  );
}
