import styles from "../../css/components/FifthPage/footer.module.css";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { SiCredly } from "react-icons/si";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>
        <h1>Get in touch!</h1>
        <p>
          © 2024 by <a href="https://github.com/ved-patel226">Ved Patel</a> -
          All right reserved
        </p>
      </div>
      <div className={styles.links}>
        <a href="mailto:talk2ved11@gmail.com">
          <MdEmail />
        </a>

        <a href="https://www.credly.com/users/ved-patel.c2a74f7d">
          <SiCredly />
        </a>
      </div>
    </div>
  );
}
