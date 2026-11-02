import { Suspense } from "react";
import MenuContent from "@/app/_components/MenuContent";

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#2C1A0E] flex items-center justify-center">
          <p className="text-[#D4A96A] text-lg">Loading menu…</p>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
