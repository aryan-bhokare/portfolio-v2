// Consistent section marker: a lowercase code-comment label + heading.
const SectionLabel = ({ tag, title }) => {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs text-accent">{`// ${tag}`}</span>
      <h2 className="mt-2 font-syne text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionLabel;
