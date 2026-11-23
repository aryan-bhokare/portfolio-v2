import SectionLabel from "./SectionLabel";

const groups = [
  {
    label: "Languages",
    items: ["Go", "Python", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "REST", "GraphQL", "SQLAlchemy", "AsyncIO", "WebSockets"],
  },
  {
    label: "Data & stores",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Pinecone", "pgvector"],
  },
  {
    label: "Cloud & infra",
    items: ["AWS", "Lambda", "EventBridge", "Step Functions", "Docker", "Kubernetes", "GitHub Actions", "Linux"],
  },
  {
    label: "AI & LLM",
    items: ["LangGraph", "LangChain", "MCP", "RAG", "OpenAI Realtime", "Whisper", "Cohere", "Ollama"],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-6">
      <SectionLabel tag="stack" title="What I work with" />

      <div className="divide-y divide-line-l dark:divide-line-d">
        {groups.map((g) => (
          <div
            key={g.label}
            className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
          >
            <div className="font-mono text-sm text-muted dark:text-muted-dark">
              {g.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-lg border border-line-l bg-white/50 px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent dark:border-line-d dark:bg-ink-700/40 dark:hover:border-accent dark:hover:text-accent"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
