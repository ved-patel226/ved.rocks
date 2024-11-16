import { useEffect, useState, useRef } from "react";
import Card from "./Card";

function InteractiveScroll() {
  const [scroll, setScroll] = useState(0);
  const divRef2 = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (divRef2.current) {
      setDivHeight(divRef2.current.clientHeight);
    }

    const handleResize = () => {
      if (divRef2.current) {
        setDivHeight(divRef2.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const children = [
    {
      id: 1,
      speed: 0.5,
      title: "HACKJPS 2024",
      content: "2nd in Industry Hack - Additional content can go here.",
      image:
        "https://s3.amazonaws.com/challengepost/sponsors/logos/000/035/782/highres/jps.png",
      link: "https://devpost.com/software/quickassist",
    },
    {
      id: 2,
      speed: 0.55,
      title: "WorthyHacks",
      content: "5th in general - Additional content can go here.",
      image:
        "https://static.wixstatic.com/media/605209_bc9cc31657804e84b9089a0e260d8687~mv2.png/v1/fill/w_501,h_490,al_c,lg_1,q_85,enc_auto/605209_bc9cc31657804e84b9089a0e260d8687~mv2.png",
      link: "https://devpost.com/software/fridgy",
    },
    {
      id: 3,
      speed: 0.55,
      title: "EHS HACKS",
      content: "3rd and 2nd over 2 years - Additional content can go here.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/733/612/datas/medium.jpg",
      link: "https://github.com/ved-patel226/STUDY-SYNC",
    },
    {
      id: 4,
      speed: 0.45,
      title: "CS50AI",
      content: "Certified - Additional content can go here.",
      image:
        "https://static.wixstatic.com/media/b2923a_a8e9b98620404d3fb7a01c163d2c6d66~mv2.png/v1/fill/w_440,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Harvard_shield_obedience_wreath.png",
      link: "https://certificates.cs50.io/af75a63c-b403-43f0-b560-d6c8c0cb555e.pdf?size=letter",
    },
    {
      id: 5,
      speed: 0.5,
      title: "PCEP",
      content: "Python Certified Beginner - Additional content can go here.",
      image: "https://pythoninstitute.org/assets/61f11fac8e6f4153315957.png",
      link: "https://www.credly.com/earner/earned/badge/1df5efe2-91b8-46d3-9c41-02d2f557a2d8",
    },
    {
      id: 6,
      speed: 0.55,
      title: "PCAP",
      content: "Python Certified Associate - Additional content can go here.",
      image: "https://pythoninstitute.org/assets/61f11f7719dd3800707549.png",
      link: "https://www.credly.com/badges/ed33b117-77d0-46b1-96e2-9476f44b313c/public_url",
    },
  ];

  const topPositions = children.map((child) => {
    return `${
      (scroll / (divHeight + window.innerHeight)) * 100 * child.speed
    }vh`;
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div
      className="h-[200vh] mt-10 flex justify-center items-start gap-4 mx-auto px-4"
      ref={divRef2}
    >
      {children.map((child, index) => {
        const blurIntensity = 10 - ((scroll - divHeight) / 100 - index);

        return (
          <div
            key={child.id}
            className="sticky w-full max-w-[320px] flex justify-center items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: topPositions[index],
              filter:
                hoveredIndex === index ? "none" : `blur(${blurIntensity}px)`,
              transition: "filter 0.3s ease-in-out",
            }}
          >
            {child.link ? (
              <a href={child.link} target="_blank" rel="noopener noreferrer">
                <Card
                  title={child.title}
                  content={child.content}
                  img={child.image}
                  v2={true}
                />
              </a>
            ) : (
              <Card
                title={child.title}
                content={child.content}
                img={child.image}
                v2={true}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InteractiveScroll;
