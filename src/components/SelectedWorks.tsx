import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/SelectedWorks.module.css";

gsap.registerPlugin(ScrollTrigger);

function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      img: "https://picsum.photos/seed/1/1920/1080",
      title: "Project One",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: "https://picsum.photos/seed/2/1920/1080",
      title: "Project Two",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: "https://picsum.photos/seed/3/1920/1080",
      title: "Project Three",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: "https://picsum.photos/seed/4/1920/1080",
      title: "Project Four",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: "https://picsum.photos/seed/5/1920/1080",
      title: "Project Five",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  useEffect(() => {
    if (containerRef.current && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pinSpacing: true,
      });

      gsap.to(containerRef.current, {
        xPercent: -(100 / items.length) * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          //   markers: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.SelectedWorks}>
      <div ref={containerRef} className={styles.container}>
        {items.map((item, idx) => (
          <div className={styles.item} key={idx}>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedWorks;
