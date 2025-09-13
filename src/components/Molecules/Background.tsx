import gsap, { useGSAP } from "../../utils/gsap";
import { useRef } from "react";

export default function Background() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const img = imgRef.current;
    if (!img) return;

    const ctx = (gsap as any).context(() => {
      gsap.to(img, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top top",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      });
    }, imgRef);

    return () => ctx.revert();
  }, []);

  return (
    <img
      ref={imgRef}
      src="images/skyline.png"
      className="background"
      style={{ opacity: 1 }}
    />
  );
}
