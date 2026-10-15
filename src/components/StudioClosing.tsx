"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import styles from "./StudioClosing.module.css";

export default function StudioClosing({ onOpenContact }: { onOpenContact: () => void }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <section id="studio" className={styles.studio} aria-labelledby="studio-heading">
        <div className={styles.studioInner}>
          <div className={styles.artwork}>
            <Image src="/images/studio/studio-artwork.webp" alt="" fill sizes="(max-width: 899px) 100vw, 50vw" className={styles.studioImage} />
            <span className={styles.artworkCaption}>People.<br />Ideas.<br />Creativity.<br />Impact.</span>
          </div>
          <div className={styles.studioCopy}>
            <p className={styles.label}>Our studio</p>
            <h2 id="studio-heading" className={styles.studioTitle}>
              <span>Small studio mindset.</span>
              <span className={styles.accent}>Big creative ambition.</span>
            </h2>
            <p className={styles.description}>
              We are a multidisciplinary creative studio passionate about building meaningful digital experiences and brand stories.
              We work closely with each client, combining strategic thinking, creative design and modern technology to turn ideas into impact.
            </p>
            <button type="button" className={styles.aboutButton} onClick={() => setAboutOpen(!aboutOpen)} aria-expanded={aboutOpen} aria-controls="studio-details">
              {aboutOpen ? "Less about us" : "More about us"}<ArrowRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <div id="studio-details" className={styles.aboutDetails} hidden={!aboutOpen}>
              <p>We start by listening, then bring the right mix of design, development, 3D and marketing to your project. You work directly with the people shaping the ideas, with a clear purpose behind every creative decision.</p>
              <button type="button" className={styles.textButton} onClick={onOpenContact}>Meet your next creative partner<ArrowUpRight size={17} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
        <Image src="/images/studio/contact-artwork.webp" alt="" fill sizes="100vw" className={styles.contactImage} />
        <div className={styles.contactInner}>
          <div>
            <p className={styles.label}>Contact</p>
            <h2 id="contact-heading" className={styles.contactTitle}>
              <span>Let’s make something</span>
              <span>remarkable.</span>
            </h2>
          </div>
          <div className={styles.contactAction}>
            <p>Have a project in mind or just want to say hello?<br />We’d love to hear from you.</p>
            <button type="button" className={styles.projectButton} onClick={onOpenContact}>Start a project<ArrowUpRight size={20} strokeWidth={1.6} aria-hidden="true" /></button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="#home" className={styles.wordmark}>YOUR STUDIO.</a>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#home" className={styles.backToTop}>Back to top<ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
