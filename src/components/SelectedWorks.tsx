import { useRef } from "react";
import styles from "../css/SelectedWorks.module.css";
import { UnmuteIcon, MuteIcon } from "@primer/octicons-react";
import { Fragment } from "react";
import gsap, { ScrollTrigger, useGSAP } from "../utils/gsap";
function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      img: "/images/landing.jpg",
      title: "Autonomous First Stage Booster Landing",
      desc: "Developed an active control system for the autonomous orbit-to-ground landing of a reusable rocket booster. Used trajectory simulations to achieve ~100 m accuracy. Inspired by SpaceX.",
      video: "/videos/landing.mp4",
      tech: ["/svgs/tech/Python.svg"],
    },
    {
      img: "/images/trackmania.jpg",
      title: "TrackMania AI",
      desc: "Built a QR-DQN (Quantile Regression Deep Q-Network) agent to play TrackMania. The AI learns optimal driving strategies through trial and error, surpassing the 2019 and 2020 world record on this map.",
      tech: ["/svgs/tech/Python.svg", "/svgs/tech/PyTorch.svg"],
      video: "/videos/trackmania.mp4",
    },
    {
      img: "/images/LIC.jpg",
      title:
        "Impact of Learned Image Compression on Downstream Model Performance (LIC)",
      desc: "Researched how AI-based image compression affects the performance of downstream vision models trained on compressed data. Focused on optimizing compression networks while preserving key visual features for object detection and classification tasks.",
      tech: ["/svgs/tech/Python.svg", "/svgs/tech/PyTorch.svg"],
    },
    {
      img: "/images/bowbot.jpg",
      title: "BowBot",
      desc: "Designed and built an autonomous robotic arm capable of playing the violin. Integrated computer vision for string and bow position detection, and developed a custom control system for smooth, precise motion using a Raspberry Pi.",
      tech: [
        "/svgs/tech/Fusion.svg",
        "/svgs/tech/Python.svg",
        "/svgs/tech/RaspPi.svg",
      ],
    },
    {
      img: "/images/AlbumMagic.jpg",
      title: "AlbumMagic",
      desc: "Developed a web application that visually displays the currently playing Spotify song in a clean interface. Integrated the Spotify Web API for real-time updates and used TypeScript and React for the frontend with a lightweight Rust backend.",
      tech: [
        "/svgs/tech/React.svg",
        "/svgs/tech/Sass.svg",
        "/svgs/tech/TypeScript.svg",
        "/svgs/tech/Rust.svg",
      ],
    },
  ];

  useGSAP(() => {
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

      const seps =
        containerRef.current.querySelectorAll<HTMLDivElement>("[data-sep]");

      if (seps.length) {
        gsap.to(seps, {
          rotation: 360,
          yPercent: -10,
          ease: "none",
          stagger: 0.08,
          height: 250,
          width: 250,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });
      }
    }
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
          <Fragment key={`separator-${idx}`}>
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
                      className={`${styles.Icon} ${styles.unmuteIcon}`}
                      data-role="unmute"
                      aria-label="Unmute video"
                    />
                    <MuteIcon
                      size={64}
                      className={`${styles.Icon} ${styles.muteIcon}`}
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
                    item.tech.map((techImg, i) => (
                      <img key={i} src={techImg} alt={`Technology ${i + 1}`} />
                    ))}
                </div>
              </div>

              <p>
                <span style={{ display: "inline-block", width: "2em" }} />
                {item.desc}
              </p>
            </div>

            <div className={styles.seperator}>
              <img
                data-sep
                className="floaters"
                src={`svgs/floater_${idx % 2}.svg`}
                alt="Separator"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default SelectedWorks;
