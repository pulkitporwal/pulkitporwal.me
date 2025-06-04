"use client"
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full flex z-[99999] justify-between items-start fixed top-3 px-4 md:px-10">
      <div>
        {/* Added responsive size classes */}
        <img src="/logo.svg" className="w-8 md:hidden" alt="Logo" />
      </div>
      <nav className="flex gap-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
        <Link className="nav-item" href={"#blogs"}>Blogs</Link>
        <Link className="nav-item" href={"#projects"}>Projects</Link>
        <Link className="nav-item bg-white text-neutral-800" href={"#contact"}>Contact</Link>
      </nav>
      <div></div>
    </div>
  );
};