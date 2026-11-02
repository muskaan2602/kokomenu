import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#2C1A0E]">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-[#D4A96A] mb-3 tracking-wide">
          KokoMenu
        </h1>
        <p className="text-[#C8A97E] text-lg mb-10">
          Cafe QR Ordering System
        </p>
        <Link
          href="/qr-codes"
          className="inline-block bg-[#D4A96A] text-[#2C1A0E] font-semibold px-8 py-3 rounded-full text-base hover:bg-[#C8955A] transition-colors"
        >
          View Table QR Codes
        </Link>
      </div>
    </main>
  );
}
