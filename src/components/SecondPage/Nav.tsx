import styles from "../../css/components/SecondPage/Nav.module.css";
import { FaGithub } from "react-icons/fa";
import { SiCodersrank } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Nav() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.nav} data-aos="fade-right">
      <div>
        <h1>ved.rocks</h1>
      </div>

      <div>
        <FaGithub
          onClick={() =>
            (window.location.href = "https://github.com/ved-patel226")
          }
          className="click"
        />

        <SiCodersrank
          onClick={() =>
            (window.location.href =
              "https://profile.codersrank.io/user/ved-patel226")
          }
          className="click"
        />
      </div>
    </div>
  );
}

export default Nav;
