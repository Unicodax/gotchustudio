export default function ProjectFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
              isActive ? "bg-ink text-paper" : "bg-white text-muted border border-hairline hover:border-ink/30 hover:text-ink"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
