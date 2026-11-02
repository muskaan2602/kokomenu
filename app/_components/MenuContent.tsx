"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { menuCategories, flavours } from "@/app/_lib/menuData";

// Brown from the actual menu images: #7B4A2D warm medium chocolate
const BROWN = {
  bg:       "#5C3317",   // base bg — matches menu card background
  bgDeep:   "#3E2008",   // deep bg
  bgMid:    "#6B3D1E",   // mid tone
  border:   "#8B5A2B",   // border
  accent:   "#A0693A",   // lighter accent
  beige:    "#F0DDB8",   // main beige — headline, name boxes
  beigeAlt: "#E8CFA0",   // slightly warmer beige
  text:     "#C8A87A",   // body text on dark bg
  muted:    "#8B6344",   // muted text
};

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
      style={{ background: `linear-gradient(170deg, ${BROWN.bgDeep} 0%, ${BROWN.bg} 40%, #7B4A2D 70%, ${BROWN.bgDeep} 100%)` }}
    >
      {/* ── AMBIENT BACKGROUND ORBS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-25"
             style={{ background: `radial-gradient(ellipse, ${BROWN.accent} 0%, transparent 65%)`, filter: "blur(60px)" }} />
        <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${BROWN.border} 0%, transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] rounded-full opacity-10"
             style={{ background: `radial-gradient(circle, ${BROWN.beige} 0%, transparent 70%)`, filter: "blur(60px)" }} />
      </div>

      {/* ── DESKTOP SIDE PANELS ── */}
      <div className="fixed left-0 top-0 bottom-0 w-[calc((100vw-576px)/2)] pointer-events-none z-10 hidden lg:block overflow-hidden">
        <div className="absolute right-4 top-0 bottom-0 w-px"
             style={{ background: `linear-gradient(to bottom, transparent 5%, ${BROWN.border} 20%, ${BROWN.accent} 50%, ${BROWN.border} 80%, transparent 95%)` }} />
        <div className="absolute right-[10px] top-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        {[20, 30, 40, 50, 60, 70, 80].map((pct) => (
          <div key={pct} className="absolute right-[13px] w-1.5 h-2.5 rounded-full opacity-35"
               style={{ top: `${pct}%`, background: BROWN.accent, transform: "rotate(30deg)" }} />
        ))}
        <div className="absolute right-[10px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        <div className="absolute right-[10px] bottom-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        <p className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.5em] uppercase font-bold opacity-15"
           style={{ writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)", color: BROWN.beige }}>
          Est. Koko Cafe &amp; Bakers
        </p>
        <div className="absolute right-0 top-1/4 w-24 h-40 opacity-15 rounded-full"
             style={{ background: `radial-gradient(ellipse at right, ${BROWN.accent}, transparent)`, filter: "blur(20px)" }} />
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-[calc((100vw-576px)/2)] pointer-events-none z-10 hidden lg:block overflow-hidden">
        <div className="absolute left-4 top-0 bottom-0 w-px"
             style={{ background: `linear-gradient(to bottom, transparent 5%, ${BROWN.border} 20%, ${BROWN.accent} 50%, ${BROWN.border} 80%, transparent 95%)` }} />
        <div className="absolute left-[10px] top-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        {[20, 30, 40, 50, 60, 70, 80].map((pct) => (
          <div key={pct} className="absolute left-[13px] w-1.5 h-2.5 rounded-full opacity-35"
               style={{ top: `${pct}%`, background: BROWN.accent, transform: "rotate(-30deg)" }} />
        ))}
        <div className="absolute left-[10px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        <div className="absolute left-[10px] bottom-[10%] w-3 h-3 rotate-45 rounded-sm"
             style={{ background: BROWN.beige, boxShadow: `0 0 10px ${BROWN.beige}80` }} />
        <p className="absolute left-8 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.5em] uppercase font-bold opacity-15"
           style={{ writingMode: "vertical-rl", color: BROWN.beige }}>
          Premium Quality
        </p>
        <div className="absolute left-0 bottom-1/4 w-24 h-40 opacity-15 rounded-full"
             style={{ background: `radial-gradient(ellipse at left, ${BROWN.accent}, transparent)`, filter: "blur(20px)" }} />
      </div>

      {/* ── HERO HEADER ── */}
      <header
        className="relative z-10 px-5 pt-10 pb-6"
        style={{
          borderLeft: `1px solid ${BROWN.border}60`,
          borderRight: `1px solid ${BROWN.border}60`,
          maxWidth: "576px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Corner ornaments */}
        <div className="absolute top-3 left-3 w-5 h-5 pointer-events-none"
             style={{ borderTop: `2px solid ${BROWN.beige}60`, borderLeft: `2px solid ${BROWN.beige}60`, borderRadius: "3px 0 0 0" }} />
        <div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
             style={{ borderTop: `2px solid ${BROWN.beige}60`, borderRight: `2px solid ${BROWN.beige}60`, borderRadius: "0 3px 0 0" }} />

        <div className="flex items-start justify-between">
          {/* ── LOGO + BRANDING ── */}
          <div className="flex items-center gap-3">
            {/* Logo circle */}
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/logo.png"
                alt="Koko Cafe & Bakers"
                fill
                className="object-contain rounded-full"
                sizes="64px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div>
              <p style={{ color: BROWN.muted }} className="text-[10px] tracking-[0.35em] uppercase font-medium mb-0.5">
                ✦ Welcome to
              </p>
              {/* ── MAIN HEADLINE IN BEIGE ── */}
              <h1
                className="text-3xl font-black tracking-tight leading-none"
                style={{ color: BROWN.beige }}
              >
                Koko
              </h1>
              <p
                className="text-sm font-bold tracking-[0.15em] uppercase leading-tight"
                style={{ color: BROWN.beigeAlt }}
              >
                Cafe &amp; Bakers
              </p>
            </div>
          </div>

          {/* Table badge */}
          {isValidTable && (
            <div className="flex flex-col items-center gap-1">
              <p style={{ color: BROWN.muted }} className="text-[10px] tracking-[0.3em] uppercase font-medium">
                Table
              </p>
              <div
                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${BROWN.beige}, ${BROWN.beigeAlt})`,
                  color: BROWN.bgDeep,
                  boxShadow: `0 0 20px ${BROWN.beige}50, 0 4px 16px rgba(0,0,0,0.4)`,
                }}
              >
                {tableNumber}
              </div>
            </div>
          )}
        </div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mt-5">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${BROWN.border})` }} />
          <div className="flex items-center gap-2">
            <span style={{ color: BROWN.border }} className="text-xs">◆</span>
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: BROWN.beige }}>
              Our Menu
            </span>
            <span style={{ color: BROWN.border }} className="text-xs">◆</span>
          </div>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${BROWN.border})` }} />
        </div>
      </header>

      {/* ── CATEGORY NAV ── */}
      <nav
        className="sticky top-0 z-20 px-4 py-3 overflow-x-auto border-b"
        style={{
          background: `${BROWN.bgDeep}F0`,
          backdropFilter: "blur(20px)",
          borderColor: `${BROWN.border}50`,
          borderLeft: `1px solid ${BROWN.border}50`,
          borderRight: `1px solid ${BROWN.border}50`,
          maxWidth: "576px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="flex gap-2 w-max">
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
                        background: `linear-gradient(135deg, ${BROWN.beige}, ${BROWN.beigeAlt})`,
                        color: BROWN.bgDeep,
                        boxShadow: `0 0 14px ${BROWN.beige}50`,
                      }
                    : {
                        background: BROWN.bgMid,
                        color: BROWN.muted,
                        border: `1px solid ${BROWN.border}60`,
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
      <div
        className="relative z-10 max-w-xl mx-auto px-4 py-8 pb-24 space-y-14"
        style={{
          borderLeft: `1px solid ${BROWN.border}50`,
          borderRight: `1px solid ${BROWN.border}50`,
        }}
      >
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id}>
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${BROWN.bgMid}, ${BROWN.border})`,
                  border: `1px solid ${BROWN.accent}`,
                  boxShadow: `0 0 14px ${BROWN.accent}40`,
                }}
              >
                {category.icon}
              </div>
              <div>
                {/* Section title in beige */}
                <h2 className="text-3xl font-black tracking-wide leading-none" style={{ color: BROWN.beige }}>
                  {category.title}
                </h2>
                <div
                  className="h-[2px] mt-1.5 w-20 rounded-full"
                  style={{ background: `linear-gradient(to right, ${BROWN.beige}, ${BROWN.beigeAlt}80, transparent)` }}
                />
              </div>
            </div>

            {/* Item cards */}
            <div className="space-y-4">
              {category.items.map((item) => {
                const tagStyle = item.tag ? TAG_COLORS[item.tag] : null;
                return (
                  <div
                    key={item.name}
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      background: `linear-gradient(145deg, ${BROWN.bgMid} 0%, ${BROWN.bg} 60%, ${BROWN.bgDeep} 100%)`,
                      border: `1px solid ${BROWN.border}80`,
                      boxShadow: `0 8px 28px rgba(0,0,0,0.45), inset 0 1px 0 ${BROWN.beige}10`,
                    }}
                  >
                    <div className="flex">
                      {/* Drink image */}
                      <div className="relative w-36 h-44 shrink-0 overflow-hidden rounded-l-2xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                          sizes="144px"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: `linear-gradient(to right, rgba(123,74,45,0.1) 0%, ${BROWN.bg}CC 100%)` }}
                        />
                        {tagStyle && item.tag && (
                          <div
                            className="absolute top-2 left-2 text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide uppercase"
                            style={{ background: tagStyle.bg, color: tagStyle.text }}
                          >
                            {item.tag}
                          </div>
                        )}
                      </div>

                      {/* Card content */}
                      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                        <div>
                          {/* ── NAME in beige box ── */}
                          <div
                            className="inline-block px-3 py-1.5 rounded-lg mb-2"
                            style={{
                              background: `linear-gradient(135deg, ${BROWN.beige}, ${BROWN.beigeAlt})`,
                              boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
                            }}
                          >
                            <h3 className="font-black text-sm leading-none tracking-wide" style={{ color: BROWN.bgDeep }}>
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-xs leading-relaxed line-clamp-3 mt-1" style={{ color: BROWN.text }}>
                            {item.description}
                          </p>
                        </div>

                        {/* ── PRICE with beige underline ── */}
                        <div className="mt-3">
                          {item.price !== null ? (
                            <div className="inline-block">
                              <span className="text-2xl font-black tracking-tight" style={{ color: BROWN.beige }}>
                                ₹{item.price}
                              </span>
                              {/* Beige underline */}
                              <div
                                className="h-[2px] rounded-full mt-0.5"
                                style={{ background: `linear-gradient(to right, ${BROWN.beige}, ${BROWN.beigeAlt}80, transparent)` }}
                              />
                            </div>
                          ) : (
                            <span
                              className="text-xs italic font-medium px-2.5 py-1 rounded-lg"
                              style={{
                                background: BROWN.bgDeep,
                                color: BROWN.muted,
                                border: `1px solid ${BROWN.border}50`,
                              }}
                            >
                              Price on request
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom shine */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${BROWN.border}80, transparent)` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Flavour note */}
            {category.flavourNote && (
              <div
                className="mt-4 rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: `linear-gradient(135deg, ${BROWN.bgDeep}, ${BROWN.bgMid}60)`,
                  border: `1px solid ${BROWN.border}50`,
                }}
              >
                <span style={{ color: BROWN.beige }} className="text-base shrink-0 mt-0.5">✦</span>
                <div>
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-1.5" style={{ color: BROWN.beige }}>
                    Flavours Available
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: BROWN.text }}>
                    {category.flavourNote}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* ── FLAVOUR SHOTS ── */}
        <section id="flavours">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
              style={{
                background: `linear-gradient(135deg, ${BROWN.bgMid}, ${BROWN.border})`,
                border: `1px solid ${BROWN.accent}`,
              }}
            >
              🌿
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-wide leading-none" style={{ color: BROWN.beige }}>
                Flavour Shots
              </h2>
              <div
                className="h-[2px] mt-1.5 w-20 rounded-full"
                style={{ background: `linear-gradient(to right, ${BROWN.beige}, transparent)` }}
              />
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: `linear-gradient(145deg, ${BROWN.bgMid}, ${BROWN.bgDeep})`,
              border: `1px solid ${BROWN.border}80`,
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm font-semibold" style={{ color: BROWN.text }}>
                Add to any hot coffee
              </span>
              <div className="inline-block">
                <span className="text-xl font-black" style={{ color: BROWN.beige }}>+₹30</span>
                <div
                  className="h-[2px] rounded-full mt-0.5"
                  style={{ background: `linear-gradient(to right, ${BROWN.beige}, ${BROWN.beigeAlt}80, transparent)` }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {flavours.map((f) => (
                <div
                  key={f}
                  className="px-3 py-1.5 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, ${BROWN.beige}, ${BROWN.beigeAlt})`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="font-bold text-xs tracking-wide" style={{ color: BROWN.bgDeep }}>{f}</span>
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
          borderTop: `1px solid ${BROWN.border}50`,
          borderLeft: `1px solid ${BROWN.border}50`,
          borderRight: `1px solid ${BROWN.border}50`,
          maxWidth: "576px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Bottom corner ornaments */}
        <div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
             style={{ borderBottom: `2px solid ${BROWN.beige}60`, borderLeft: `2px solid ${BROWN.beige}60`, borderRadius: "0 0 0 3px" }} />
        <div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none"
             style={{ borderBottom: `2px solid ${BROWN.beige}60`, borderRight: `2px solid ${BROWN.beige}60`, borderRadius: "0 0 3px 0" }} />

        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-px w-16" style={{ background: `linear-gradient(to right, transparent, ${BROWN.border})` }} />
          <span className="text-2xl" style={{ filter: `drop-shadow(0 0 8px ${BROWN.beige}80)` }}>☕</span>
          <div className="h-px w-16" style={{ background: `linear-gradient(to left, transparent, ${BROWN.border})` }} />
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase font-semibold" style={{ color: BROWN.muted }}>
          Koko Cafe &amp; Bakers
        </p>
      </footer>
    </main>
  );
}
