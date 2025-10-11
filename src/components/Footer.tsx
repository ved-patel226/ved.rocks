import styles from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <h1 className="ttl_migra">Lets work together.</h1>
      </div>

      <div className={styles.bottom}>
        <div className={styles.links}>
          <a href="mailto:talk2ved11@gmail.com">Email</a>
          <a
            href="https://github.com/ved-patel226"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://wandb.ai/ved-patel226"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wandb
          </a>
        </div>

        <div className={styles.credits}>
          © {new Date().getFullYear()} Ved Patel
        </div>
      </div>
    </footer>
  );
}
