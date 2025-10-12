import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/SelectedWorks.module.css";
import { UnmuteIcon, MuteIcon } from "@primer/octicons-react";
gsap.registerPlugin(ScrollTrigger);

function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      img: "/images/landing.png",
      title: "Autonomous First Stage Booster Landing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      video: "/videos/landing.mp4",
      tech: "Python",
    },
    {
      img: "/images/trackmania.jpg",
      title: "TrackMania AI",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tech: "Python, PyTorch, AI",
      video: "/videos/trackmania.mp4",
    },
    {
      img: "/images/AlbumMagic.png",
      title: "AlbumMagic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tech: "React, SCSS, TypeScript, Rust, Axum",
    },
    {
      img: "/images/AlbumMagic.png",
      title: "AlbumMagic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tech: "React, SCSS, TypeScript, Rust, Axum",
    },
    {
      img: "/images/AlbumMagic.png",
      title: "AlbumMagic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac velit sed odio elementum maximus quis id sem. Mauris tincidunt odio ac posuere sollicitudin. Suspendisse leo est, tincidunt cursus pulvinar ac, fermentum et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      tech: "React, SCSS, TypeScript, Rust, Axum",
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
        xPercent: -86.667,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = async (
    _: React.MouseEvent<HTMLDivElement>,
    videoId: string
  ) => {
    const v = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!v) return;
    v.style.opacity = "1";
    await v.play();
  };

  const handleMouseLeave = (
    _: React.MouseEvent<HTMLDivElement>,
    videoId: string
  ) => {
    const v = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    v.style.opacity = "0";
  };
  const handleToggleAudio = (
    e: React.MouseEvent<HTMLDivElement>,
    videoId: string
  ) => {
    e.stopPropagation();

    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) return;

    video.muted = !video.muted;

    const iconsContainer = e.currentTarget;
    const unmuteIcon = iconsContainer.querySelector(
      '[data-role="unmute"]'
    ) as HTMLElement;
    const muteIcon = iconsContainer.querySelector(
      '[data-role="mute"]'
    ) as HTMLElement;

    if (video.muted) {
      unmuteIcon.style.display = "block";
      muteIcon.style.display = "none";
    } else {
      unmuteIcon.style.display = "none";
      muteIcon.style.display = "block";
    }
  };

  return (
    <div ref={sectionRef} className={styles.SelectedWorks}>
      <div ref={containerRef} className={styles.container}>
        {items.map((item, idx) => (
          <div className={styles.item} key={idx}>
            {item.video ? (
              <div
                className={styles.media}
                onMouseEnter={(e) => handleMouseEnter(e, `video-${idx}`)}
                onMouseLeave={(e) => handleMouseLeave(e, `video-${idx}`)}
              >
                <img src={item.img} alt={item.title} />

                <video
                  src={item.video}
                  loop
                  playsInline
                  id={`video-${idx}`}
                  preload="metadata"
                  style={{ opacity: 0 }}
                  muted
                />
                <div
                  className={styles.iconsContainer}
                  onClick={(e) => handleToggleAudio(e, `video-${idx}`)}
                >
                  <UnmuteIcon
                    size={64}
                    className={styles.Icon}
                    data-role="unmute"
                    aria-label="Unmute video"
                  />
                  <MuteIcon
                    size={64}
                    className={styles.Icon}
                    data-role="mute"
                    aria-label="Mute video"
                  />
                </div>
              </div>
            ) : (
              <div className={styles.media}>
                <img src={item.img} alt={item.title} />
              </div>
            )}

            <div className={styles.text}>
              <h2>{item.title}</h2>
              <div className={styles.tech}>
                {item.tech &&
                  item.tech
                    .split(",")
                    .map((tech, i) => <p key={i}>{tech.trim()}</p>)}
              </div>
            </div>

            <p>
              <span style={{ display: "inline-block", width: "2em" }} />
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedWorks;
