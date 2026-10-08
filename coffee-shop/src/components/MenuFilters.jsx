function MenuFilters({ search, setSearch }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search for a drink..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default MenuFilters;