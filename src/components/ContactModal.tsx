"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
  onSuccessToast: (msg: string) => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultCity,
  onSuccessToast,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const servicesOptions = [
    "Branding",
    "Design",
    "Marketing",
    "Communications & PR",
    "Web Development",
    "Launches",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccessToast("Thanks for reaching out! We'll reply within 24 hours.");
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 bg-[var(--studio-background)]/80 backdrop-blur-md z-[1000] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[640px] max-h-[92vh] bg-[var(--studio-ink)] rounded-3xl p-6 sm:p-10 shadow-2xl my-auto overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[var(--studio-tint)] hover:bg-[var(--studio-tint)] flex items-center justify-center text-[var(--studio-background)] transition-all cursor-pointer"
          aria-label="Close contact modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-[28px] font-extrabold text-[var(--studio-background)] mb-2">
              Message Received
            </h3>
            <p className="text-[15px] text-[var(--studio-muted)] max-w-[400px] leading-relaxed">
              Thank you {name ? name : "for writing"}. Our partnerships team in{" "}
              {defaultCity ? defaultCity : "Helsinki & London"} will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[12px] font-bold tracking-wider uppercase text-[var(--studio-accent-soft)] block mb-1">
                Let&apos;s Build Together
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight text-[var(--studio-background)]">
                Start a conversation
              </h2>
              <p className="text-[15px] text-[var(--studio-muted)] mt-1.5">
                Whether you’re launching something new or transforming an established category leader.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-bold text-[var(--studio-background)]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--studio-border)] bg-[var(--studio-tint)] text-[var(--studio-background)] text-[14.5px] focus:outline-none focus:border-[var(--studio-accent)] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-bold text-[var(--studio-background)]">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--studio-border)] bg-[var(--studio-tint)] text-[var(--studio-background)] text-[14.5px] focus:outline-none focus:border-[var(--studio-accent)] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[var(--studio-background)]">Company / Organization</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Tech"
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--studio-border)] bg-[var(--studio-tint)] text-[var(--studio-background)] text-[14.5px] focus:outline-none focus:border-[var(--studio-accent)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12.5px] font-bold text-[var(--studio-background)]">What can we help you build?</label>
                <div className="flex items-center gap-2 flex-wrap">
                  {servicesOptions.map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`text-[12px] font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                        selectedServices.includes(svc)
                          ? "bg-[var(--studio-background)] text-[var(--studio-ink)] border-[var(--studio-accent)]"
                          : "bg-[var(--studio-tint)] text-[var(--studio-muted)] border-[var(--studio-border)] hover:border-[var(--studio-accent)]"
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[var(--studio-background)]">Tell us about your project</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Timeline, goals, scope, or questions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--studio-border)] bg-[var(--studio-tint)] text-[var(--studio-background)] text-[14.5px] focus:outline-none focus:border-[var(--studio-accent)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--studio-background)] text-[var(--studio-ink)] py-3.5 px-6 rounded-full text-[15px] font-semibold hover:bg-[var(--studio-accent)] transition-all shadow-md mt-2 cursor-pointer"
              >
                <span>Send message</span>
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
