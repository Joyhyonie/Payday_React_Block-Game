import React, { useState, useEffect } from "react";
function TypingText({ text }) {
  const [textBox, setTextBox] = useState("");
  const [count, setCount] = useState(0);

  let speed = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setTextBox((textBox) => {
        let updated = textBox;
        updated = textBox + text[count];
        return updated;
      });
      setCount(count + 1);
    }, speed);
    count === text.length && clearInterval(interval);
    return () => clearInterval(interval);
  });

  return <pre>{textBox}</pre>;
}

export default TypingText;
