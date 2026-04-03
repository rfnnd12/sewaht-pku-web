"use client";

import { useState } from "react";

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Navbar Minimalis - UKURAN TOMBOL DIPERBAIKI */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-10 bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/LOGOHT.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-inner" />
          <h1 className="text-lg md:text-xl font-black text-blue-600 tracking-tighter uppercase">SewaHT.Pku</h1>
        </div>
        <a 
          href="https://wa.me/6281280435798" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          {/* Icon WA sederhana (bullet) */}
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          WA Admin
        </a>
      </nav>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* KOLOM KIRI: INTERACTIVE SLIDER - LEBIH SMOOTH */}
        <div className="space-y-4">
          <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-blue-100 border-4 border-white overflow-hidden aspect-square flex items-center justify-center group">
            
            {/* Main Image dengan transisi opacity */}
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="HT Unit" 
              className="max-w-full max-h-full object-contain p-6 md:p-8 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />

            {/* Navigasi Tombol - Hanya muncul/jelas saat hover */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:block"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:block"
            >
              →
            </button>

            {/* Counter Pojok */}
            <div className="absolute bottom-6 right-6 bg-slate-900/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-700">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails - Hover Effect */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                  currentIndex === idx 
                  ? "border-blue-600 scale-105 shadow-md" 
                  : "border-transparent opacity-50 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL BISNIS */}
        <div className="space-y-6 md:space-y-8">
          <div className="pt-2">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Ready di Pekanbaru
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tighter">
              HT WLAN <br/> <span className="text-blue-600 italic">PREMIUM SERIES</span>
            </h2>
            <p className="text-slate-500 mt-6 leading-relaxed text-base md:text-lg">
              Solusi komunikasi tanpa batas frekuensi. Menggunakan jaringan internet untuk jangkauan luas, suara jernih, dan stabil untuk koordinasi tim besar.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Harga Sewa</p>
              <p className="text-xl md:text-2xl font-black text-blue-600">Rp 50k<span className="text-xs font-medium text-slate-400">/hari</span></p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Kondisi</p>
              <p className="text-xl md:text-2xl font-black text-slate-800">100% <span className="text-xs font-medium text-slate-400">Normal</span></p>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href={`https://wa.me/6281280435798?text=Halo admin @sewaht.pku_, saya ingin sewa unit HT WLAN`}
              target="_blank"
              className="block w-full text-center py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-black text-base md:text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
            >
              Booking Sekarang
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4 font-medium italic">
              *Jaminan KTP/Identitas berlaku selama masa penyewaan.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-slate-200 text-center flex flex-col items-center gap-4">
        <img src="/LOGOHT.png" className="w-10 h-10 md:w-12 md:h-12 grayscale opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
        <div>
          <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase">Pekanbaru Digital Solutions</p>
          <p className="text-[9px] text-slate-300 mt-1 uppercase font-bold tracking-widest">Created by Rafi (SI)</p>
        </div>
      </footer>
    </main>
  );
}
