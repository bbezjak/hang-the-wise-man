import { useState } from "react";
import { startNewGame } from "../store/actions/startGameAction";
import store from "../store";
import { fetchQuote } from "../store/actions/fetchQuote";
import { Button } from "../components/Button";

export const EnterPlayerName = () => {
  const [input, setInput] = useState("");

  const startGame = () => {
    console.log(input);
    startNewGame(store.dispatch, input);
    fetchQuote(store.dispatch);
  };

  return (
    <>
      <h1 className="page-title">Welcome to Hang the wise man game</h1>
      <div className="page d-flex flex-column justify-center align-center">
        <div className="enter-player-name">
          <h2>Please enter your name</h2>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="d-flex justify-center">
            <Button
              className="width-100"
              text="StartGame"
              onClick={startGame}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
