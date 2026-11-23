import SectionLabel from "./SectionLabel";

const data = [
  {
    id: 0,
    title: "Software Development Engineer",
    duration: "Sep 2024 — Present",
    org: "Aventior, Pune",
    current: true,
    note: "Solely architected Kyper's backend; led the backend for Foozi v2 (AI coaching).",
    skills: ["Python", "FastAPI", "Redis", "PostgreSQL", "GraphQL", "AWS", "LangGraph"],
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    duration: "May 2024 — Sep 2024",
    org: "IntelOwl · Google Summer of Code 2024",
    note: "Shipped the IP2Location.io analyzer for IP/domain geolocation intelligence.",
    skills: ["Python", "Django", "React", "GitHub Actions"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    duration: "Mar 2024 — May 2024",
    org: "LitmusChaos · LFX Mentorship (CNCF)",
    note: "Hardened auth in Go (−60% unauthorized attempts) and cut API latency 25%.",
    skills: ["Go", "GraphQL", "MongoDB", "Kubernetes"],
  },
  {
    id: 3,
    title: "Web Development Lead",
    duration: "Aug 2023 — Apr 2024",
    org: "Google Developer Student Clubs",
    note: "Led web dev for the campus chapter; built and mentored on React projects.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

const TimeLine = () => {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-6"
    >
      <SectionLabel tag="timeline" title="Where I've worked" />

      <ol className="relative ml-1 border-l border-line-l dark:border-line-d">
        {data.map((item) => (
          <li key={item.id} className="mb-11 ml-7 last:mb-0">
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                item.current
                  ? "border-accent bg-accent"
                  : "border-line-l bg-paper dark:border-line-d dark:bg-ink"
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-syne text-lg font-bold">{item.title}</h3>
              {item.current && (
                <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[0.65rem] text-emerald-600 dark:text-emerald-400">
                  current
                </span>
              )}
            </div>
            <div className="mt-0.5 font-mono text-xs text-muted dark:text-muted-dark">
              {item.duration} · {item.org}
            </div>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted dark:text-muted-dark">
              {item.note}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-line-l px-2 py-0.5 font-mono text-[0.7rem] text-txt/70 dark:border-line-d dark:text-txt-dark/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TimeLine;
