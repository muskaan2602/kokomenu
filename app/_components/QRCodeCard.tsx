"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRCodeCardProps {
  tableNumber: number;
  baseUrl: string;
}

export default function QRCodeCard({ tableNumber, baseUrl }: QRCodeCardProps) {
  const menuUrl = `${baseUrl}/menu?table=${tableNumber}`;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const svgElement = document.getElementById(`qr-table-${tableNumber}`);
    const svgContent = svgElement ? svgElement.outerHTML : "";

    printWindow.document.write(`
      <html>
        <head>
          <title>Table ${tableNumber} QR Code - KokoMenu</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
              background: #fff;
            }
            h1 { font-size: 28px; margin-bottom: 8px; color: #2C1A0E; }
            p { font-size: 14px; color: #666; margin-bottom: 20px; }
            svg { width: 200px; height: 200px; }
          </style>
        </head>
        <body>
          <h1>Table ${tableNumber}</h1>
          <p>Scan to view menu</p>
          ${svgContent}
          <p style="margin-top:16px; font-size:12px; color:#999;">${menuUrl}</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="bg-[#3D2410] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg border border-[#5C3D1E]">
      <div className="text-[#D4A96A] font-bold text-xl tracking-wide">
        Table {tableNumber}
      </div>

      <div className="bg-white p-3 rounded-xl">
        <QRCodeSVG
          id={`qr-table-${tableNumber}`}
          value={menuUrl}
          size={160}
          bgColor="#ffffff"
          fgColor="#2C1A0E"
          level="M"
        />
      </div>

      <p className="text-[#A07850] text-xs text-center break-all max-w-[180px]">
        {menuUrl}
      </p>

      <button
        onClick={handlePrint}
        className="w-full bg-[#D4A96A] text-[#2C1A0E] font-semibold py-2 rounded-lg text-sm hover:bg-[#C8955A] transition-colors"
      >
        Print
      </button>
    </div>
  );
}
