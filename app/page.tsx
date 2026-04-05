"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "/ht1.jpg",
    "/ht2.jpg",
    "/ht3.jpg",
    "/ht4.jpg",
    "/ht5.jpg",
    "/ht6.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans p-4 md:p-8">
      {/* Navbar Minimalis - Lebih ramping di mobile */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-8 md:mb-12 bg-slate-50/50 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-slate-100 backdrop-blur-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/LOGOHT.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-sm" />
          <h1 className="text-base md:text-xl font-black text-blue-600 tracking-tighter uppercase">SewaHT.Pku</h1>
        </div>
        <a 
          href="https://wa.me/6281280435798" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-all shadow-md active:scale-95"
        >
          Chat Admin
        </a>
      </nav>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        
        {/* KOLOM KIRI: AUTO SLIDER */}
        <div className="space-y-4 md:space-y-6">
          <div className="relative bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] shadow-inner border-4 md:border-8 border-white overflow-hidden aspect-square flex items-center justify-center group">
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="HT Unit" 
              className="max-w-full max-h-full object-contain p-6 md:p-10 transition-all duration-1000 ease-in-out animate-in fade-in zoom-in-95"
            />
            {/* Badge posisi - disesuaikan untuk mobile */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-[10px] md:text-[12px] font-black text-blue-600 shadow-sm border border-slate-100">
              0{currentIndex + 1} <span className="text-slate-300 mx-1">/</span> 06
            </div>
          </div>

          {/* Indikator Titik */}
          <div className="flex justify-center gap-2 md:gap-3">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentIndex === idx ? "w-8 md:w-10 bg-blue-600" : "w-3 md:w-4 bg-slate-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL BISNIS */}
        <div className="space-y-6 md:space-y-8 mt-4 lg:mt-0">
          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Ready Stock Pekanbaru</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              HT WLAN <br/> <span className="text-blue-600 uppercase italic">System.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm md:text-lg pt-4 border-t border-slate-50 mt-2">
              Komunikasi tanpa batas jarak & gangguan frekuensi. Cocok untuk EO, Proyek, dan Wedding Organizer yang butuh suara jernih kualitas digital.
            </p>
          </div>

          {/* BOX HARGA - Responsif */}
          <div className="flex flex-row items-center gap-3 md:gap-4">
            <div className="bg-slate-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl shadow-xl">
               <p className="text-[8px] md:text-[10px] opacity-60 font-bold uppercase tracking-widest mb-0.5 md:mb-1">Mulai Dari</p>
               <p className="text-xl md:text-3xl font-black tracking-tight">Rp DM<span className="text-[10px] md:text-sm font-normal opacity-50 ml-1">/hari</span></p>
            </div>
            <div className="flex-1 border-l border-slate-100 pl-3 md:pl-6 space-y-0.5">
               <p className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest italic">Best Offer</p>
               <p className="text-[11px] md:text-sm font-medium text-slate-500 leading-tight">Harga khusus untuk sewa unit banyak & durasi lama.</p>
            </div>
          </div>

          {/* LOKASI MAPS - Lebih Compact di Mobile */}
          <div className="bg-slate-50 p-4 md:p-6 rounded-[2rem] border border-slate-100 space-y-3 md:space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Workshop & Pickup</p>
                <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed mt-1">
                  Jl. Cendrawasih Gg. Persahabatan, Sukajadi, Pekanbaru
                </p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/9DqP6X8T9Y9X8Y9X8" 
              target="_blank"
              className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest"
            >
              Petunjuk Arah 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          {/* Tombol CTA */}
          <div className="pt-2 md:pt-4">
            <a 
              href={`https://wa.me/6281280435798?text=Halo admin @sewaht.pku_, saya ingin booking unit HT WLAN`}
              target="_blank"
              className="flex items-center justify-center w-full py-4 md:py-5 bg-blue-600 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 active:scale-95 uppercase tracking-widest gap-2"
            >
              Booking Unit
            </a>
            <p className="text-center text-[9px] md:text-[10px] text-slate-300 mt-6 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase italic">
              Developed by Rafi (Information Systems)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
