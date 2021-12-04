import { useState } from "react";

export const EnterPlayerName = () => {
  const [input, setInput] = useState("");

  const startGame = () => {
    console.log(input);
  };

  return (
    <div className="page d-flex flex-column justify-center align-center">
      <h1 className="page-title">Welcome to Hang the wise man game</h1>

      <div className="enter-player-name">
        <h2>Please enter your name</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='d-flex justify-center'>
          <button className="d-block" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};
