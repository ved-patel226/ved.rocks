import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../css/components/FifthPage/footer.module.css";
import { MdEmail } from "react-icons/md";
import { SiCredly } from "react-icons/si";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.text}>
        <h1 data-aos="fade-right">Get in touch!</h1>
        <p data-aos="fade-right" data-aos-duration={1200}>
          © 2024 by <a href="https://github.com/ved-patel226">Ved Patel</a> -
          All right reserved
        </p>
      </div>
      <div className={styles.links}>
        <a href="mailto:talk2ved11@gmail.com" data-aos="fade-left">
          <MdEmail />
        </a>
        <a
          href="https://www.credly.com/users/ved-patel.c2a74f7d"
          data-aos="fade-left"
          data-aos-duration={1200}
        >
          <SiCredly />
        </a>
      </div>
    </div>
  );
}
