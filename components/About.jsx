import SectionLabel from "./SectionLabel";
import { TbStack2, TbBrain } from "react-icons/tb";

const domains = [
  {
    icon: TbStack2,
    title: "Backend & distributed systems",
    body: "Redis-backed session stores, Redis Streams job pipelines, and multi-tenant APIs on FastAPI and PostgreSQL. Fault tolerance, retries, dead-letter queues and idempotent workers — designed around explicit failure modes, not happy paths.",
    tags: ["FastAPI", "Redis Streams", "PostgreSQL", "AWS", "Docker"],
  },
  {
    icon: TbBrain,
    title: "AI & LLM infrastructure",
    body: "Production RAG and agent systems: vector search with Pinecone and pgvector, Cohere reranking, LangGraph multi-agent workflows and MCP tool-calling — plus a low-latency speech-to-speech pipeline on the OpenAI Realtime API.",
    tags: ["LangGraph", "RAG", "MCP", "pgvector", "Realtime API"],
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-6">
      <SectionLabel tag="what i build" title="Two sides of the same stack" />

      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted dark:text-muted-dark">
        At Aventior I own backends end-to-end: I architected Kyper&apos;s platform
        solo, then led the backend for Foozi v2, an AI coaching product. I like the
        work that sits under the UI — the parts that have to stay correct under load.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {domains.map((d) => (
          <div
            key={d.title}
            className="group rounded-2xl border border-line-l bg-white/70 p-7 backdrop-blur-sm transition-colors hover:border-accent/60 dark:border-line-d dark:bg-ink-700/60 dark:hover:border-accent/60"
          >
            <d.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-5 font-syne text-xl font-bold">{d.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted dark:text-muted-dark">
              {d.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {d.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent/10 px-2 py-1 font-mono text-[0.7rem] text-accent-deep dark:text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
