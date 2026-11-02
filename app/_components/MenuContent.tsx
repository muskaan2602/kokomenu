"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { menuCategories, flavours } from "@/app/_lib/menuData";

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Popular:    { bg: "#78350f", text: "#fcd34d" },
  Bestseller: { bg: "#713f12", text: "#fde68a" },
  Signature:  { bg: "#4c1d95", text: "#c4b5fd" },
  "Must Try": { bg: "#881337", text: "#fda4af" },
  New:        { bg: "#064e3b", text: "#6ee7b7" },
};

export default function MenuContent() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const tableNumber = tableParam ? parseInt(tableParam, 10) : null;
  const isValidTable = tableNumber !== null && tableNumber >= 1 && tableNumber <= 8;
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <main
      className="min-h-screen"
      style={{ background: "linear-gradient(170deg, #0E0704 0%, #1F0F06 30%, #2C1A0E 60%, #1A0D05 100%)" }}
    >
      {/* ── AMBIENT BACKGROUND ORBS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30"
             style={{ background: "radial-gradient(ellipse, #C8793A 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full opacity-15"
             style={{ background: "radial-gradient(circle, #8B4513 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] rounded-full opacity-15"
             style={{ background: "radial-gradient(circle, #D4A96A 0%, transparent 70%)", filter: "blur(50px)" }} />
      </div>

      {/* ── DECORATIVE SIDE PANELS ── */}
      {/* Left side panel */}
      <div className="fixed left-0 top-0 bottom-0 w-[calc((100vw-576px)/2)] pointer-events-none z-10 hidden lg:flex flex-col items-end pr-6 pt-16 gap-0 overflow-hidden">
        {/* Vertical line */}
        <div className="absolute right-4 top-0 bottom-0 w-px"
             style={{ background: "linear-gradient(to bottom, transparent 5%, #3D2010 20%, #5C3018 50%, #3D2010 80%, transparent 95%)" }} />
        {/* Top diamond ornament */}
        <div className="absolute right-[10px] top-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Coffee bean dots pattern */}
        {[18, 26, 34, 42, 50, 58, 66, 74, 82].map((pct) => (
          <div key={pct} className="absolute right-[13px] w-1.5 h-2.5 rounded-full opacity-40"
               style={{ top: `${pct}%`, background: "linear-gradient(135deg, #8B4513, #C8793A)", transform: "rotate(30deg)" }} />
        ))}
        {/* Middle diamond */}
        <div className="absolute right-[10px] top-[50%] -translate-y-1/2 w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Bottom diamond ornament */}
        <div className="absolute right-[10px] bottom-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Floating text rotated */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-20">
          <p className="text-[#E8C170] text-[10px] tracking-[0.5em] uppercase font-bold"
             style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Est. Cafe Frappe
          </p>
        </div>
        {/* Warm glow near top */}
        <div className="absolute right-0 top-1/4 w-24 h-40 opacity-20 rounded-full"
             style={{ background: "radial-gradient(ellipse at right, #C8793A, transparent)", filter: "blur(20px)" }} />
      </div>

      {/* Right side panel */}
      <div className="fixed right-0 top-0 bottom-0 w-[calc((100vw-576px)/2)] pointer-events-none z-10 hidden lg:flex flex-col items-start pl-6 pt-16 overflow-hidden">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px"
             style={{ background: "linear-gradient(to bottom, transparent 5%, #3D2010 20%, #5C3018 50%, #3D2010 80%, transparent 95%)" }} />
        {/* Top diamond ornament */}
        <div className="absolute left-[10px] top-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Coffee bean dots */}
        {[18, 26, 34, 42, 50, 58, 66, 74, 82].map((pct) => (
          <div key={pct} className="absolute left-[13px] w-1.5 h-2.5 rounded-full opacity-40"
               style={{ top: `${pct}%`, background: "linear-gradient(135deg, #8B4513, #C8793A)", transform: "rotate(-30deg)" }} />
        ))}
        {/* Middle diamond */}
        <div className="absolute left-[10px] top-[50%] -translate-y-1/2 w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Bottom diamond */}
        <div className="absolute left-[10px] bottom-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: "linear-gradient(135deg, #C8793A, #E8C170)", boxShadow: "0 0 8px rgba(200,121,58,0.5)" }} />
        {/* Rotated text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-20">
          <p className="text-[#E8C170] text-[10px] tracking-[0.5em] uppercase font-bold"
             style={{ writingMode: "vertical-rl" }}>
            Premium Quality
          </p>
        </div>
        {/* Warm glow near bottom */}
        <div className="absolute left-0 bottom-1/4 w-24 h-40 opacity-20 rounded-full"
             style={{ background: "radial-gradient(ellipse at left, #C8793A, transparent)", filter: "blur(20px)" }} />
      </div>

      {/* ── HERO HEADER ── */}
      <header className="relative z-10 px-5 pt-12 pb-6"
              style={{ borderLeft: "1px solid rgba(92,48,24,0.35)", borderRight: "1px solid rgba(92,48,24,0.35)",
                       maxWidth: "576px", margin: "0 auto", width: "100%" }}>

        {/* Top corner ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 pointer-events-none"
             style={{ borderTop: "2px solid #8B4513", borderLeft: "2px solid #8B4513", borderRadius: "3px 0 0 0" }} />
        <div className="absolute top-3 right-3 w-4 h-4 pointer-events-none"
             style={{ borderTop: "2px solid #8B4513", borderRight: "2px solid #8B4513", borderRadius: "0 3px 0 0" }} />

        <div className="relative">
          {/* Top row: branding + table badge */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[#8B6344] text-[11px] tracking-[0.35em] uppercase mb-1.5 font-medium">
                ✦ Welcome to
              </p>
              <h1
                className="text-5xl font-black tracking-tight leading-none"
                style={{
                  background: "linear-gradient(135deg, #FFF0C8 0%, #E8C170 35%, #C8793A 70%, #8B4513 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KokoMenu
              </h1>
              <p className="text-[#6B4423] text-[11px] tracking-[0.25em] uppercase mt-2 font-semibold">
                Cafe Frappe
              </p>
            </div>

            {isValidTable && (
              <div className="flex flex-col items-center gap-1.5">
                <p className="text-[#8B6344] text-[10px] tracking-[0.3em] uppercase font-medium">Table</p>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-[#0E0704]"
                  style={{
                    background: "linear-gradient(135deg, #FFF0C8, #E8C170, #C8793A)",
                    boxShadow: "0 0 24px rgba(200,121,58,0.5), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  {tableNumber}
                </div>
              </div>
            )}
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #8B4513)" }} />
            <div className="flex items-center gap-2 text-[#8B4513]">
              <span className="text-xs">◆</span>
              <span className="text-[11px] tracking-[0.4em] uppercase font-semibold text-[#A0693A]">Our Menu</span>
              <span className="text-xs">◆</span>
            </div>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #8B4513)" }} />
          </div>
        </div>
      </header>

      {/* ── CATEGORY NAV ── */}
      <nav
        className="sticky top-0 z-20 px-5 py-3 overflow-x-auto border-b"
        style={{
          background: "rgba(14, 7, 4, 0.94)",
          backdropFilter: "blur(20px)",
          borderColor: "#3D2010",
          borderLeft: "1px solid rgba(92,48,24,0.35)",
          borderRight: "1px solid rgba(92,48,24,0.35)",
          maxWidth: "576px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="max-w-xl mx-auto flex gap-2.5 w-max">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className="whitespace-nowrap text-[11px] font-bold px-4 py-2 rounded-full transition-all duration-300 tracking-wide"
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg, #FFF0C8, #E8C170, #C8793A)",
                        color: "#0E0704",
                        boxShadow: "0 0 16px rgba(200,121,58,0.4)",
                      }
                    : {
                        background: "#1F0F06",
                        color: "#8B6344",
                        border: "1px solid #3D2010",
                      }
                }
              >
                {cat.icon} {cat.title}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ── MENU SECTIONS ── */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 pb-24 space-y-16"
           style={{
             borderLeft: "1px solid rgba(92,48,24,0.35)",
             borderRight: "1px solid rgba(92,48,24,0.35)",
           }}
      >
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id}>

            {/* Section title */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3D2010, #5C3018)",
                  border: "1px solid #8B4513",
                  boxShadow: "0 0 16px rgba(139,69,19,0.3)",
                }}
              >
                {category.icon}
              </div>
              <div>
                <h2
                  className="text-3xl font-black tracking-wide leading-none"
                  style={{
                    background: "linear-gradient(135deg, #FFF0C8 0%, #E8C170 50%, #C8793A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {category.title}
                </h2>
                <div
                  className="h-[2px] mt-1.5 w-20 rounded-full"
                  style={{ background: "linear-gradient(to right, #C8793A, #E8C170, transparent)" }}
                />
              </div>
            </div>

            {/* Item cards */}
            <div className="space-y-5">
              {category.items.map((item) => {
                const tagStyle = item.tag ? TAG_COLORS[item.tag] : null;
                return (
                  <div
                    key={item.name}
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      background: "linear-gradient(145deg, #2A1608 0%, #1F0F06 50%, #160A03 100%)",
                      border: "1px solid #4A2510",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(232,193,112,0.07)",
                    }}
                  >
                    {/* Ambient glow on card */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(200,121,58,0.08) 0%, transparent 60%)" }}
                    />

                    <div className="flex">
                      {/* ── DRINK IMAGE — tall & prominent ── */}
                      <div className="relative w-36 h-44 shrink-0 overflow-hidden rounded-l-2xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                          sizes="144px"
                        />
                        {/* Warm colour wash over image */}
                        <div
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(to right, rgba(200,121,58,0.08) 0%, rgba(26,13,5,0.85) 100%)" }}
                        />
                        {/* Tag badge on image */}
                        {tagStyle && item.tag && (
                          <div
                            className="absolute top-2 left-2 text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide uppercase"
                            style={{ background: tagStyle.bg, color: tagStyle.text }}
                          >
                            {item.tag}
                          </div>
                        )}
                      </div>

                      {/* ── CARD CONTENT ── */}
                      <div className="flex-1 p-4 flex flex-col justify-between min-w-0 relative z-10">
                        {/* ── NAME in beige box ── */}
                        <div>
                          <div
                            className="inline-block px-3 py-1 rounded-lg mb-2"
                            style={{
                              background: "linear-gradient(135deg, #F5E6CC, #EDD5A8)",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                          >
                            <h3 className="text-[#2C1A0E] font-black text-sm leading-none tracking-wide">
                              {item.name}
                            </h3>
                          </div>

                          <p className="text-[#6B4423] text-xs leading-relaxed line-clamp-3 mt-1">
                            {item.description}
                          </p>
                        </div>

                        {/* ── PRICE with beige underline ── */}
                        <div className="mt-3">
                          {item.price !== null ? (
                            <div className="inline-block">
                              <span
                                className="text-2xl font-black tracking-tight"
                                style={{
                                  background: "linear-gradient(135deg, #FFF0C8, #E8C170, #C8793A)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                ₹{item.price}
                              </span>
                              {/* Beige underline */}
                              <div
                                className="h-[2px] rounded-full mt-0.5"
                                style={{ background: "linear-gradient(to right, #F5E6CC, #EDD5A8, transparent)" }}
                              />
                            </div>
                          ) : (
                            <span
                              className="text-xs italic font-medium px-2.5 py-1 rounded-lg"
                              style={{ background: "#2A1608", color: "#8B6344", border: "1px solid #3D2010" }}
                            >
                              Price on request
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom shine line */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: "linear-gradient(to right, transparent, #4A2510, transparent)" }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Flavour note */}
            {category.flavourNote && (
              <div
                className="mt-5 rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "linear-gradient(135deg, #1F0F06, #160A03)",
                  border: "1px solid #3D2010",
                  boxShadow: "inset 0 1px 0 rgba(232,193,112,0.05)",
                }}
              >
                <span className="text-[#E8C170] text-lg shrink-0 mt-0.5">✦</span>
                <div>
                  <p
                    className="text-[10px] font-black tracking-[0.3em] uppercase mb-1.5"
                    style={{ color: "#E8C170" }}
                  >
                    Flavours Available
                  </p>
                  <p className="text-[#6B4423] text-xs leading-relaxed">{category.flavourNote}</p>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* ── FLAVOUR SHOTS SECTION ── */}
        <section id="flavours">
          <div className="flex items-center gap-3 mb-7">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{
                background: "linear-gradient(135deg, #3D2010, #5C3018)",
                border: "1px solid #8B4513",
                boxShadow: "0 0 16px rgba(139,69,19,0.3)",
              }}
            >
              🌿
            </div>
            <div>
              <h2
                className="text-3xl font-black tracking-wide leading-none"
                style={{
                  background: "linear-gradient(135deg, #FFF0C8 0%, #E8C170 50%, #C8793A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Flavour Shots
              </h2>
              <div
                className="h-[2px] mt-1.5 w-20 rounded-full"
                style={{ background: "linear-gradient(to right, #C8793A, #E8C170, transparent)" }}
              />
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "linear-gradient(145deg, #2A1608, #1F0F06)",
              border: "1px solid #4A2510",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#8B6344] text-sm font-semibold">Add to any hot coffee</span>
              <div className="inline-block">
                <span
                  className="text-xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #FFF0C8, #E8C170, #C8793A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  +₹30
                </span>
                {/* Beige underline on price */}
                <div
                  className="h-[2px] rounded-full mt-0.5"
                  style={{ background: "linear-gradient(to right, #F5E6CC, #EDD5A8, transparent)" }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {flavours.map((f) => (
                <div
                  key={f}
                  className="px-3 py-1.5 rounded-lg"
                  style={{
                    background: "linear-gradient(135deg, #F5E6CC, #EDD5A8)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="text-[#2C1A0E] font-bold text-xs tracking-wide">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-10 text-center py-8"
        style={{
          borderTop: "1px solid #2A1608",
          borderLeft: "1px solid rgba(92,48,24,0.35)",
          borderRight: "1px solid rgba(92,48,24,0.35)",
          maxWidth: "576px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Bottom corner ornaments */}
        <div className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none"
             style={{ borderBottom: "2px solid #8B4513", borderLeft: "2px solid #8B4513", borderRadius: "0 0 0 3px" }} />
        <div className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none"
             style={{ borderBottom: "2px solid #8B4513", borderRight: "2px solid #8B4513", borderRadius: "0 0 3px 0" }} />
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #8B4513)" }} />
          <span
            className="text-2xl"
            style={{ filter: "drop-shadow(0 0 8px rgba(200,121,58,0.6))" }}
          >
            ☕
          </span>
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #8B4513)" }} />
        </div>
        <p className="text-[#3D2010] text-[10px] tracking-[0.4em] uppercase font-semibold">
          KokoMenu · Cafe Frappe
        </p>
      </footer>
    </main>
  );
}
