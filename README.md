# 🛍️ LuxeCart — React States & Rendering E-Commerce Catalog

A modern, interactive e-commerce product store built to showcase core React state management, conditional rendering, array manipulation, and responsive UI design with Tailwind CSS v4.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-luxecart--mu.vercel.app-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://luxecart-mu.vercel.app/)

> 🔗 **Live Demo**: [https://luxecart-mu.vercel.app/](https://luxecart-mu.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-React-F59E0B)

---

## ✨ Features

- **🎨 Modern Glassmorphism UI**: Built with dark mode aesthetics (`#0f172a`), smooth keyframe animations, Google Fonts (`Plus Jakarta Sans`), and hover micro-interactions.
- **⚡ Dynamic React State Management**:
  - **Live Search**: Instant keyword filtering by product title and category.
  - **Category Filtering**: Interactive filter pills (`All`, `men's clothing`, `jewelery`, `electronics`, `women's clothing`, + custom user categories).
  - **Multi-Option Sorting**: Sort by Price (Low to High, High to Low), Top Rated, or Alphabetical order.
  - **Wishlist & Cart State**: Interactive heart toggle and shopping bag counters in sticky header.
- **📊 Real-time Dashboard Metrics**: Stats banner tracking total products, active categories count, average catalog price, and top-rated items.
- **👁️ Quick View Modal**: Modal overlay displaying complete product descriptions, shipping highlights, and review details.
- **➕ Dynamic Item Addition**: Modal form allowing users to append new custom products directly into the React state array.
- **🗑️ Delete & Restore**: Product deletion with smooth exit animations and a one-click "Reset Catalog" option to restore original data.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans (Google Fonts)

---

## 📁 Project Structure

```text
day4-react-statesAndRendering/
├── index.html                # Main HTML entry with Google Fonts & Meta tags
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration with React plugin
└── src/
    ├── main.jsx              # React DOM root entry point
    ├── index.css             # Tailwind v4 import, custom scrollbar & animations
    ├── App.jsx               # Core application state, filter/sort logic, main layout
    ├── ProductsCard.jsx      # Product card component with hover stage & actions
    └── components/
        ├── Navbar.jsx        # Sticky top navigation with search bar & wishlist counter
        ├── StatsBanner.jsx   # Catalog analytics widgets (Total, Avg Price, Top Rated)
        ├── FilterBar.jsx     # Category pills & sort dropdown controls
        ├── ProductModal.jsx  # Quick View product detail modal
        └── AddProductModal.jsx # Modal form for adding new products dynamically
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your machine.

### Installation

1. **Clone or navigate into the directory**:
   ```bash
   cd day4-react-statesAndRendering
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

Yes! This Vite + React project is **100% Vercel ready**.

### Option 1: Via Vercel Dashboard (GitHub / GitLab / Bitbucket)

1. Push your project code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**! Your site will be live in seconds.

### Option 2: Via Vercel CLI

```bash
# 1. Install Vercel CLI globally (if not installed)
npm i -g vercel

# 2. Deploy directly from your terminal
vercel
```

---

## 💡 React Concepts Demonstrated

1. **State Management (`useState`)**: Managing list state, search text, active categories, modal triggers, and wishlist sets.
2. **Computed Values (`useMemo`)**: Efficiently deriving filtered/sorted product lists and unique category lists without unnecessary recalculations.
3. **Props & Callbacks**: Passing deletion handlers (`del`), modal setters, and state update callbacks across component trees.
4. **Conditional Rendering**: Toggling quick view overlays, add product modal forms, loading states, and empty search fallbacks.
5. **Array Mutations (Immutable Updates)**: Adding (`[newItem, ...prev]`), deleting (`filter()`), and resetting array state cleanly.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).