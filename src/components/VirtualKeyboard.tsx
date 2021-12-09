import { useState } from "react";

export const VirtualKeyboard = (props: {
  activateLetter: (letter: string) => void;
  activeLetters: string[];
  disableKeyboard: boolean;
}) => {
  const [alphabet] = useState(
    Array.from(Array(26))
      .map((e, i) => i + 65)
      .map((x) => String.fromCharCode(x))
  );

  const isButtonActive = (letter: string) => {
    return props.activeLetters.includes(letter.toLowerCase());
  };

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          disabled={isButtonActive(letter) || props.disableKeyboard}
          onClick={() => props.activateLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
