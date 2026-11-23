import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import SectionLabel from "./SectionLabel";

import discord from "@/public/work/discord.svg";
import codecraft from "@/public/work/codecraft.jpg";
import twitter from "@/public/twitter.svg";
import resume from "@/public/work/resume.svg";
import recruitapp from "@/public/work/recruitapp.svg";
import airplane from "@/public/work/airplane.svg";

// NOTE: point these at the real repos when they're public.
const GH = "https://github.com/aryan-bhokare?tab=repositories";

const flagships = [
  {
    title: "Distributed Job Queue",
    blurb:
      "A Redis Streams job system with producer–consumer workers, delayed jobs, retries and dead-letter queues. Idempotent workers recover via heartbeat monitoring, and a dashboard exposes queue depth, throughput and latency.",
    demonstrates: "Reliability under failure",
    stack: ["Python", "FastAPI", "Redis Streams", "PostgreSQL", "Docker"],
    link: GH,
  },
  {
    title: "Collaborative Workspace Platform",
    blurb:
      "A Notion-style workspace with a block-based document model: hierarchical pages, workspace-scoped RBAC, multi-workspace isolation, and version history with snapshot recovery and soft deletion.",
    demonstrates: "Data modeling & access control",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "Docker"],
    link: GH,
  },
  {
    title: "Multi-Agent AI Research Assistant",
    blurb:
      "A LangGraph workflow of Planner, Researcher, Reviewer and Writer agents over shared memory, with MCP tool integration, RAG + reranking, streaming responses, and swappable providers (OpenAI / Claude / Ollama).",
    demonstrates: "Agent orchestration",
    stack: ["LangGraph", "MCP", "pgvector", "Redis", "Docker"],
    link: GH,
  },
];

const earlier = [
  {
    id: 1,
    image: discord,
    title: "SyncSpot",
    description: "Real-time chat, voice and video channels over WebSockets + WebRTC.",
    link: "https://github.com/aryan-bhokare/syncspot",
  },
  {
    id: 2,
    image: codecraft,
    title: "CodeCraft",
    description: "An online code runner that mirrors a local dev environment.",
    link: "https://github.com/aryan-bhokare/codecraft",
  },
  {
    id: 3,
    image: twitter,
    title: "Jitter",
    description: "A Twitter clone covering the core posting and feed flows.",
    link: "https://github.com/aryan-bhokare/twitter-clone",
  },
  {
    id: 5,
    image: airplane,
    title: "Airline Management",
    description: "An airline booking backend split into microservices.",
    link: "https://github.com/aryan-bhokare/FlightsAndSearchService",
  },
  {
    id: 4,
    image: resume,
    title: "YourResume",
    description: "A résumé builder with dynamic, configurable sections.",
    link: "https://yourxresume.netlify.app",
  },
  {
    id: 6,
    image: recruitapp,
    title: "RecruitApp",
    description: "A prototype for an employee recruitment workflow.",
    link: "https://recruit1app.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-6">
      <SectionLabel tag="work" title="Things I've shipped" />

      {/* flagship feature cards */}
      <div className="space-y-5">
        {flagships.map((p) => (
          <Link
            key={p.title}
            href={p.link}
            target="_blank"
            className="group block rounded-2xl border border-line-l bg-white/70 p-7 backdrop-blur-sm transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5 dark:border-line-d dark:bg-ink-700/60 dark:hover:border-accent/60 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="font-syne text-2xl font-bold">{p.title}</h3>
                  <FiArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:text-accent dark:text-muted-dark" />
                </div>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted dark:text-muted-dark">
                  {p.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-accent/10 px-2 py-1 font-mono text-[0.7rem] text-accent-deep dark:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <span className="shrink-0 rounded-lg border border-line-l px-3 py-1 font-mono text-[0.68rem] text-muted dark:border-line-d dark:text-muted-dark">
                {p.demonstrates}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* earlier work */}
      <h3 className="mb-6 mt-16 font-mono text-xs text-muted dark:text-muted-dark">
        {"// earlier work"}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {earlier.map((p) => (
          <Link
            key={p.id}
            href={p.link}
            target="_blank"
            className="group flex items-start gap-4 rounded-xl border border-line-l bg-white/50 p-4 transition-colors hover:border-accent/50 dark:border-line-d dark:bg-ink-700/40 dark:hover:border-accent/50"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-semibold">{p.title}</h4>
                <FiGithub className="h-3.5 w-3.5 text-muted opacity-0 transition-opacity group-hover:opacity-100 dark:text-muted-dark" />
              </div>
              <p className="mt-0.5 text-[0.82rem] leading-snug text-muted dark:text-muted-dark">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
