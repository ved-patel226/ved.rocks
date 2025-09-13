import styles from "../css/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles.left}>
          <a href="/" className="navbar-logo ttl_migra">
            Ved Patel
          </a>

          <p className="ttl_migra">fullstack dev</p>
        </div>
      </div>
    </nav>
  );
}
