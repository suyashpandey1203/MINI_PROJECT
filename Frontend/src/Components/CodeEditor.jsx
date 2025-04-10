import React, { useState, useEffect } from "react";

const CodeEditor = () => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Simulate typing effect
  useEffect(() => {
    const sampleCode = `function calculateSum(arr) {
  return arr.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5];
const total = calculateSum(numbers);
console.log(\`Sum: \${total}\`);`;

    let i = 0;
    const typing = setInterval(() => {
      if (i <= sampleCode.length) {
        setText(sampleCode.substring(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setText("");
          i = 0;
          const newTyping = setInterval(() => {
            if (i <= sampleCode.length) {
              setText(sampleCode.substring(0, i));
              i++;
            } else {
              clearInterval(newTyping);
            }
          }, 100);
        }, 1000);
      }
    }, 100);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursorInterval);
    };
  }, []);

  // Generate line numbers
  const lineNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col w-full rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      {/* Editor header */}
      <div className="bg-gray-900 p-2 flex items-center">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-mono text-gray-400">script.js</div>
      </div>

      {/* Editor content */}
      <div className="flex p-2">
        {/* Line numbers */}
        <div className="text-right pr-4 font-mono text-gray-500 select-none w-8">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6">
              {num}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="font-mono text-gray-100 flex-1 relative leading-6 pl-2 border-l border-gray-700">
          <pre className="whitespace-pre-wrap">{text}</pre>
          {cursorVisible && (
            <span
              className="absolute inline-block w-2 h-5 bg-blue-400 opacity-70"
              style={{
                top: `${Math.floor(text.split("\n").length - 1) * 24}px`,
                left: `${(text.split("\n").pop()?.length || 0) * 8 + 8}px`,
              }}
            ></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
