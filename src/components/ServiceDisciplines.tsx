"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import styles from "./ServiceDisciplines.module.css";

const disciplines = [
  {
    id: "web",
    title: "Web Design & Development",
    description: "Modern, responsive websites that convert.",
    detail: "From the first wireframe to launch, we bring strategy, design and development together to create websites that work beautifully on every screen.",
    capabilities: ["UX & UI design", "Website development", "E-commerce", "Performance & accessibility"],
  },
  {
    id: "branding",
    title: "Graphic Design & Branding",
    description: "Visual identities that make your brand memorable.",
    detail: "We turn your brand’s personality into a distinctive visual language, built to stay consistent across every place your audience meets you.",
    capabilities: ["Brand strategy", "Visual identity", "Packaging design", "Brand guidelines"],
  },
  {
    id: "modeling",
    title: "3D Modeling & Visualization",
    description: "High-quality 3D visuals for products and spaces.",
    detail: "We bring ideas into focus with carefully crafted models, materials and lighting, creating visuals for products, spaces and campaigns.",
    capabilities: ["Product visualization", "3D modeling", "Motion & animation", "Architectural renders"],
  },
  {
    id: "marketing",
    title: "Digital Marketing & Growth",
    description: "Data-driven strategies to reach the right audience.",
    detail: "We connect creative thinking with audience insight to build campaigns that attract attention, spark interest and support your business goals.",
    capabilities: ["Campaign strategy", "Paid media", "Social & content", "SEO & analytics"],
  },
];

export default function ServiceDisciplines({ onOpenContact }: { onOpenContact: () => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const active = disciplines.find((discipline) => discipline.id === activeId);

  function exploreServices() {
    setActiveId(disciplines[0].id);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" });
      detailRef.current?.focus({ preventScroll: true });
    });
  }

  return (
    <section id="services" className={styles.section} aria-labelledby="disciplines-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Our services</p>
            <h2 id="disciplines-heading" className={styles.heading}>
              <span>Four</span>
              <span>disciplines.</span>
              <span className={styles.accent}>One vision.</span>
            </h2>
            <p className={styles.description}>We combine creativity, strategy and technology to deliver digital experiences that help brands grow and stand out.</p>
            <button type="button" className={styles.explore} onClick={exploreServices} aria-controls="service-detail" aria-expanded={Boolean(active)}>
              <span className={styles.play}><Play size={14} strokeWidth={1.8} aria-hidden="true" /></span>
              <span>Explore services</span>
            </button>
          </div>

          {disciplines.map((discipline, index) => (
            <button key={discipline.id} type="button" className={styles.discipline} onClick={() => setActiveId(activeId === discipline.id ? null : discipline.id)} aria-expanded={activeId === discipline.id} aria-controls="service-detail">
              <span className={styles.artwork}>
                <Image src={`/images/services/${discipline.id}.webp`} alt="" fill sizes="(max-width: 599px) 42vw, (max-width: 999px) 21vw, 16vw" className={styles.image} />
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className={styles.serviceTitle}>{discipline.title}</span>
              <span className={styles.serviceDescription}>{discipline.description}</span>
              <span className={styles.arrow}><ArrowRight size={17} strokeWidth={1.5} aria-hidden="true" /></span>
            </button>
          ))}
        </div>

        <div id="service-detail" ref={detailRef} tabIndex={-1} className={styles.detail} hidden={!active}>
          {active && <>
            <div>
              <h3>{active.title}</h3>
              <p>{active.detail}</p>
              <button type="button" className={styles.discuss} onClick={onOpenContact}>Let’s talk about your project <ArrowRight size={17} aria-hidden="true" /></button>
            </div>
            <ul>{active.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            <button type="button" className={styles.close} onClick={() => setActiveId(null)} aria-label="Close service details"><X size={20} aria-hidden="true" /></button>
          </>}
        </div>
      </div>
    </section>
  );
}
