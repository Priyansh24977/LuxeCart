import React from "react";
import { Package, Tag, DollarSign, Star } from "lucide-react";

const StatsBanner = ({ products }) => {
  const totalCount = products.length;
  
  const categoriesCount = new Set(products.map(p => p.category)).size;
  
  const avgPrice = totalCount > 0 
    ? (products.reduce((acc, curr) => acc + (Number(curr.price) || 0), 0) / totalCount).toFixed(2)
    : "0.00";

  const topRated = totalCount > 0
    ? [...products].sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))[0]
    : null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      
      {/* Total Products */}
      <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md flex items-center gap-4 hover:border-slate-600 transition-colors">
        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
          <Package className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Products</p>
          <p className="text-xl font-bold text-slate-100">{totalCount}</p>
        </div>
      </div>

      {/* Categories */}
      <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md flex items-center gap-4 hover:border-slate-600 transition-colors">
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
          <Tag className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Categories</p>
          <p className="text-xl font-bold text-slate-100">{categoriesCount}</p>
        </div>
      </div>

      {/* Avg Price */}
      <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md flex items-center gap-4 hover:border-slate-600 transition-colors">
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Avg Price</p>
          <p className="text-xl font-bold text-slate-100">${avgPrice}</p>
        </div>
      </div>

      {/* Top Rated */}
      <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-md flex items-center gap-4 hover:border-slate-600 transition-colors">
        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
          <Star className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Top Rated</p>
          <p className="text-xl font-bold text-slate-100 flex items-center gap-1">
            {topRated ? `${topRated.rating?.rate} ★` : "N/A"}
          </p>
        </div>
      </div>

    </div>
  );
};

export default StatsBanner;
