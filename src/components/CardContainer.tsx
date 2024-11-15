import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataProjects from "./data/cardDataProjects.json";
import cardDataProjects2 from "./data/cardDataProjects2.json";

interface CardContainerProps {
  direction: boolean; // true for right, false for left
  file: number;
}

const CardContainer: React.FC<CardContainerProps> = ({ direction, file }) => {
  let startOffset = window.innerWidth * -1.25;
  let scrollLength = 2500;
  if (window.innerWidth <= 1080) {
    startOffset = window.innerWidth * 0.25;
    scrollLength = 1000;
    if (direction) {
      startOffset = startOffset * -5;
    }
  } else {
    startOffset = window.innerWidth * 0.25;
    if (direction) {
      startOffset = startOffset * -1.25;
    }
  }

  const [offset, setOffset] = useState(startOffset);
  const [cards, setCards] = useState<
    { title: string; content: string; link: string; img: string }[]
  >([]);
  const [unblurredIndices, setUnblurredIndices] = useState<number[]>([]);

  useEffect(() => {
    setCards(file === 1 ? cardDataProjects : cardDataProjects2);
  }, [file]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const directionMultiplier = direction ? 1 : -1;

    const newOffset =
      startOffset +
      directionMultiplier * scrollPosition * (window.innerWidth / scrollLength);

    setOffset(newOffset);

    const indicesToUnblur: number[] = [];
    const containerWidth = window.innerWidth;

    cards.forEach((_, index) => {
      const cardElement = document.querySelector(`[data-index="${index}"]`);
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect();
        if (cardRect.right > 0 && cardRect.left < containerWidth) {
          indicesToUnblur.push(index); // Push index (a number)
        }
      }
    });

    setUnblurredIndices(indicesToUnblur);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction]);

  console.log(unblurredIndices);

  return (
    <div
      className="flex mt-[10vh] gap-32"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          className="min-w-[300px]"
          data-index={index}
        >
          <Card
            title={card.title}
            content={card.content}
            img={card.img}
            v2={unblurredIndices.includes(index)}
          />
        </a>
      ))}
    </div>
  );
};

export default CardContainer;
