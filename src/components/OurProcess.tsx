import styles from "./OurProcess.module.css";

const steps = [
  { title: "Discover", description: "Understand your goals and requirements." },
  { title: "Plan", description: "Strategy, wireframes and creative direction." },
  { title: "Create", description: "Design, develop and bring ideas to life." },
  { title: "Launch", description: "Go live and grow with ongoing support." },
];

export default function OurProcess() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.label}>Our process</p>
          <h2 id="process-heading" className={styles.heading}>
            <span>From idea</span>
            <span>to impact.</span>
          </h2>
          <p className={styles.description}>A clear and collaborative process to bring your vision to life.</p>
        </header>

        <ol className={styles.steps} role="list">
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
