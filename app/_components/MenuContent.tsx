"use client";

import { useSearchParams } from "next/navigation";

export default function MenuContent() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const tableNumber = tableParam ? parseInt(tableParam, 10) : null;
  const isValidTable =
    tableNumber !== null && tableNumber >= 1 && tableNumber <= 8;

  return (
    <main className="min-h-screen bg-[#2C1A0E] px-4 py-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#D4A96A] tracking-wide">
            KokoMenu
          </h1>
          {isValidTable ? (
            <div className="inline-block mt-2 bg-[#5C3D1E] text-[#D4A96A] text-sm font-semibold px-4 py-1 rounded-full">
              Table {tableNumber}
            </div>
          ) : (
            <p className="text-[#A07850] mt-2 text-sm">
              {tableParam ? "Invalid table number" : "No table selected"}
            </p>
          )}
        </div>

        {/* Placeholder — menu items will go here */}
        <div className="bg-[#3D2410] rounded-2xl p-8 text-center border border-[#5C3D1E]">
          <div className="text-5xl mb-4">☕</div>
          <p className="text-[#D4A96A] text-xl font-semibold mb-2">
            Menu coming soon
          </p>
          <p className="text-[#A07850] text-sm">
            Share your menu and pricing and we&apos;ll add it right here.
          </p>
        </div>
      </div>
    </main>
  );
}
