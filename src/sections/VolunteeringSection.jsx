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

const VolunteeringSection = () => {
  return (
    <section className="relative z-10 flex w-full items-start justify-center overflow-hidden gap-10">
      <ShootingStars starColor="#4C2F2F" />
      <StarsBackground />
      <div className="container p-4 gap-9 flex flex-col items-start justify-start h-full w-full md:px-40">
        <h2 className={`text-xl font-bold ${poppinsMedium.className}`}>
          Volunteering
        </h2>
        <div className="flex w-full ">
          <Link target="_blank" href={"https://www.amity.edu/jaipur/nss-aur/index.html"} className="flex flex-col md:flex-row w-full justify-between gap-4 ">
            <div className="flex flex-row gap-4 items-center">
              <img
                alt="NSS - AUR"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="rounded-full border-2 border-SECONDARY shadow-sm"
                src="/nss.jpeg"
              />
              <div>
                <h3 className="font-semibold">National Service Scheme - Amity University Rajasthan</h3>
                <p className="text-sm opacity-80">Technical Head</p>
              </div>
            </div>
            <p className="text-sm opacity-80 ml-16 md:ml-0">Jan 2024 - Present</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
