"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { menuCategories, flavours } from "@/app/_lib/menuData";

const TAG_STYLES: Record<string, string> = {
  Popular:    "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  Bestseller: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  Signature:  "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "Must Try": "bg-rose-500/20 text-rose-300 border border-rose-500/30",
  New:        "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
};

export default function MenuContent() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const tableNumber = tableParam ? parseInt(tableParam, 10) : null;
  const isValidTable = tableNumber !== null && tableNumber >= 1 && tableNumber <= 8;
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(160deg, #1A0D05 0%, #2C1A0E 40%, #1E1008 100%)" }}>

      {/* Hero Header */}
      <header className="relative overflow-hidden px-4 pt-10 pb-8">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-20"
               style={{ background: "radial-gradient(ellipse, #D4A96A 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-xl mx-auto relative z-10 flex items-start justify-between">
          <div>
            {/* Cafe name */}
            <p className="text-[#A07850] text-xs tracking-[0.3em] uppercase mb-1">Welcome to</p>
            <h1 className="text-4xl font-bold tracking-tight leading-none"
                style={{ background: "linear-gradient(135deg, #F5D78A 0%, #D4A96A 50%, #A07850 100%)",
                         WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KokoMenu
            </h1>
            <p className="text-[#7A5535] text-xs tracking-[0.2em] uppercase mt-1">Cafe Frappe</p>
          </div>

          {isValidTable && (
            <div className="flex flex-col items-end gap-1">
              <div className="text-[#A07850] text-[10px] tracking-widest uppercase">Your Table</div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl text-[#1A0D05]"
                   style={{ background: "linear-gradient(135deg, #F5D78A, #D4A96A)" }}>
                {tableNumber}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="max-w-xl mx-auto mt-6 flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #5C3D1E)" }} />
          <span className="text-[#5C3D1E] text-xs tracking-widest">✦ MENU ✦</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #5C3D1E)" }} />
        </div>
      </header>

      {/* Category Nav */}
      <nav className="sticky top-0 z-20 px-4 py-3 overflow-x-auto backdrop-blur-md border-b border-[#3D2410]/80"
           style={{ background: "rgba(26, 13, 5, 0.92)" }}>
        <div className="max-w-xl mx-auto flex gap-2 w-max">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-[#1A0D05] shadow-lg"
                  : "text-[#A07850] hover:text-[#D4A96A] bg-[#2C1A0E] hover:bg-[#3D2410] border border-[#3D2410]"
              }`}
              style={activeCategory === cat.id
                ? { background: "linear-gradient(135deg, #F5D78A, #D4A96A)" }
                : {}}
            >
              {cat.icon} {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Sections */}
      <div className="max-w-xl mx-auto px-4 py-8 pb-20 space-y-14">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id}>

            {/* Section heading */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                   style={{ background: "linear-gradient(135deg, #3D2410, #5C3D1E)", border: "1px solid #7A5535" }}>
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-wide"
                    style={{ background: "linear-gradient(135deg, #F5D78A, #D4A96A)",
                             WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {category.title}
                </h2>
                <div className="h-px mt-1 w-16"
                     style={{ background: "linear-gradient(to right, #D4A96A, transparent)" }} />
              </div>
            </div>

            {/* Item cards */}
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="relative overflow-hidden rounded-2xl flex gap-0"
                  style={{
                    background: "linear-gradient(135deg, #3D2410 0%, #2C1A0E 100%)",
                    border: "1px solid #5C3D1E",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,169,106,0.08)"
                  }}
                >
                  {/* Drink Image */}
                  <div className="relative w-32 h-36 shrink-0 overflow-hidden rounded-l-2xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0"
                         style={{ background: "linear-gradient(to right, transparent 60%, #2C1A0E)" }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                    <div>
                      {/* Tag */}
                      {item.tag && (
                        <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1.5 ${TAG_STYLES[item.tag] ?? ""}`}>
                          {item.tag}
                        </span>
                      )}
                      <h3 className="text-[#F5E6D3] font-bold text-base leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-[#7A5535] text-xs mt-1 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-end justify-between">
                      {item.price !== null ? (
                        <div>
                          <span className="text-[#A07850] text-xs">Price</span>
                          <div className="text-2xl font-bold leading-none"
                               style={{ background: "linear-gradient(135deg, #F5D78A, #D4A96A)",
                                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            ₹{item.price}
                          </div>
                        </div>
                      ) : (
                        <div className="text-[#7A5535] text-xs italic">Price on request</div>
                      )}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none"
                       style={{ background: "radial-gradient(circle at top right, #D4A96A, transparent)" }} />
                </div>
              ))}
            </div>

            {/* Flavour note */}
            {category.flavourNote && (
              <div className="mt-4 rounded-xl p-4"
                   style={{ background: "linear-gradient(135deg, #2C1A0E, #1A0D05)", border: "1px solid #3D2410" }}>
                <div className="flex items-start gap-2">
                  <span className="text-[#D4A96A] text-base mt-0.5">✦</span>
                  <div>
                    <p className="text-[#D4A96A] text-xs font-semibold tracking-wide mb-1">FLAVOURS AVAILABLE</p>
                    <p className="text-[#7A5535] text-xs leading-relaxed">{category.flavourNote}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Flavours Section */}
        <section id="flavours">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                 style={{ background: "linear-gradient(135deg, #3D2410, #5C3D1E)", border: "1px solid #7A5535" }}>
              🌿
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-wide"
                  style={{ background: "linear-gradient(135deg, #F5D78A, #D4A96A)",
                           WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Flavour Shots
              </h2>
              <div className="h-px mt-1 w-16"
                   style={{ background: "linear-gradient(to right, #D4A96A, transparent)" }} />
            </div>
          </div>

          <div className="rounded-2xl p-5"
               style={{ background: "linear-gradient(135deg, #3D2410, #2C1A0E)", border: "1px solid #5C3D1E" }}>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[#F5E6D3] font-semibold text-sm">Add to any hot coffee</span>
              <span className="text-[#D4A96A] font-bold text-lg">+₹30</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {flavours.map((f) => (
                <span
                  key={f}
                  className="text-xs font-medium px-3 py-1.5 rounded-full text-[#F5E6D3]"
                  style={{
                    background: "linear-gradient(135deg, #5C3D1E, #3D2410)",
                    border: "1px solid #7A5535",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-[#3D2410]/60">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #5C3D1E)" }} />
          <span className="text-[#D4A96A] text-lg">☕</span>
          <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #5C3D1E)" }} />
        </div>
        <p className="text-[#3D2410] text-xs tracking-widest uppercase">KokoMenu · Cafe Frappe</p>
      </footer>
    </main>
  );
}
