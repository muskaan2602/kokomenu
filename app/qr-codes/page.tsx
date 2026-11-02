import { Suspense } from "react";
import QRCodesContent from "@/app/_components/QRCodesContent";

export default function QRCodesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#2C1A0E] flex items-center justify-center">
          <p className="text-[#D4A96A] text-lg">Loading QR codes…</p>
        </div>
      }
    >
      <QRCodesContent />
    </Suspense>
  );
}
