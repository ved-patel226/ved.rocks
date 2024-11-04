import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeSnippets from "./data/codeSnippets.json";

function Hero() {
  const [code, setCode] = useState("");
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  const codeKeys = Object.keys(codeSnippets);
  const codeString = codeSnippets[codeKeys[currentLangIndex]];

  useEffect(() => {
    let index = 0;
    let firstIteration = true;

    const typeCode = () => {
      if (firstIteration === true) {
        setCode("\r");
      }
      if (index < codeString.length - 1) {
        setCode((prev) => prev + codeString[index]);
        index++;
        setTimeout(typeCode, 20);
        firstIteration = false;
      } else {
        setTimeout(() => {
          setCode("");
          index = 0;
          setCurrentLangIndex((prev) => (prev + 1) % codeKeys.length);
        }, 1000);
      }
    };

    typeCode();

    return () => clearTimeout(typeCode);
  }, [codeString, currentLangIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-40vh)]">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-primary">I'm Ved</h1>
        <h2 className="text-4xl font-bold text-primary">And I code</h2>
      </div>

      <div className="mockup-code bg-transparent shadow-xl backdrop-blur-xl min-w-[20%] min-h-[50%]">
        {" "}
        <SyntaxHighlighter
          language={codeKeys[currentLangIndex]}
          style={{
            ...solarizedlight,
            'code[class*="language-"]': {
              background: "none",
            },
            'pre[class*="language-"]': {
              background: "none",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Hero;
