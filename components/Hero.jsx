import Image from "next/image";
import Link from "next/link";
import { HiArrowDownRight } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";

import Avatar from "@/public/aryan-profile.jpeg";

// Professional experience, counted from the Aventior start date.
const START = new Date(2024, 8); // Sep 2024 (month is 0-indexed)
function experience() {
  const now = new Date();
  let months =
    (now.getFullYear() - START.getFullYear()) * 12 +
    (now.getMonth() - START.getMonth());
  if (months < 0) months = 0;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return years > 0 ? `${years}.${rem} yrs` : `${rem} mo`;
}

const signals = [
  { k: "role", v: "SDE @ Aventior" },
  { k: "in production", v: experience() },
  { k: "based in", v: "Pune, India" },
  { k: "focus", v: "Systems · AI infra" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 pt-28 sm:px-10 lg:px-6"
    >
      {/* status line */}
      <div
        className="animate-reveal mb-7 flex items-center gap-2.5 font-mono text-[0.7rem] text-muted dark:text-muted-dark sm:text-xs"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse2 rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>
          currently building <span className="text-txt dark:text-txt-dark">Kyper</span> &amp;{" "}
          <span className="text-txt dark:text-txt-dark">Foozi&nbsp;v2</span> at Aventior
        </span>
      </div>

      <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h1
            className="animate-reveal font-syne text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.12s" }}
          >
            Aryan
            <br />
            Bhokare
          </h1>

          <p
            className="animate-reveal mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-muted-dark sm:text-xl"
            style={{ animationDelay: "0.22s" }}
          >
            Full-stack engineer, backend-deep. I design the{" "}
            <span className="text-txt dark:text-txt-dark">distributed systems</span> and{" "}
            <span className="text-txt dark:text-txt-dark">AI infrastructure</span> that
            products run on — session stores, job queues, multi-tenant APIs, RAG and
            agent pipelines.
          </p>

          <div
            className="animate-reveal mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.32s" }}
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-deep hover:shadow-accent/40"
            >
              See my work
              <HiArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/AryanResumeSDE.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-line-l bg-white/60 px-5 py-2.5 text-sm font-semibold text-txt backdrop-blur-sm transition-colors hover:border-accent hover:text-accent dark:border-line-d dark:bg-white/[0.03] dark:text-txt-dark dark:hover:border-accent dark:hover:text-accent"
            >
              Résumé
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          className="animate-reveal relative shrink-0"
          style={{ animationDelay: "0.18s" }}
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-transparent to-signal/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-line-l dark:border-line-d">
            <Image
              src={Avatar}
              alt="Aryan Bhokare"
              width={190}
              height={190}
              priority
              className="h-36 w-36 object-cover sm:h-44 sm:w-44"
            />
          </div>
        </div>
      </div>

      {/* signal cells */}
      <dl
        className="animate-reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-l bg-line-l dark:border-line-d dark:bg-line-d sm:grid-cols-4"
        style={{ animationDelay: "0.42s" }}
      >
        {signals.map((s) => (
          <div
            key={s.k}
            className="bg-paper px-4 py-4 dark:bg-ink"
          >
            <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted dark:text-muted-dark">
              {s.k}
            </dt>
            <dd className="mt-1 font-syne text-base font-bold text-txt dark:text-txt-dark">
              {s.v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
