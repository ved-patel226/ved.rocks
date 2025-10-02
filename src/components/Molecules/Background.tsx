import gsap, { useGSAP } from "../../utils/gsap";
import { useRef } from "react";

export default function Background() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const img = imgRef.current;
    if (!img) return;

    const tl = gsap.timeline();

    // bottom to top so img starts at opacity: 1

    tl.fromTo(
      img,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "bottom-=100vh bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    tl.fromTo(
      img,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top top",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return <img ref={imgRef} src="images/skyline.png" className="background" />;
}
