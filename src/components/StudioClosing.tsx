"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import OurProcess from "./OurProcess";
import styles from "./StudioClosing.module.css";

export default function StudioClosing({ onOpenContact }: { onOpenContact: () => void }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <section id="studio" className={styles.studio} aria-labelledby="studio-heading">
        <div className={styles.studioInner}>
          <div className={styles.artwork}>
            <Image src="/images/studio/studio-office.webp" alt="Conceptual creative studio meeting room with purple lighting, an olive tree, and the words ‘Good design builds better businesses’ on the wall." fill sizes="(max-width: 899px) 100vw, 46vw" className={styles.studioImage} />
          </div>
          <div className={styles.studioCopy}>
            <div className={styles.studioStory}>
              <p className={styles.label}>About us</p>
              <h2 id="studio-heading" className={styles.studioTitle}>
                <span>A small studio</span>
                <span className={styles.ambition}><span className={styles.accent}>with</span> big ambitions.</span>
              </h2>
              <p className={styles.description}>
                We are a multidisciplinary creative studio passionate about building impactful digital experiences.
                We work closely with each client, combining strategic thinking, creative design and modern technology to turn ideas into real results.
              </p>
              <button type="button" className={styles.aboutButton} onClick={() => setAboutOpen(!aboutOpen)} aria-expanded={aboutOpen} aria-controls="studio-details">
                {aboutOpen ? "Less about us" : "More about us"}<ArrowRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <div id="studio-details" className={styles.aboutDetails} hidden={!aboutOpen}>
                <p>We start by listening, then bring the right mix of design, development, 3D and marketing to your project. You work directly with the people shaping the ideas, with a clear purpose behind every creative decision.</p>
                <button type="button" className={styles.textButton} onClick={onOpenContact}>Meet your next creative partner<ArrowUpRight size={17} aria-hidden="true" /></button>
              </div>
            </div>
            <dl className={styles.stats} aria-label="Studio at a glance">
              <div><dt>Happy Clients</dt><dd>50+</dd></div>
              <div><dt>Projects Completed</dt><dd>100+</dd></div>
              <div><dt>Years Experience</dt><dd>4+</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <OurProcess />

      <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
        <Image src="/images/studio/contact-botanical.webp" alt="" fill sizes="100vw" className={styles.contactImage} />
        <div className={styles.contactInner}>
          <div className={styles.contactCopy}>
            <p className={styles.label}>Let’s create together</p>
            <h2 id="contact-heading" className={styles.contactTitle}>
              <span>Ready to bring</span>
              <span>your next idea to life?</span>
            </h2>
            <p className={styles.contactDescription}>Whether you need a website, a new brand identity, 3D visuals or a complete digital marketing strategy, we’re here to help.</p>
            <div className={styles.contactButtons}>
              <button type="button" className={styles.projectButton} onClick={onOpenContact}>Start a project<ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" /></button>
              <button type="button" className={styles.contactButton} onClick={onOpenContact}>Contact us</button>
            </div>
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
