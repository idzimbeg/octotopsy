import React, { useEffect, useState } from "react";

import "./Card.css";

type CardProps = { children: React.ReactNode; tex?: string; label: string };

const Card = (props: CardProps) => {
  const textState = ["is-loading", "is-loaded"];
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(textState[0]);
  const { children, tex, label } = props;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(tex!.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === textState[0] && text !== tex) {
        setTyping(textState[1].slice(0, text.length + 1));
      } else if (typing === textState[1] && text === tex) {
        sleep(1000).then(() => {
          setText(textState[0]);
        });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <div className="card">
      <div className="blinking-cursor">
        {children}
        {text}
        {label}
      </div>
    </div>
  );
};
export default Card;
