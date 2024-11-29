import { useEffect, useState } from "react";
import styles from "../../css/components/FirstPage/Hero.module.css";
import base from "../../css/index.module.css";
import { Timeout } from "timers";
import { BiDownArrow } from "react-icons/bi";

function Hero() {
  const [showArrow, setShowArrow] = useState(false);

  let timeoutId: Timeout;

  const handleScroll = () => {
    if (window.scrollY === 0) {
      timeoutId = setTimeout(() => {
        setShowArrow(true);
      }, 5000);
    } else {
      clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div>
          <h1>I'm Ved</h1>
          <p>
            A 13 year old FullStack Dev
            <br />
            based in NJ
          </p>
          <BiDownArrow
            className={base.loader}
            style={{ opacity: showArrow ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
