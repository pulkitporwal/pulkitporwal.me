"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const logoGreater = useRef(null);
  const logoLess = useRef(null);
  const loaderScreen = useRef(null);
  const welcomeMessage = useRef(null);

  const messages = [
    "Hola",
    "Hello",
    "नमस्ते",
    "Bonjour",
    "こんにちは",
    "안녕하세요",
    "你好",
    "Привет",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useGSAP(() => {
    gsap.to(loaderScreen.current, {
      top: "-100%",
      delay: 3,
      duration: 1.5,
      ease: "bounce.out",
      backgroundColor: "#0f0f0f",
      zIndex: 999,
    });

    gsap.to(logoLess.current, {
      left: "10%",
      duration: 2,
      ease: "back.out(4)",
      zIndex: 1000,
    });

    gsap.to(logoGreater.current, {
      right: "10%",
      duration: 2,
      ease: "back.out(4)",
      zIndex: 1000,
    });

    gsap.from(welcomeMessage.current, {
      y: "-100%",
      opacity: 0,
      zIndex: 1000,
    });

    // Welcome message animation
    const messageLoop = () => {
      gsap.to(welcomeMessage.current, {
        opacity: 1,
        duration: 0.05,
        onComplete: () => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
          gsap.to(welcomeMessage.current, {
            opacity: 0,
            duration: 0.1,
            delay: 0.1, // Delay before showing the next message
          });
        },
      });
    };

    // Loop through the messages indefinitely
    const interval = setInterval(messageLoop, 300);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  });

  return (
    <div
      ref={loaderScreen}
      className="z-[1000000000000000000000000000000000000000000000] fixed w-screen h-screen bg-[#0f0f0f] top-0 left-0 flex items-center justify-center"
    >
      <svg
        className="z-1 absolute md:w-[250px] md:h-[250px] w-[150px] md:bottom-[20%] left-[30%] md:left-[40%]"
        ref={logoLess}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1020.000000 1020.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="grad-less" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#DD1818", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#333333", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g
          transform="translate(0.000000,1020.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M5652 6963 c-57 -54 -712 -685 -1457 -1403 l-1354 -1305 0 -405 0
            -405 1420 -1380 c781 -759 1438 -1395 1460 -1414 l39 -34 0 485 0 485 -1156
            1134 -1155 1134 34 30 c18 17 538 520 1155 1118 l1122 1089 0 484 c0 266 -1
            484 -3 484 -2 0 -49 -44 -105 -97z"
            fill="url(#grad-less)"
          />
        </g>
      </svg>

      <svg
        className="z-1 absolute md:w-[250px] md:h-[250px] w-[150px] md:bottom-[20%] right-[30%] md:right-[40%]"
        ref={logoGreater}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1020.000000 1020.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="grad-greater" x1="0%" y1="0%" x2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#240B36", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#C31432", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g
          transform="translate(0.000000,1020.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M4440 9087 l0 -483 478 -470 c262 -258 781 -768 1153 -1133 l676
            -664 -1153 -1119 -1154 -1119 0 -486 0 -486 50 44 c27 24 684 656 1459 1404
            l1410 1360 0 405 1 405 -717 695 c-394 382 -1049 1018 -1455 1413 -406 394
            -741 717 -743 717 -3 0 -5 -217 -5 -483z"
            fill="url(#grad-greater)"
          />
        </g>
      </svg>

      <div
        ref={welcomeMessage}
        className="absolute md:bottom-[30%] bg-[#0f0f0f] text-4xl md:text-6xl opacity-0 text-[#878282] font-black overflow-hidden w-[400px] h-[100px] gap-6 flex flex-col items-center justify-start"
      >
        <span>{messages[currentMessage]}</span>
      </div>
    </div>
  );
}
