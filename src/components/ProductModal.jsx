import React from "react";
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck } from "lucide-react";

const ProductModal = ({ product, onClose, isWishlisted, onToggleWishlist }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-all border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Panel */}
        <div className="w-full md:w-1/2 bg-slate-800/40 p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-800">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-72 object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Details Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 text-sm font-bold text-slate-200">
                  {product.rating?.rate ?? "4.5"}
                </span>
              </div>
              <span className="text-xs text-slate-400">
                ({product.rating?.count ?? 120} customer reviews)
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-100 leading-snug mb-3">
              {product.title}
            </h2>

            <p className="text-2xl font-extrabold text-emerald-400 mb-4">
              ${Number(product.price).toFixed(2)}
            </p>

            <div className="space-y-2 mb-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Description</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-h-40 overflow-y-auto pr-2">
                {product.description}
              </p>
            </div>

            {/* Micro badges */}
            <div className="grid grid-cols-2 gap-2 mb-6 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 p-2 bg-slate-800/40 rounded-lg border border-slate-800">
                <Truck className="w-3.5 h-3.5 text-indigo-400" /> Free Express Shipping
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-slate-800/40 rounded-lg border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 30-Day Guarantee
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-3 rounded-xl border transition-all ${
                isWishlisted
                  ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-rose-400"
              }`}
              title="Toggle Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
            </button>

            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Back to Store</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductModal;
