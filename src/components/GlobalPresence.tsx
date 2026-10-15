"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Globe2 } from "lucide-react";
import "../styles/global-presence.css";

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
    <section className="presence-section" id="bou-and-co">
      <div className="presence-glow" />
      <div className="container">
        <div className="presence-inner">
          <h2 className="presence-title">
            You can find Bou here. And here. And here. And here. And here.
          </h2>
          <p className="presence-lead">
            We're based in Helsinki and London, but also scattered all over the world. That probably makes us your
            neighbors.
          </p>

          <div className="presence-grid">
            {/* Helsinki Studio */}
            <div className="presence-clock-card" id="helsinki-office">
              <div className="presence-card-top">
                <h3 className="presence-city">Helsinki Studio</h3>
                <span className="presence-badge">HQ • UTC+2</span>
              </div>
              <div className="presence-time">{helsinkiTime}</div>
              <div className="presence-card-bottom">
                <span>
                  <span className="presence-status-dot" /> Studio Active
                </span>
                <span>Antinkatu 1, 00100 Helsinki</span>
              </div>
            </div>

            {/* London Studio */}
            <div className="presence-clock-card" id="london-office">
              <div className="presence-card-top">
                <h3 className="presence-city">London Studio</h3>
                <span className="presence-badge">Hub • UTC+0</span>
              </div>
              <div className="presence-time">{londonTime}</div>
              <div className="presence-card-bottom">
                <span>
                  <span className="presence-status-dot" /> Studio Active
                </span>
                <span>36-40 York Way, London, N1 9AB</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenBouCo}
              className="btn-pill btn-pill-dark"
              style={{ background: "#FFFFFF", color: "#0F1417" }}
            >
              <span>Explore Bou &amp; Co. network</span>
              <div className="icon-circle" style={{ background: "#0F1417", color: "#FFFFFF" }}>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
