"use client";

import { QRCodeCanvas } from 'qrcode.react'; 
import { Download } from 'lucide-react';

export default function ProfessionalQr({ className }: { className?: string }) {
  const downloadQR = () => {
    const canvas = document.getElementById("qr-studio-fusco") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "QR_StudioLegaleFusco.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Contenitore QR con pulsante download al passaggio del mouse */}
      <div className="group relative p-2.5 bg-white rounded-2xl shadow-xl border border-rosewood/10 transition-all hover:ring-2 hover:ring-rosewood-light/30">
        <QRCodeCanvas
          id="qr-studio-fusco"
          value="https://www.avvocatoannafusco.it/prenota-consulenza"
          size={85} // Dimensione bilanciata per il footer
          fgColor="#800020" // Rosewood
          level="H"
          includeMargin={true}
        />
        
        {/* Overlay Download: Appare solo al passaggio del mouse */}
        <button 
          onClick={downloadQR}
          className="absolute inset-0 bg-sepia-dark/90 rounded-2xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 text-white backdrop-blur-[2px]"
          title="Scarica QR ad alta risoluzione"
        >
          <Download className="w-5 h-5 mb-1" />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Scarica</span>
        </button>
      </div>

      {/* Testo Accessibile: Bianco puro per massimo contrasto */}
      <div className="text-center">
        <p className="text-[8px] leading-tight font-serif text-white uppercase tracking-[0.2em] font-bold">
          Scansiona per<br/>Consulenza
        </p>
      </div>
    </div>
  );
}