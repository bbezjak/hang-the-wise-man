import { useMemo, useState } from "react";
import { startNewGame } from "../store/actions/startGameAction";
import store from "../store";
import { fetchQuote } from "../store/actions/fetchQuote";
import { Button } from "../components/Button";
import { TextInput } from "./../components/TextInput";
import { PageTitle } from "../components/PageTitle";

export const EnterPlayerName = () => {
  const [input, setInput] = useState("");

  const userNameEntered = useMemo(() => {
    return input.length > 0;
  }, [input]);

  const startGame = () => {
    console.log(input);
    startNewGame(store.dispatch, input);
    fetchQuote(store.dispatch);
  };

  return (
    <>
      <PageTitle title="Welcome player"></PageTitle>
      <div className="page-content d-flex flex-column justify-center align-center">
        <div className="enter-player-name">
          <h2>Please enter your name</h2>

          <TextInput tabIndex={1} value={input} onChange={setInput} />

          <div className="d-flex justify-center">
            <Button
              tabIndex={2}
              className="width-100"
              text="Start Game"
              onClick={startGame}
              disabled={!userNameEntered}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
