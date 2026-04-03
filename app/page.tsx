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

  // LOGIKA AUTO SLIDE 0.5 DETIK (500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Navbar Minimalis */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-10 bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/LOGOHT.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-inner" />
          <h1 className="text-lg md:text-xl font-black text-blue-600 tracking-tighter uppercase">SewaHT.Pku</h1>
        </div>
        <a 
          href="https://wa.me/6281280435798" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          Chat Admin
        </a>
      </nav>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: AUTO SLIDER 0.5s */}
        <div className="space-y-4">
          <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-blue-100 border-4 border-white overflow-hidden aspect-square flex items-center justify-center">
            
            {/* Main Image dengan Key untuk refresh transisi */}
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="HT Unit" 
              className="max-w-full max-h-full object-contain p-6 md:p-8 transition-opacity duration-300"
            />

            {/* Counter Pojok */}
            <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
              UNIT {currentIndex + 1}
            </div>
          </div>

          {/* Thumbnails Indikator */}
          <div className="flex justify-center gap-2">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL BISNIS */}
        <div className="space-y-6 md:space-y-8">
          <div className="pt-2">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Premium Communication
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tighter">
              HT WLAN <br/> <span className="text-blue-600 italic">SYSTEM</span>
            </h2>
            <p className="text-slate-500 mt-6 leading-relaxed text-base md:text-lg">
              Solusi koordinasi tim tanpa batas jarak di Pekanbaru. Suara jernih kualitas digital, baterai awet, dan sangat simpel digunakan untuk berbagai kebutuhan event.
            </p>
          </div>

          {/* BOX HARGA RAHASIA */}
          <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-xl shadow-blue-50/50 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Harga Sewa</p>
              <p className="text-xl font-black text-slate-800 italic">Tanyakan via WhatsApp</p>
            </div>
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">?</span>
            </div>
          </div>

          <div className="pt-2">
            <a 
              href={`https://wa.me/6281280435798?text=Halo admin @sewaht.pku_, saya ingin tanya harga sewa unit HT WLAN`}
              target="_blank"
              className="block w-full text-center py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-black text-base md:text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
            >
              Cek Harga & Ketersediaan
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4 font-medium">
              Dapatkan penawaran terbaik untuk penyewaan di atas 5 unit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-slate-200 text-center flex flex-col items-center gap-2">
        <img src="/LOGOHT.png" className="w-10 h-10 grayscale opacity-40 hover:opacity-100 transition-opacity" />
        <p className="text-[9px] text-slate-300 uppercase font-bold tracking-widest">
          Created by Rafi (SI) • Pekanbaru Digital Solutions
        </p>
      </footer>
    </main>
  );
}
