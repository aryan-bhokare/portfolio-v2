import Link from "next/link";
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from "react-icons/fi";

import SectionLabel from "./SectionLabel";

const links = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-b-3803751a7/",
  },
  { icon: FiGithub, label: "GitHub", href: "https://github.com/aryan-bhokare" },
  { icon: FiTwitter, label: "Twitter", href: "https://twitter.com/aryan_okidoki" },
];

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-6">
      <div className="overflow-hidden rounded-3xl border border-line-l bg-white/70 p-8 backdrop-blur-sm dark:border-line-d dark:bg-ink-700/60 sm:p-12">
        <SectionLabel tag="contact" title="Let's build something" />

        <p className="-mt-4 max-w-xl text-lg leading-relaxed text-muted dark:text-muted-dark">
          I&apos;m open to backend and AI-infrastructure roles. If you&apos;re
          hiring or want to talk systems, the fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="mailto:aryan1bhokare@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-deep"
          >
            <FiMail className="h-4 w-4" />
            aryan1bhokare@gmail.com
          </Link>

          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border border-line-l px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-line-d dark:hover:border-accent dark:hover:text-accent"
            >
              <l.icon className="h-4 w-4" />
              {l.label}
              <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
