import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  MessageCircleReply,
  PinIcon,
  PinOff,
  Twitter,
  X,
} from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const poppinsBold = localFont({
  src: "../app/fonts/Poppins-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppinsMedium = localFont({
  src: "../app/fonts/Poppins-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HeroSetion = () => {
  const skills = [
    "JavaScript",
    "Python",
    "React JS",
    "Next JS",
    "Express JS",
    "MongoDB",
    "Tailwind CSS",
    "Node",
    "TypeScript",
    "GSAP",
    "Git",
    "Github",
    "Generative AI",
  ];

  const socials = [
    { link: "https://www.github.com/pulkitporwal", icon: Github },
    { link: "https://www.linkedin.com/in/pulkitporwal", icon: Linkedin },
    { link: "https://www.instagram.com/dev_pulkit", icon: Instagram },
    { link: "https://www.x.com/pulkitporwaldev", icon: Twitter },
  ];

  return (
    <section className="md:mt-16 relative mt-16 z-10 flex w-full items-start justify-center overflow-hidden gap-10">
      <ShootingStars starColor="#4C2F2F" />
      <StarsBackground />
      <div className="container p-4 py-12 gap-9 z-[10000] flex flex-col items-start justify-start h-full w-full md:px-40">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start justify-start w-full gap-9">
            <h2 className={`text-3xl font-bold ${poppinsBold.className}`}>
              Pulkit Porwal
            </h2>
            <p
              className={`md:text-base text-sm md:w-[40vw] md:leading-7 leading-6`}
            >
              I&apos;m a full-stack developer and freelancer with a passion for
              building scalable products and user-friendly web applications. I
              focus on writing clean, efficient code and delivering high-quality
              solutions that meet client needs and business goals.
            </p>
          </div>
          <div>
            <div className="card w-60 hidden md:block">
              <div className="card__content text-center relative p-20 transition-transform duration-300 text-white font-bold">
                <div className="card__front rounded-full absolute top-0 bottom-0 right-0 left-0 p-8 bg-transparent flex items-center justify-center">
                  <img src="/logo.svg" className="md:w-24" alt="Logo" />
                </div>
                <div className="card__back rounded-full w-full absolute inset-0 p-8 bg-transparent flex items-center justify-center">
                  <img
                    src="/me.jpg"
                    className="w-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex gap-4 items-center justify-center text-[14px]`}>
          <a
            href="/api/resume"
            download={true}
            className="bg-neutral-100  border-neutral-100 border-[0.5px] text-black px-2 py-2 rounded-lg transition-all hover:bg-transparent hover:text-neutral-100 duration-300 flex gap-2 items-center justify-center"
          >
            Download Resume <Download size={18} />
          </a>
          {/* <button className="text-neutral-100 border-neutral-100 border-[0.5px] px-2 py-2 rounded-lg flex gap-2 items-center justify-center">
            Message <MessageCircleReply size={18} />
          </button> */}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="backdrop-blur-lg bg-[#1e1e218c] font-light rounded-lg flex-1 w-full md:w-1/2 min-h-[200px] border-[0.5px] border-neutral-700 flex flex-col items-start px-4 py-5">
            <h2 className={`text-xl font-bold ${poppinsMedium.className}`}>
              Skills
            </h2>
            <div className="flex text-sm flex-row flex-wrap items-start justify-start gap-x-2 gap-y-2 h-fit mt-4">
              {skills.map((skill) => {
                return (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#2e2e30] text-neutral-100 rounded-xl "
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div
            id="contact"
            className="backdrop-blur-lg bg-[#1e1e218c] font-light rounded-lg flex-1 w-full md:w-1/2 min-h-[200px] border-[0.5px] border-neutral-700 flex flex-col items-start px-4 py-5"
          >
            <h2 className={`text-xl font-bold ${poppinsMedium.className}`}>
              Let&apos;s Connect
            </h2>
            <div className="flex text-sm flex-row flex-wrap items-start justify-start gap-x-2 gap-y-2 h-fit mt-4">
              {socials.map((social) => {
                return (
                  <Link
                    key={social.link}
                    target="_blank"
                    href={social.link}
                    className="px-2 py-2 bg-[#2e2e30] text-neutral-100 rounded-xl "
                  >
                    <social.icon size={18} />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row w-full gap-5 md:gap-12">
              <a
                href={"mailto:pulkitporwal.dev@gmail.com"}
                className="flex items-start justify-start flex-col mt-3 text-sm"
              >
                <h2 className="flex items-center justify-center gap-2">
                  <Mail size={14} /> Email:
                </h2>
                <p className="ml-[22px]">pulkitporwal.dev@gmail.com</p>
              </a>

              <a
                target="_blank"
                href={"https://maps.app.goo.gl/JGh5yhr7nzBk5Zt86"}
                className="flex items-start justify-start flex-col mt-3 text-sm"
              >
                <h2 className="flex items-center justify-center gap-2">
                  <MapPin size={14} /> Location:
                </h2>
                <p className="ml-[22px]">Jaipur, India 🇮🇳</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSetion;
