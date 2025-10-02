import styles from "../css/Hero.module.css";
import gsap, { useGSAP, SplitText } from "../utils/gsap";
import { useEffect, useState } from "react";

function Hero() {
  const [doneAnimation, setDoneAnimation] = useState(false);

  const calculateAge = () => {
    const birthDate = new Date(2011, 1, 26);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setDoneAnimation(true),
    });
    tl.to(
      `.${styles.bottom_left} .ttl_migra`,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrambleText: {
          text: `${age} year old`,
          chars: "✺{}[]()",
          revealDelay: 0.5,
          speed: 0.1,
        },
      },
      0
    );

    tl.to(
      `.${styles.bottom_left} .ttl_tusker`,
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrambleText: {
          text: "FULLSTACK DEVELOPER",
          tweenLength: true,
          chars: "✺{}[]()",
          revealDelay: 0.85,
          speed: 0.1,
        },
      },
      0
    );

    tl.from(
      `.${styles.bottom_right} .ttl_montreal`,
      {
        opacity: 0,
        y: 20,
        x: 5,
        duration: 1.2,
        ease: "power3.out",

        onStart: () => {
          const splitText = new SplitText(
            `.${styles.bottom_right} .ttl_montreal`,
            {
              type: "words,chars",
              wordsClass: "word",
            }
          );

          gsap.from(splitText.chars, {
            opacity: 0,
            y: 10,
            stagger: 0.02,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      },
      1.75
    );

    tl.fromTo(
      `.${styles.bottom_right} .btn`,
      {
        opacity: 0,
        y: 10,
        x: 5,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
      },
      2.5
    );
  }, []);

  useEffect(() => {
    // if (doneAnimation) {
    //   document.body.style.overflow = "auto";
    // } else {
    //   document.body.style.overflow = "hidden";
    //   gsap.to(window, {
    //     scrollTo: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //   });
    // }
  }, [doneAnimation]);

  return (
    <div className={styles.hero}>
      <div className={styles.bottom_left}>
        <h2 className="ttl_migra">{age} year old</h2>
        <h1 className="ttl_tusker">FULLSTACK</h1>
      </div>

      <div className={styles.bottom_right}>
        <p className="ttl_montreal">
          I'm from Jersey attending Edison Academy Magnet School. Talk to me
          about burritos, traveling, and work!
        </p>

        <a
          className="btn"
          href="mailto:your-email@example.commailto:talk2ved11@gmail.com?subject=A%20really%20good%20idea%20I%20need%20help%20with..."
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Hero;
