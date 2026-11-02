"use client";

import { useSearchParams } from "next/navigation";
import { menuCategories, flavours } from "@/app/_lib/menuData";

export default function MenuContent() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const tableNumber = tableParam ? parseInt(tableParam, 10) : null;
  const isValidTable =
    tableNumber !== null && tableNumber >= 1 && tableNumber <= 8;

  return (
    <main className="min-h-screen bg-[#2C1A0E]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-[#2C1A0E]/95 backdrop-blur-sm border-b border-[#5C3D1E] px-4 py-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#D4A96A] tracking-wide leading-none">
              KokoMenu
            </h1>
            <p className="text-[#A07850] text-xs mt-0.5">Cafe Frappe</p>
          </div>
          {isValidTable && (
            <div className="bg-[#5C3D1E] text-[#D4A96A] text-sm font-bold px-4 py-1.5 rounded-full">
              Table {tableNumber}
            </div>
          )}
          {!isValidTable && tableParam && (
            <div className="bg-red-900/40 text-red-300 text-xs px-3 py-1.5 rounded-full">
              Invalid table
            </div>
          )}
        </div>
      </header>

      {/* Category Nav */}
      <nav className="sticky top-[65px] z-10 bg-[#2C1A0E]/95 backdrop-blur-sm border-b border-[#5C3D1E] px-4 py-2 overflow-x-auto">
        <div className="max-w-xl mx-auto flex gap-2 w-max">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap text-xs font-semibold text-[#A07850] hover:text-[#D4A96A] bg-[#3D2410] hover:bg-[#5C3D1E] px-3 py-1.5 rounded-full transition-colors"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <div className="max-w-xl mx-auto px-4 py-6 pb-16 space-y-10">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id}>
            {/* Category Header */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#D4A96A] tracking-wide">
                {category.title}
              </h2>
              <div className="h-0.5 w-12 bg-[#D4A96A]/40 mt-1 rounded-full" />
            </div>

            {/* Items */}
            <div className="space-y-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#3D2410] rounded-xl p-4 border border-[#5C3D1E] flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
                    <div className="min-w-0">
                      <h3 className="text-[#F5E6D3] font-semibold text-base leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-[#A07850] text-xs mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    {item.price !== null ? (
                      <span className="text-[#D4A96A] font-bold text-base">
                        ₹{item.price}
                      </span>
                    ) : (
                      <span className="text-[#A07850] text-xs italic">
                        Ask staff
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Flavour note */}
            {category.flavourNote && (
              <div className="mt-3 bg-[#2C1A0E] border border-[#5C3D1E] rounded-xl p-3">
                <p className="text-[#A07850] text-xs leading-relaxed">
                  <span className="text-[#D4A96A] font-semibold">✦ Flavours — </span>
                  {category.flavourNote}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Flavours Reference */}
        <section id="flavours">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#D4A96A] tracking-wide">
              Flavours
            </h2>
            <div className="h-0.5 w-12 bg-[#D4A96A]/40 mt-1 rounded-full" />
          </div>
          <div className="bg-[#3D2410] rounded-xl p-4 border border-[#5C3D1E]">
            <p className="text-[#A07850] text-xs mb-3">
              Add a flavour shot to your hot coffee for{" "}
              <span className="text-[#D4A96A] font-semibold">+₹30</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {flavours.map((f) => (
                <span
                  key={f}
                  className="bg-[#5C3D1E] text-[#F5E6D3] text-xs px-3 py-1 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center py-6 border-t border-[#5C3D1E]">
        <p className="text-[#5C3D1E] text-xs">KokoMenu · Powered by love ☕</p>
      </div>
    </main>
  );
}
