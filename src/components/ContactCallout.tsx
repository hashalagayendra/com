"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { OFFICES } from "@/data/offices";
import "../styles/contact.css";

interface ContactCalloutProps {
  onOpenContact: (city?: string) => void;
}

export default function ContactCallout({ onOpenContact }: ContactCalloutProps) {
  return (
    <section className="contact-callout-section" id="contact">
      <div className="container">
        <div className="contact-callout-layout">
          <div>
            <h2 className="contact-headline">
              They say no one reads the footer. Ha! Want to{" "}
              <span
                className="underline-link"
                onClick={() => onOpenContact()}
                role="button"
                tabIndex={0}
              >
                talk
              </span>
              ?
            </h2>
          </div>

          {OFFICES.map((office) => (
            <div key={office.city} className="office-card">
              <div className="office-image-box">
                <Image
                  src={office.image}
                  alt={`${office.city} Studio Office`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="office-card-body">
                <h3 className="office-card-city">{office.city}</h3>
                <p className="office-card-address">
                  {office.address}
                  <br />
                  {office.postal}
                </p>
                <button
                  onClick={() => onOpenContact(office.city)}
                  className="btn-office-contact"
                >
                  <span>Contact</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
