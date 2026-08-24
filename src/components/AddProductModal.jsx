import React, { useState } from "react";
import { X, Plus, Image as ImageIcon, Tag, DollarSign, FileText } from "lucide-react";

const AddProductModal = ({ isOpen, onClose, onAddProduct, categories }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("men's clothing");
  const [newCategory, setNewCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price || isNaN(price)) return;

    const finalCategory = category === "custom" ? newCategory.trim().toLowerCase() : category;

    const defaultImages = [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png"
    ];

    const finalImage = image.trim() || defaultImages[Math.floor(Math.random() * defaultImages.length)];

    const newProduct = {
      id: Date.now(),
      title: title.trim(),
      price: parseFloat(price),
      category: finalCategory || "general",
      image: finalImage,
      description: description.trim() || "High quality handcrafted product added by user.",
      rating: {
        rate: (Math.random() * 2 + 3).toFixed(1), // random rate between 3.0 and 5.0
        count: Math.floor(Math.random() * 200 + 10)
      }
    };

    onAddProduct(newProduct);
    onClose();

    // Reset form
    setTitle("");
    setPrice("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-all border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Add New Product</h2>
            <p className="text-xs text-slate-400">Expand your store catalog dynamically into React state</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Product Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Vintage Leather Jacket"
              className="w-full px-3.5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Price ($) *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <DollarSign className="w-3.5 h-3.5" />
                </div>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="49.99"
                  className="w-full pl-8 pr-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 capitalize">
                    {cat}
                  </option>
                ))}
                <option value="custom" className="bg-slate-900">+ Add Custom Category</option>
              </select>
            </div>
          </div>

          {category === "custom" && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Custom Category Name</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="e.g. Home Decor"
                className="w-full px-3.5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          )}

          {/* Image URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Image URL (Optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://images.com/sample.jpg"
                className="w-full pl-8 pr-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Description</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product features and details..."
              className="w-full px-3.5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-98"
            >
              Add Product to Catalog
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
