import React from 'react';

const StudioLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white selection:bg-transparent overflow-hidden">
      {/* High-End Custom CSS Keyframes
        Using advanced cubic-bezier for that "expensive" buttery smooth feeling
      */}
      <style>{`
        @keyframes text-reveal {
          0% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); transform: translateY(20px); }
          20%, 80% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); transform: translateY(0); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); transform: translateY(-20px); }
        }
        @keyframes line-sweep {
          0% { width: 0%; left: 50%; transform: translateX(-50%); opacity: 0;}
          20% { width: 150px; opacity: 1; }
          80% { width: 150px; opacity: 1; left: 50%; transform: translateX(-50%); }
          100% { width: 0%; left: 100%; transform: translateX(0); opacity: 0; }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 1; }
        }
        .animate-brand-text {
          animation: text-reveal 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-sweep-line {
          position: relative;
          animation: line-sweep 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-subtext {
          animation: fade-in-out 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center justify-center h-40">
        
        {/* Main Brand Typography Reveal */}
        <h1 className="text-[#262626] text-5xl md:text-6xl font-bold tracking-[0.25em] uppercase animate-brand-text">
          Orebi
        </h1>

        {/* Premium Minimalist Animated Line */}
        <div className="absolute bottom-6 h-[2px] bg-[#262626] animate-sweep-line"></div>
        
        {/* Subtle Tracking Status */}
        <div className="absolute bottom-0 text-[10px] uppercase tracking-[0.5em] text-gray-400 font-semibold animate-subtext">
          Exclusive Collection
        </div>

      </div>
    </div>
  );
};

export default StudioLoader;