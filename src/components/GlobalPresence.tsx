"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface GlobalPresenceProps {
  onOpenBouCo: () => void;
}

export default function GlobalPresence({ onOpenBouCo }: GlobalPresenceProps) {
  const [helsinkiTime, setHelsinkiTime] = useState<string>("--:--:--");
  const [londonTime, setLondonTime] = useState<string>("--:--:--");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setHelsinkiTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Helsinki",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setLondonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0c1012] text-white py-24 md:py-36 px-6 md:px-8 overflow-hidden" id="bou-and-co">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-purple-900/20 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-[840px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-bold leading-[1.18] tracking-tight text-white mb-6 text-balance">
            You can find Bou here. And here. And here. And here. And here.
          </h2>
          <p className="text-[17px] text-[#8e9ca3] leading-relaxed mb-14 max-w-[580px]">
            We&apos;re based in Helsinki and London, but also scattered all over the world. That probably makes us your
            neighbors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 text-left">
            {/* Helsinki Studio */}
            <div className="bg-[#192025]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all" id="helsinki-office">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-bold text-white">Helsinki Studio</h3>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  HQ &bull; UTC+2
                </span>
              </div>
              <div className="text-[44px] md:text-[52px] font-black tracking-tight text-white tabular-nums mb-6 font-mono">
                {helsinkiTime}
              </div>
              <div className="flex items-center justify-between text-[12.5px] text-[#8e9ca3] pt-4 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Studio Active
                </span>
                <span>Antinkatu 1, 00100 Helsinki</span>
              </div>
            </div>

            {/* London Studio */}
            <div className="bg-[#192025]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all" id="london-office">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-bold text-white">London Studio</h3>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  Hub &bull; UTC+0
                </span>
              </div>
              <div className="text-[44px] md:text-[52px] font-black tracking-tight text-white tabular-nums mb-6 font-mono">
                {londonTime}
              </div>
              <div className="flex items-center justify-between text-[12.5px] text-[#8e9ca3] pt-4 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Studio Active
                </span>
                <span>36-40 York Way, London, N1 9AB</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenBouCo}
              className="inline-flex items-center gap-2.5 bg-white text-[#0f1417] px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg group cursor-pointer"
            >
              <span>Explore Bou &amp; Co. network</span>
              <div className="w-7 h-7 rounded-full bg-[#0f1417] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
