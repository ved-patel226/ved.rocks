import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";

function InteractiveScroll() {
  const [scroll, setScroll] = useState(0);
  const divRef2 = useRef(null);
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
      speed: 0.8,
      title: "HACKJPS 2024",
      content: "2nd in Industry Hack - Additional content can go here.",
      image:
        "https://s3.amazonaws.com/challengepost/sponsors/logos/000/035/782/highres/jps.png",
      link: "https://devpost.com/software/quickassist",
    },
    {
      id: 2,
      speed: 0.75,
      title: "WorthyHacks",
      content: "5th in general - Additional content can go here.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/955/746/datas/medium.png",
      link: "https://devpost.com/software/fridgy",
    },
    {
      id: 3,
      speed: 0.85,
      title: "Soario",
      content: "Participation - Additional content can go here.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/970/708/datas/medium.png",
    },
    {
      id: 4,
      speed: 0.8,
      title: "EHS HACKS",
      content: "3rd and 2nd over 2 years - Additional content can go here.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/733/612/datas/medium.jpg",
    },
  ];

  const topPositions = children.map((child) => {
    return `${
      (scroll / (divHeight + window.innerHeight)) * 100 * child.speed
    }vh`;
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
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
