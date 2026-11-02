"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QRCodeCard from "@/app/_components/QRCodeCard";

const TOTAL_TABLES = 8;

export default function QRCodesContent() {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Derive base URL on the client so QR codes point to the correct host
    setBaseUrl(window.location.origin);
  }, []);

  return (
    <main className="min-h-screen bg-[#2C1A0E] px-4 py-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#D4A96A]">Table QR Codes</h1>
          <p className="text-[#A07850] mt-1 text-sm">
            Print each QR code and place it on the corresponding table.
          </p>
        </div>
        <Link
          href="/"
          className="text-[#D4A96A] text-sm hover:text-[#C8955A] transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* QR Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: TOTAL_TABLES }, (_, i) => i + 1).map((table) => (
          <QRCodeCard key={table} tableNumber={table} baseUrl={baseUrl} />
        ))}
      </div>
    </main>
  );
}
