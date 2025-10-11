import { useRef } from "react";
import styles from "../css/NavBar.module.css";

import footerstyles from "../css/Footer.module.css";

import gsap, { useGSAP } from "../utils/gsap";

export default function NavBar() {
  const navRef = useRef(null);

  useGSAP(() => {
    const nav = navRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      nav,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: `.${footerstyles.footer}`,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
        opacity: 1,
        immediateRender: false,
      },
      1
    );

    tl.fromTo(
      nav,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "top+=100 top",
          scrub: true,
          // markers: true,
        },
      }
    );

    tl.set(nav, { opacity: 1 });
  }, []);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles.left}>
          <a
            href="/"
            style={{
              fontSize: "2rem",
            }}
          >
            Ved Patel
          </a>
          <p className="ttl_migra">is a developer</p>
        </div>
      </div>
    </nav>
  );
}
