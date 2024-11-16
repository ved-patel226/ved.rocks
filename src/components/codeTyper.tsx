import { useState, useEffect } from "react";
import codeSnippets from "./data/codeSnippets.json";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeSnippets = {
  python: string;
  javascript: string;
  java: string;
};

function Typewriter() {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeKeys = Object.keys(codeSnippets) as (keyof CodeSnippets)[];
  const codeString = codeSnippets[codeKeys[currentLangIndex]];
  const language = codeKeys[currentLangIndex];

  const delay = 10;

  const customDarculaStyle = {
    ...darcula,
    hljs: {
      ...darcula.hljs,
      background: "none",
    },
  };

  useEffect(() => {
    if (currentIndex < codeString.length) {
      const timeout = setTimeout(() => {
        const char = codeString[currentIndex];
        setCurrentText((prevText) => prevText + char);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setCurrentIndex(0);
      setCurrentText("");
      setCurrentLangIndex((prevIndex) =>
        prevIndex + 1 < codeKeys.length ? prevIndex + 1 : 0
      );
    }
  }, [currentIndex, delay, codeString]);

  return (
    <div className="whitespace-pre-wrap overflow-x-auto">
      <SyntaxHighlighter language={language} style={customDarculaStyle}>
        {currentText}
      </SyntaxHighlighter>
    </div>
  );
}

export default Typewriter;
