import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumError = ({ errorCode = "404", title = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-black overflow-hidden font-sans flex items-center justify-center px-4">
      
      {/* Structural Background Grid Lines for Luxury Editorial Feel */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
        <div className="border-r border-black/10 h-full"></div>
        <div className="border-r border-black/10 h-full"></div>
        <div className="border-r border-black/10 h-full"></div>
        <div className="h-full"></div>
      </div>
      <div className="absolute inset-0 grid grid-rows-4 pointer-events-none opacity-20">
        <div className="border-b border-black/10 w-full"></div>
        <div className="border-b border-black/10 w-full"></div>
        <div className="border-b border-black/10 w-full"></div>
        <div className="w-full"></div>
      </div>

      {/* Decorative Premium Abstract Geometry */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-neutral-200 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none animate-pulse duration-[6000ms]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 border-y border-black/10 py-16 md:py-24">
        
        {/* Left Side: Massive Stacked Typography */}
        <div className="relative flex flex-col items-start select-none">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono mb-2">
            Error Protocol
          </span>
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-black select-none">
            {errorCode}
          </h1>
          <div className="absolute -bottom-4 right-0 md:-right-8 bg-black text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1 scale-90 md:scale-100">
            Lost in Space
          </div>
        </div>

        {/* Right Side: Elegant Glassmorphism Details & Navigation */}
        <div className="max-w-md backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black uppercase mb-4">
              {title}
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              The page you are looking for has been archived or relocated. The destination path is unavailable within the current secure storefront routing system.
            </p>
          </div>

          {/* Luxury Minimalist Interactive Actions */}
          <div className="flex flex-col gap-3 w-full">
<button
  onClick={() => navigate('/')}
  className="group relative w-full bg-black text-white text-xs font-bold tracking-[0.2em] uppercase py-4 overflow-hidden border border-black transition-colors duration-500"
>
  {/* Initial Text: Fades, scales down, and glides up */}
  <span className="relative z-10 block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-8 group-hover:opacity-0 group-hover:scale-95">
    Return To Store
  </span>

  {/* Hover Background & Text: Smooth entry with staggered arrow */}
  <span className="absolute inset-0 flex items-center justify-center bg-[#F5F7F9] text-black transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
    <span className="flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
      Go Home
      {/* Arrow shoots in from the left after the text settles */}
      <span className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out">
        →
      </span>
    </span>
  </span>
</button>

            <button
              onClick={() => navigate('/shop')}
              className="group w-full border border-black/20 text-black text-xs font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover:border-black bg-transparent flex items-center justify-center gap-2"
            >
              Discover Collections
            </button>
          </div>
        </div>

      </div>

      {/* Footer Branding Detail */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-neutral-400">
        <span>© OREBI ONLINE STORE</span>
        <span className="hidden sm:inline">STAY GENUINE</span>
      </div>
    </div>
  );
};

export default PremiumError;