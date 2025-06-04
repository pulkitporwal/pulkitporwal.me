"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import localFont from "next/font/local";

const poppinsMedium = localFont({
  src: "../app/fonts/Poppins-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function BlogSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="blogs" className="relative z-10 flex w-full items-start justify-center overflow-hidden gap-10 py-5">
      <ShootingStars starColor="#4C2F2F" />
      <StarsBackground />
      <div className="container p-4 gap-9 flex flex-col items-start justify-start h-full w-full md:px-40">
        <h2 className={`text-xl font-bold ${poppinsMedium.className}`}>
          Blogs
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    link: "https://pulkitporwal.hashnode.dev/node-js-is-dead",
    title: "Node.js is Dead",
    src: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/95YRwf6CNw8/upload/ff7c78cf6486b021de0c6c482875fd14.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    desc: `Recently we heard that Node.js is Dead, Is that True? Well, I think this is partially true. Because the inventor of node.js Ryan Dahl announced in a seminar that `
  },
  {
    link: "https://pulkitporwal.hashnode.dev/why-did-javascript-come-into-the-picture-need-of-javascript",
    title: "Why did JavaScript comes into the Picture? Need of JavaScript",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1674909949461/179eb889-8235-4c80-b8a4-90d87297bfd9.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    desc: "Javascript is the most popular Language on Earth. The reason is that Javascript is a very Versatile Language and there are many use cases of Javascript in the coding World like Managing the Backends of the Website,"
  },
  {
    link: "https://pulkitporwal.hashnode.dev/does-html-is-a-programming-language-or-not",
    title: "Does HTML is a Programming Language or not?",
    src: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Fi-GJaLRGKc/upload/07e7392382a9a2f3c4b05dc5fc7fb021.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    desc: "I saw many times that People say that HTML is a Programming Language but it is not true because HTML is not a Programming Language But it is a Markup Language. Now You thinking what is the"
  },
  
  {
    link: "https://pulkitporwal.hashnode.dev/accesstoken-vs-refreshtoken-complete-guide-to-understand",
    title: "accessToken vs refreshToken",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1704056108881/c58e87ec-627f-49d9-ae0e-0efb930be0af.png?auto=compress,format&format=webp",
    desc: "In this article, we are going to discuss accessToken and refreshToken. First, we understand what are these, and then we understand the difference between them and at last, we see some practical work of these."
  },
];
