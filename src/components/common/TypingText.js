import React, { useState, useEffect, useCallback } from "react";
function TypingText({ text, textParagraph }) {
  const [textBox, setTextBox] = useState("");

  useEffect(() => {
    let count = 0;
    const speed = 40;

    const interval = setInterval(() => {
      if (count <= text.length) {
        setTextBox(text.substring(0, count));
        count++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <pre style={{ marginTop: textParagraph === 1 ? "20px" : "10px" }}>
      {textBox}
    </pre>
  );
}

export default TypingText;
