import { useEffect, useState } from "react";
import Link from "next/link";
import { FiStar, FiGitBranch, FiGithub } from "react-icons/fi";

const Footer = () => {
  const [meta, setMeta] = useState({ star: 0, forks: 0 });

  useEffect(() => {
    fetch("https://api.github.com/repos/aryan-bhokare/portfolio-v2")
      .then((res) => res.json())
      .then((data) =>
        setMeta({ star: data.stargazers_count, forks: data.forks_count })
      )
      .catch(() => {});
  }, []);

  return (
    <footer className="mx-auto max-w-5xl px-6 pb-14 sm:px-10 lg:px-6">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-line-l pt-8 dark:border-line-d sm:flex-row">
        <p className="font-mono text-xs text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} Aryan Bhokare — built with Next.js & Tailwind
        </p>

        <Link
          href="https://github.com/aryan-bhokare/portfolio-v2"
          target="_blank"
          className="group flex items-center gap-4 font-mono text-xs text-muted transition-colors hover:text-accent dark:text-muted-dark"
        >
          <span className="flex items-center gap-1.5">
            <FiGithub className="h-3.5 w-3.5" /> source
          </span>
          <span className="flex items-center gap-1">
            <FiStar className="h-3.5 w-3.5" /> {meta.star}
          </span>
          <span className="flex items-center gap-1">
            <FiGitBranch className="h-3.5 w-3.5" /> {meta.forks}
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
