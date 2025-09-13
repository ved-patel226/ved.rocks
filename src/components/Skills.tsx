import styles from "../css/Skills.module.css";
import { NorthStarIcon } from "@primer/octicons-react";
import gsap, { useGSAP, SplitText } from "../utils/gsap";
import { useRef } from "react";

export default function Skills() {
  const starRef = useRef<HTMLImageElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const ttlRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const star = starRef.current;

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
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    // tl.to(ttlRef.current, {
    //   ease: "power2.out",
    //   scrambleText: {
    //     text: `my skills`,
    //     chars: "✺{}[]()",
    //     revealDelay: 0.5,
    //   },
    // });

    // tl.to(paragraphRef.current, {
    //   ease: "power2.out",
    //   scrambleText: {
    //     tweenLength: true,
    //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
    //       accumsan bibendum ipsum eget varius. Aliquam pulvinar odio efficitur
    //       luctus blandit. Integer sit amet quam varius, feugiat dui nec, viverra
    //       ligula. Vivamus nec sagittis erat. Lorem ipsum dolor sit amet,
    //       consectetur adipiscing elit. Aliquam vestibulum elit vel mattis
    //       finibus. Curabitur in lacus elit. Ut ac quam condimentum mi malesuada
    //       sodales. Nulla hendrerit dignissim augue, ut porta est elementum a.
    //       Suspendisse eget viverra enim, eu vestibulum tellus. Sed malesuada
    //       ligula vel eros consequat, et iaculis arcu facilisis. Cras scelerisque
    //       nisi ex, at pellentesque magna molestie in. Proin rutrum odio eget
    //       orci congue tincidunt. Fusce est ipsum, imperdiet id vulputate non,
    //       sodales at ligula. Duis ultricies in nibh sit amet ullamcorper.`,
    //     chars: "✺{}[]()",
    //     speed: 1,
    //   },
    // });

    tl.from(ttlRef.current, {
      opacity: 0,
      y: 20,
      x: 5,
      duration: 1.2,
      ease: "power3.out",

      onStart: () => {
        const splitText = new SplitText(ttlRef.current, {
          type: "words,chars",
          charsClass: "char",
          wordsClass: "word",
        });

        gsap.from(splitText.chars, {
          opacity: 0,
          y: 10,
          stagger: 0.02,
          duration: 0.8,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <div ref={skillsRef} className={styles.skills}>
      <div className={styles.skills_ttl}>
        <div>
          <div className="star_icon" ref={starRef}>
            <NorthStarIcon size={64} fill="#daa769" />
          </div>
          <h1 ref={ttlRef} className="ttl_migra">
            my skills
          </h1>
        </div>
        <p ref={paragraphRef}></p>
      </div>
    </div>
  );
}
