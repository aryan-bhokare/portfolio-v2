import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

import aryan_header_black from "@/public/aryan_dark.png";
import aryan_header_white from "@/public/aryan_white.png";

const navLinks = [
  { name: "work", link: "#work" },
  { name: "timeline", link: "#timeline" },
  { name: "stack", link: "#stack" },
  { name: "contact", link: "#contact" },
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      ref={navRef}
      className={`sticky top-4 z-40 mx-auto mt-4 w-[92%] max-w-3xl rounded-2xl border backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "border-line-l bg-white/80 shadow-lg shadow-black/5 dark:border-line-d dark:bg-ink-700/80"
          : "border-transparent bg-white/40 dark:bg-ink-700/30"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-2.5">
        <Link href="#top" className="select-none">
          <Image
            src={currentTheme === "dark" ? aryan_header_white : aryan_header_black}
            alt="Aryan Bhokare"
            width={88}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.name}>
              <Link
                href={l.link}
                className="font-mono text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark dark:hover:text-accent"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/AryanResumeSDE.pdf"
            target="_blank"
            className="hidden items-center gap-1 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep sm:inline-flex"
          >
            résumé
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-muted transition-colors hover:text-accent dark:text-muted-dark"
          >
            {currentTheme === "dark" ? (
              <MdOutlineLightMode className="h-4 w-4" />
            ) : (
              <MdOutlineDarkMode className="h-4 w-4" />
            )}
          </button>

          {/* mobile menu toggle */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden"
          >
            <span
              className={`h-[2px] w-4 bg-txt transition-all dark:bg-txt-dark ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-4 bg-txt transition-all dark:bg-txt-dark ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-4 bg-txt transition-all dark:bg-txt-dark ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line-l px-5 py-4 dark:border-line-d md:hidden">
          {navLinks.map((l) => (
            <li key={l.name}>
              <Link
                href={l.link}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-muted hover:text-accent dark:text-muted-dark"
              >
                {l.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/AryanResumeSDE.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-sm text-accent"
            >
              résumé ↗
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
