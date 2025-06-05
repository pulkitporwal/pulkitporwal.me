"use client";
import Loader from "@/components/Loader";
import { Header } from "@/sections/Header";
import HeroSection from "@/sections/HeroSetion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BlogSection from "@/sections/BlogSection";
import ExperienceSection from "@/sections/ExperienceSection";
import VolunteeringSection from "@/sections/VolunteeringSection";
import ProjectSection from "@/sections/ProjectSection";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.to(".circle-1", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 3.7,
      ease: "power1.inOut",
    });
    gsap.to(".circle-2", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 3.9,
      ease: "power1.inOut",
    });
    gsap.to(".circle-3", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 4.1,
      ease: "power1.inOut",
    });
    gsap.to(".circle-4", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 4.1,
      ease: "power1.inOut",
    });
    gsap.to(".circle-5", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 4.1,
      ease: "power1.inOut",
    });
    gsap.to(".circle-6", {
      scaleX: "110%",
      scaleY: "110%",
      duration: 1,
      delay: 4.1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: "expo.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={cursorRef}
        className="cursor -translate-x-1/2 -translate-y-1/2 hidden md:block md:fixed top-0 lef-0 bg-[#dedede] w-4 h-4 rounded-full mix-blend-difference"
      ></div>
      <Loader />
      <Header />

      <HeroSection />
      <ExperienceSection />
      <VolunteeringSection />
      <BlogSection />
      <ProjectSection />

      <footer className="relative text-sm z-10 flex w-full items-start justify-center overflow-hidden gap-10 pb-8 pt-2 text-neutral-400">Copyright &copy; 2025 Pulkit Porwal</footer>
    </div>
  );
}
