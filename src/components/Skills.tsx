import styles from "../scss/Skills.module.scss";
import { NorthStarIcon } from "@primer/octicons-react";
import gsap, { useGSAP, SplitText } from "../utils/gsap";
import { useRef } from "react";

export default function Skills() {
  const starRef = useRef<HTMLImageElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const ttlRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const star = starRef.current;
    const ttl = ttlRef.current;
    const intro = introRef.current;
    const paragraph = paragraphRef.current;

    gsap.to(star, {
      rotation: -360 * 2,
      ease: "sine",

      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(ttl, {
      opacity: 0,
      y: 10,
      duration: 5,
      ease: "power2.out",

      onStart: () => {
        if (ttl) {
          const split = new SplitText(ttl, {
            type: "chars",
            charsClass: "char",
          });

          tl.from(split.chars, {
            opacity: 0,
            y: 10,
            stagger: 10,
            ease: "power2.out",
          });
        }
      },
    });

    tl.from(intro, {
      opacity: 0,
      y: 10,
      duration: 5,
      ease: "power2.out",

      onStart: () => {
        if (intro) {
          const split = new SplitText(intro, {
            type: "chars",
          });

          tl.from(split.chars, {
            opacity: 0,
            y: 10,
            stagger: 10,
            ease: "power2.out",
          });
        }
      },
    });

    tl.from(paragraph, {
      ease: "power2.out",
      onStart: () => {
        if (paragraph) {
          const splitP = new SplitText(paragraph, {
            type: "words",
            wordsClass: styles.word,
          });

          tl.from(splitP.words, {
            opacity: 0.5,
            stagger: 1,
            ease: "power2.out",
          });
        }
      },
    });
  }, []);

  return (
    <div className={styles.skills}>
      <div className={styles.intro} ref={introRef}>
        <h1 className="ttl_tusker">Hi.</h1>
        <h2 className="ttl_migra">I'm Ved</h2>
      </div>

      <div ref={skillsRef} className={styles.skills_ttl}>
        <div className={styles.container}>
          <div className="star_icon" ref={starRef}>
            <NorthStarIcon size={64} fill="#daa769" />
          </div>
          <h1 ref={ttlRef}>my skills</h1>
        </div>
        <p ref={paragraphRef}>
          I enjoy coding, creating, and designing. I build for the web using{" "}
          <img src="/svgs/tech/TypeScript.svg" alt="TypeScript" />,{" "}
          <img src="/svgs/tech/React.svg" alt="React" />,{" "}
          <img src="/svgs/tech/gsap-white.svg" alt="GSAP" /> and{" "}
          <img src="/svgs/tech/Sass.svg" alt="Sass" />. My interests also extend
          to AI and machine learning, where I work with{" "}
          <img src="/svgs/tech/Python.svg" alt="Python" />,{" "}
          <img src="/svgs/tech/Rust.svg" alt="Rust" />,{" "}
          <img src="/svgs/tech/PyTorch.svg" alt="PyTorch" />,{" "}
          <img src="/svgs/tech/NumPy.svg" alt="NumPy" /> and{" "}
          <img src="/svgs/tech/TensorFlow.svg" alt="TensorFlow" />. I also have
          experience with CAD and use{" "}
          <img src="/svgs/tech/Fusion.svg" alt="Fusion" /> for 3D modeling and
          design.{" "}
        </p>
      </div>
    </div>
  );
}
