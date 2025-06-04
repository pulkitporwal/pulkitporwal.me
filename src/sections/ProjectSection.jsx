import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ExternalLink, Github } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const poppinsMedium = localFont({
  src: "../app/fonts/Poppins-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ProjectSection = () => {
  const projects = [
    {
      imgSrc: "/proj-snippeter.png",
      title: "SNIPPETER",
      desc: "A smart code snippet manager that lets developers save, organize, and generate code effortlessly using AI.",
      link: "https://snippeter-five.vercel.app/",
      githubLink: "https://github.com/pulkitporwal/snippeter",
      gradient: "from-[#0F2027] via-[#203A43] to-[#24243e]",
    },
    {
      imgSrc: "/proj-ai-presetnation-maker.png",
      title: "AI Presetation Maker",
      desc: "Create stunning AI-powered presentations with integrated 3D model support for visual storytelling.",
      link: "/",
      githubLink: "https://github.com/pulkitporwal/ai-presentation-maker",
      gradient: "from-[#3C3B3F] to-[#605C3C]",
    },
    // {
    //   imgSrc: "/proj-snippeter.png",
    //   title: "SNIPPETER",
    //   desc: "A smart code snippet manager that lets developers save, organize, and generate code effortlessly using AI.",
    //   link: "https://snippeter-five.vercel.app/",
    //   githubLink: "",
    //   gradient: "from-[#ad5389] to-[#3c1053]",
    // },
    // {
    //   imgSrc: "/proj-snippeter.png",
    //   title: "SNIPPETER",
    //   desc: "A smart code snippet manager that lets developers save, organize, and generate code effortlessly using AI.",
    //   link: "https://snippeter-five.vercel.app/",
    //   githubLink: "",
    //   gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    // },
  ];
  return (
    <section id="projects" className="relative z-10 flex w-full items-start justify-center overflow-hidden gap-10 pb-12">
      <ShootingStars starColor="#4C2F2F" />
      <StarsBackground />
      <div className="container p-4 gap-9 flex flex-col items-start justify-start h-full w-full md:px-40">
        <h2 className={`text-xl font-bold ${poppinsMedium.className}`}>
          Projects
        </h2>
        <div className="h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className="backdrop-blur-lg bg-[#1e1e218c] font-light rounded-lg border-[0.5px] border-neutral-700 flex flex-col items-start px-4 py-5 h-fit "
              >
                <div
                  className={`inset-0 bg-gradient-to-br ${project.gradient} opacity-80 h-60 w-full mb-4 flex items-center justify-center p-3`}
                >
                  <div className="relative w-full h-36 overflow-hidden">
                    <img
                      src={project.imgSrc}
                      className="w-full h-full absolute"
                      alt={project.title}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold flex items-center justify-between w-full mb-3">
                    {project.title}{" "}
                    <span className="flex items-center justify-center gap-3">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="hover:text-[#991133] transition-all ease-in duration-150"
                      >
                        <ExternalLink size={18} />
                      </Link>

                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="hover:text-[#991133] transition-all ease-in duration-150"
                      >
                        <Github size={18} />
                      </Link>
                    </span>
                  </h3>
                  <p className="text-neutral-400 text-sm">{project.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
