import React, { useEffect, useState } from "react";
import "./TypingAnimation.css";

const TypingAnimation = () => {
  const words = [`Industries Through Digital Transformation`];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }
      const part = words[i].substring(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
      setText(part);
    }, speed);
    return () => clearInterval(interval);
    // eslint-disable
  }, [words, i, offset, forwards, skipCount]);

  return (
    <div className="">
      <h1 className="word mt-2 mb-2  ">
        Empowering, <br />
        {text}
      </h1>
    </div>
  );
};

export default TypingAnimation;
