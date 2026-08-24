import React, { useState } from "react";
import { Star, Trash2, Eye, Heart, ShoppingBag, Check } from "lucide-react";

const ProductsCard = ({ product, del, onQuickView, isWishlisted, onToggleWishlist }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsDeleting(true);
    setTimeout(() => {
      del(product.id);
    }, 200);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 1500);
  };

  return (
    <div className={`group relative bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-indigo-500/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm overflow-hidden ${isDeleting ? "opacity-0 scale-90 transition-all duration-200" : "animate-fade-in"}`}>
      
      {/* Top Badges */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-slate-300 border border-slate-700/80 rounded-lg backdrop-blur-md">
          {product.category}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`p-1.5 rounded-lg border transition-all ${
            isWishlisted
              ? "bg-rose-500/20 border-rose-500/30 text-rose-400"
              : "bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-rose-400 hover:bg-slate-800"
          }`}
          title="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
        </button>
      </div>

      {/* Product Image Stage */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full h-48 bg-white/95 rounded-xl p-4 flex items-center justify-center cursor-pointer overflow-hidden group/img mb-4 shadow-inner"
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain filter group-hover/img:scale-110 transition-transform duration-300"
          loading="lazy"
        />

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="px-3 py-1.5 bg-slate-900/90 text-slate-100 font-bold text-xs rounded-lg border border-slate-700 flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5 text-indigo-400" /> Quick View
          </span>
        </div>
      </div>

      {/* Content Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold mb-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating?.rate ?? "4.2"}</span>
            <span className="text-[11px] text-slate-500 font-normal">
              ({product.rating?.count ?? 95})
            </span>
          </div>

          {/* Title */}
          <h2 
            onClick={() => onQuickView(product)}
            className="text-sm font-bold text-slate-100 line-clamp-2 hover:text-indigo-300 transition-colors cursor-pointer mb-2 leading-snug"
            title={product.title}
          >
            {product.title}
          </h2>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-slate-700/50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Price</p>
              <p className="text-lg font-extrabold text-emerald-400">
                ${Number(product.price).toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                isAddedToCart
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30"
              }`}
            >
              {isAddedToCart ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" /> Buy
                </>
              )}
            </button>
          </div>

          {/* Card Footer Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold border border-slate-700/70 transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-400" /> Details
            </button>

            <button
              onClick={handleDelete}
              className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/20 rounded-lg text-xs font-semibold transition-all active:scale-95"
              title="Delete Product"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductsCard;
