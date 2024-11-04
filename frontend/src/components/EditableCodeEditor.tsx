import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Import Prism CSS for styling
import "prismjs/components/prism-css"; // Import CSS highlighting support

const EditableCssEditor: React.FC = () => {
  const [code, setCode] = useState<string>(
    `/* Write your CSS here */\nbody {\n  background-color: #f0f0f0;\n}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    Prism.highlightAll(); // Highlight code when it updates
  }, [code]);

  return (
    <div className="flex flex-col space-y-4">
      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={code}
        onChange={handleChange}
        placeholder="Type your CSS code here..."
      />
      <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
        <pre className="line-numbers">
          <code className="language-css">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default EditableCssEditor;
