import React from "react";
import { Filter, ArrowUpDown, SlidersHorizontal } from "lucide-react";

const FilterBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  filteredCount,
  totalCount
}) => {
  return (
    <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-4 mb-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider mr-1 shrink-0">
          <Filter className="w-3.5 h-3.5 text-indigo-400" />
          <span>Category:</span>
        </div>
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all capitalize shrink-0 ${
            selectedCategory === "all"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400/30"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 border border-slate-700/50"
          }`}
        >
          All ({totalCount})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all capitalize shrink-0 ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400/30"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 border border-slate-700/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Dropdown & Item Counter */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <span className="text-xs text-slate-400 font-medium">
          Showing <span className="font-bold text-indigo-300">{filteredCount}</span> items
        </span>

        <div className="relative flex items-center gap-2 bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-1.5 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-slate-400 font-medium hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer pr-1"
          >
            <option value="featured" className="bg-slate-900 text-slate-200">Featured</option>
            <option value="price-asc" className="bg-slate-900 text-slate-200">Price: Low to High</option>
            <option value="price-desc" className="bg-slate-900 text-slate-200">Price: High to Low</option>
            <option value="rating-desc" className="bg-slate-900 text-slate-200">Highest Rated</option>
            <option value="title-asc" className="bg-slate-900 text-slate-200">Title: A to Z</option>
          </select>
        </div>
      </div>

    </div>
  );
};

export default FilterBar;
