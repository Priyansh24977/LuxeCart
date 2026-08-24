import React from "react";
import { 
  ShoppingBag, 
  Heart, 
  PlusCircle, 
  RotateCcw, 
  Search, 
  X,
  Sparkles
} from "lucide-react";

const Navbar = ({
  searchQuery,
  setSearchQuery,
  totalProducts,
  wishlistCount,
  onOpenAddModal,
  onResetProducts
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-2xl shadow-lg shadow-indigo-500/30 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                LuxeCart
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" /> React State Studio
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Interactive Product Catalog & State Management Demo
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search catalog by title or category..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-800/80 border border-slate-700/80 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Stats Badges & Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          
          {/* Wishlist Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/60 border border-slate-700/60 rounded-xl text-slate-300 text-xs font-semibold shadow-sm">
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? "fill-rose-500 text-rose-500" : "text-slate-400"}`} />
            <span>Wishlist</span>
            <span className="ml-1 px-1.5 py-0.5 text-[11px] font-bold bg-rose-500/20 text-rose-300 rounded-md">
              {wishlistCount}
            </span>
          </div>

          {/* Add Product Button */}
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/40 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Item</span>
          </button>

          {/* Reset Catalog Button */}
          <button
            onClick={onResetProducts}
            title="Reset catalog to original state"
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-semibold transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Reset</span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
