"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/types/caseStudy";
import { FEATURED_PROJECTS } from "@/data/featuredProjects";
import styles from "./SelectedWork.module.css";

interface SelectedWorkProps {
  onSelectCase: (project: CaseStudy) => void;
}

export default function SelectedWork({ onSelectCase }: SelectedWorkProps) {
  const [startIndex, setStartIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const projects = [
    ...FEATURED_PROJECTS.slice(startIndex),
    ...FEATURED_PROJECTS.slice(0, startIndex),
  ];

  function changeProject(direction: number) {
    setStartIndex((current) =>
      (current + direction + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length
    );
    trackRef.current?.scrollTo({ left: 0, behavior: "instant" });
  }

  return (
    <section id="about" className={styles.section} aria-labelledby="selected-work-heading">
      <div id="work" className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.titleBlock}>
            <p className={styles.eyebrow}>Featured projects</p>
            <h2 id="selected-work-heading" className={styles.title}>Selected work.</h2>
          </div>
          <p className={styles.description}>
            A showcase of our latest work across branding,
            digital experiences, 3D and creative campaigns.
          </p>
          <div className={styles.controls} aria-label="Browse featured projects">
            <button type="button" className={styles.control} onClick={() => changeProject(-1)} aria-label="Previous featured project" aria-controls="selected-work-gallery">
              <ArrowLeft size={20} strokeWidth={1.25} aria-hidden="true" />
            </button>
            <button type="button" className={styles.control} onClick={() => changeProject(1)} aria-label="Next featured project" aria-controls="selected-work-gallery">
              <ArrowRight size={20} strokeWidth={1.25} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div id="selected-work-gallery" ref={trackRef} className={styles.gallery}>
          {projects.map((project) => (
            <button key={project.id} type="button" className={styles.project} onClick={() => onSelectCase(project)} aria-label={`View ${project.title}`}>
              <span className={styles.imageWrap}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 599px) 84vw, (max-width: 999px) 46vw, (max-width: 1600px) 25vw, 400px" className={styles.image} />
              </span>
              <span className={styles.caption}>
                <span className={styles.projectText}>
                  <span className={styles.service}>{project.service}</span>
                  <span className={styles.projectTitle}>{project.title}</span>
                </span>
                <span className={styles.projectArrow} aria-hidden="true"><ArrowRight size={17} strokeWidth={1.25} /></span>
              </span>
            </button>
          ))}
        </div>
        <p className={styles.srOnly} aria-live="polite" aria-atomic="true">
          Featured project {startIndex + 1} of {FEATURED_PROJECTS.length}: {FEATURED_PROJECTS[startIndex].title}
        </p>
      </div>
    </section>
  );
}
