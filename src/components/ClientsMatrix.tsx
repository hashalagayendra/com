"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { CLIENT_LOGOS, CLIENT_QUOTES } from "@/data/clients";

interface ClientsMatrixProps {
  onSelectCaseById: (caseId: string) => void;
}

export default function ClientsMatrix({ onSelectCaseById }: ClientsMatrixProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? CLIENT_QUOTES.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === CLIENT_QUOTES.length - 1 ? 0 : prev + 1));
  };

  const currentQuote = CLIENT_QUOTES[currentQuoteIndex];

  return (
    <section className="bg-[#f4f6f5] py-20 md:py-28" id="clients">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="max-w-[760px] mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium leading-[1.25] tracking-tight text-[#0f1417]">
            We work with <strong className="font-extrabold text-black">200+ brands</strong> around Europe and the US, including:
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="bg-white p-5 rounded-2xl flex flex-col justify-between min-h-[96px] border border-[#e2e6e4] hover:shadow-md hover:border-[#cbd2ce] transition-all"
            >
              <span className="text-[17px] font-extrabold tracking-tight text-[#0f1417]">
                {client.name}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#84939b] mt-2">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        {/* Quotes Carousel */}
        <div className="bg-white p-8 md:p-14 rounded-3xl border border-[#e2e6e4] shadow-sm">
          <div className="max-w-[960px] mx-auto">
            <p className="text-[20px] sm:text-[26px] md:text-[32px] font-medium leading-[1.3] tracking-tight text-[#0f1417] mb-10 text-balance">
              “{currentQuote.quote}”
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-[#e2e6e4]">
              <div>
                <span className="block text-[16px] font-bold text-[#0f1417]">
                  {currentQuote.author}
                </span>
                <span className="block text-[13px] text-[#57656c] mt-0.5">
                  {currentQuote.role}, {currentQuote.brand}
                </span>
              </div>

              <div className="flex items-center gap-5">
                {currentQuote.caseLink && (
                  <button
                    onClick={() => onSelectCaseById(currentQuote.caseLink!)}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0f1417] underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <span>Read full case</span>
                    <ArrowUpRight size={14} />
                  </button>
                )}

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 mr-2">
                    {CLIENT_QUOTES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuoteIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentQuoteIndex
                            ? "w-6 bg-[#0f1417]"
                            : "w-2 bg-[#cbd2ce] hover:bg-[#84939b]"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prevQuote}
                    className="w-9 h-9 rounded-full bg-[#f4f6f5] hover:bg-[#eaefec] flex items-center justify-center text-[#0f1417] transition-all cursor-pointer"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextQuote}
                    className="w-9 h-9 rounded-full bg-[#f4f6f5] hover:bg-[#eaefec] flex items-center justify-center text-[#0f1417] transition-all cursor-pointer"
                    aria-label="Next quote"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
