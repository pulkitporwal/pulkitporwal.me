import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = (e) => {
      const classList = e.target.classList;
      setHoveredElement([...classList].join(" "));
    };

    const mouseLeave = () => {
      setHoveredElement("");
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".hover-effect").forEach((element) => {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".hover-effect").forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hoveredElement} z-[1000000000000000000000] `}
      style={{ transform: translate(${position.x}px, ${position.y}px) }}
    />
  );
};

export default CursorFollower;