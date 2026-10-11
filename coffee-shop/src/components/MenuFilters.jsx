
const CATEGORIES = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Other Drinks"
];

function MenuFilters({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange
}) {
  return (
    <div className="filters">
      <label className="search">
        <span className="visually-hidden">
          Search drinks
        </span>

        <span aria-hidden="true" className="search-icon">
          🔍
        </span>

        <input
          type="search"
          placeholder="Search for a drink..."
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
        />
      </label>

      <div
        className="category-tabs"
        role="group"
        aria-label="Filter by category"
      >
        {CATEGORIES.map((name) => (
          <button
            key={name}
            type="button"
            className={
              name === category
                ? "tab tab-active"
                : "tab"
            }
            aria-pressed={name === category}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuFilters;
