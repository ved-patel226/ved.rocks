import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import StackIcon from "tech-stack-icons";
import { useEffect } from "react";

function MarqueeIcons() {
  const [languages1, setLanguages1] = React.useState<string[]>([]);
  const [languages2, setLanguages2] = React.useState<string[]>([]);

  useEffect(() => {
    const langs = [
      "reactjs",
      "typescript",
      "js",
      "python",
      "nodejs",
      "bash",
      "c++",
      "git",
      "html5",
      "css3",
      "tailwindcss",
      "npm",
    ];

    langs.sort(() => Math.random() - 0.5);

    const half = Math.ceil(langs.length / 2);

    setLanguages1(langs.slice(0, half));
    setLanguages2(langs.slice(half));
  }, []);

  useEffect(() => {
    console.log("Languages 1:", languages1.length);
    console.log("Languages 2:", languages2.length);
  }, [languages1, languages2]);

  return (
    <>
      <div className="w-1/2 mx-auto flex flex-col gap-5">
        <Marquee fade={true}>
          {languages1.map((lang) => (
            <StackIcon key={lang} name={lang} />
          ))}
        </Marquee>
        <Marquee fade={true} reverse={true}>
          {languages2.map((lang) => (
            <StackIcon key={lang} name={lang} />
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default MarqueeIcons;
