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
      {/* Navbar Minimalis */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-12 bg-slate-50/50 p-4 rounded-3xl border border-slate-100 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img src="/LOGOHT.png" alt="Logo" className="w-10 h-10 rounded-full shadow-sm" />
          <h1 className="text-xl font-black text-blue-600 tracking-tighter uppercase">SewaHT.Pku</h1>
        </div>
        <a 
          href="https://wa.me/6281280435798" 
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-green-100 active:scale-95"
        >
          Chat Admin
        </a>
      </nav>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* KOLOM KIRI: AUTO SLIDER 2.5s */}
        <div className="space-y-6">
          <div className="relative bg-slate-50 rounded-[3rem] shadow-inner border-8 border-white overflow-hidden aspect-square flex items-center justify-center group">
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="HT Unit" 
              className="max-w-full max-h-full object-contain p-10 transition-all duration-1000 ease-in-out animate-in fade-in zoom-in-95"
            />
            <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl text-[12px] font-black text-blue-600 shadow-sm border border-slate-100">
              0{currentIndex + 1} <span className="text-slate-300 mx-1">/</span> 06
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentIndex === idx ? "w-10 bg-blue-600" : "w-4 bg-slate-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: DETAIL BISNIS */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Ready Stock Pekanbaru</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              HT WLAN <br/> <span className="text-blue-600">SYSTEM.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg pt-4 border-t border-slate-50 mt-4">
              Komunikasi jarak jauh tanpa gangguan frekuensi. Cocok untuk EO, Proyek Konstruksi, dan Wedding Organizer yang butuh suara jernih kualitas digital.
            </p>
          </div>

          {/* BOX HARGA */}
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 text-white px-6 py-4 rounded-3xl shadow-xl shadow-slate-200">
               <p className="text-[10px] opacity-60 font-bold uppercase tracking-widest mb-1">Mulai Dari</p>
               <p className="text-3xl font-black tracking-tight">Rp DM<span className="text-sm font-normal opacity-50 ml-1">/hari</span></p>
            </div>
            <div className="flex-1 border-l border-slate-100 pl-6 space-y-1">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Best Offer</p>
               <p className="text-sm font-medium text-slate-500 leading-tight">Dapatkan harga khusus untuk penyewaan unit banyak.</p>
            </div>
          </div>

          {/* LOKASI MAPS */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Workshop & Pickup</p>
                <p className="text-sm font-bold text-slate-700 leading-relaxed mt-1">
                  Jl. Cendrawasih Gg. Persahabatan, Kp. Tengah, Kec. Sukajadi, Pekanbaru
                </p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/9Z7K6vS46C2z9m5w9" 
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest"
            >
              Petunjuk Arah 
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <div className="pt-4">
            <a 
              href={`https://wa.me/6281280435798?text=Halo admin @sewaht.pku_, saya ingin booking unit HT WLAN`}
              target="_blank"
              className="flex items-center justify-center w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-100 active:scale-95 uppercase tracking-widest gap-3"
            >
              Booking Unit Sekarang
            </a>
            <p className="text-center text-[10px] text-slate-300 mt-6 font-bold tracking-[0.3em] uppercase italic">
              Developed by Rafi (Information Systems)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
