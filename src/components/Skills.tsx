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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          tempor euismod. Vivamus faucibus justo at elit commodo, a sagittis
          lacus commodo. Curabitur vel urna vitae augue volutpat tempus. In
          imperdiet fringilla ex in dictum. Sed iaculis lobortis lacus, a luctus
          tortor efficitur ac. Mauris lectus massa, condimentum in urna non,
          malesuada feugiat ligula. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Suspendisse a libero mollis lorem tincidunt
          rutrum. Curabitur cursus aliquam condimentum. Nullam vitae nisi sit
          amet ipsum ornare vulputate. Proin euismod, lectus ac pellentesque
          aliquam, sapien libero feugiat ex, sit amet ultricies lectus dolor
          eget quam. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}
