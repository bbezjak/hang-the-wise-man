import { useEffect, useMemo, useState } from "react";
import store from "../store";
import { fetchQuote } from "../store/actions/fetchQuote";
import { useSelector } from "react-redux";
import { QuoteResponse } from "../types";
import { VirtualKeyboard } from "../components/VirtualKeyboard";
import { ErrorCounter } from "../components/ErrorCounter";
import { submitScore } from "../store/actions/submitScore";
import { fetchHighscore } from "../store/actions/fetchHighscore";
import { HangmanDrawing } from "../components/HangmanDrawing";
import { Button } from "../components/Button";
import { QuoteShower } from "../components/QuoteShower";

export const PlayHangman = () => {
  const [activeLetters, setActiveLetters] = useState([] as string[]);

  const [errorNumber, setErrorNumber] = useState(0);

  const [endTime, setEndTime] = useState(null as null | number);

  const response: QuoteResponse = useSelector((state: any) => state.response);

  const maxErrorNumber: number = useSelector((state: any) => state.maxErrorNumber);

  const user: string = useSelector((state: any) => state.userName);

  const startTime: number = useSelector((state: any) => state.startTime);

  const uniqueLetters = useMemo(() => {
    if (response && response.content) {
      const letterArray = response.content.split("");
      const unique: string[] = [];
      letterArray.forEach(
        (letter) => !unique.includes(letter.toLowerCase()) && unique.push(letter.toLowerCase())
      );

      return unique;
    } else {
      return [];
    }
  }, [response]);

  const activateLetter = (letter: string) => {
    setActiveLetters([...activeLetters, letter.toLowerCase()]);

    if (!uniqueLetters.includes(letter.toLowerCase())) {
      setErrorNumber(errorNumber + 1);
    }
  };

  const maskedValue = useMemo(() => {
    if (!response.content) return "";
    const lettersArray = response.content.split("").map((char) => {
      if (char.match(/[a-z]/i)) {
        if (activeLetters.includes(char.toLowerCase())) {
          return char;
        } else {
          return "_";
        }
      } else {
        return char;
      }
    });
    const joined = lettersArray.join("");
    return joined;
  }, [response.content, activeLetters]);

  const userGuessedQuote = useMemo(() => {
    const quote = response.content;

    return (
      !!quote &&
      !!maskedValue &&
      quote.toLowerCase() === maskedValue.toLowerCase()
    );
  }, [response.content, maskedValue]);

  useEffect(() => {
    if (userGuessedQuote) {
      setEndTime(Date.now());

      debugger

      const payload = {
        quoteId: response._id,
        length: response.content.length,
        userName: user,
        uniqueCharacters: uniqueLetters.length,
        duration: (endTime as number) - startTime,
        errors: errorNumber,
      };

      submitScore(payload, store.dispatch);
    }
  }, [userGuessedQuote]);

  const resetGame = () => {
    setActiveLetters([]);
    setErrorNumber(0);
    setEndTime(null);
    fetchQuote(store.dispatch);
  };

  const firstMoveMade = useMemo(() => {return activeLetters.length > 0}, [activeLetters]);

  const showHighScore = () => {
    fetchHighscore(store.dispatch);
  };

  return (
    <div className="play-hangman">
      <h1 className="page-title">Hang the wise man</h1>

      <div className="page d-flex flex-column justify-center align-center">
        <h2>Welcome {user}</h2>

        <HangmanDrawing errors={errorNumber}></HangmanDrawing>

        <ErrorCounter errorCount={errorNumber} firstMoveMade={firstMoveMade}/>

        {/* <div className="quote font-weight-bold">
          {maskedValue}
        </div> */}

        <QuoteShower maskedQuote={maskedValue} quote={response.content} activeLetters={activeLetters} errorCount={errorNumber}></QuoteShower>

        {/* {errorNumber === maxErrorNumber && (
          <div className="quote">
            <p className="font-weight-bold">{response.content}</p>
          </div>
        )} */}

        <Button onClick={resetGame} className="reset-button" text="Reset game"></Button>

        <Button onClick={showHighScore} text="See Highscore" className={!userGuessedQuote ? "visibility-hidden" : ""}></Button>

        <VirtualKeyboard
          activateLetter={activateLetter}
          activeLetters={activeLetters}
          disableKeyboard={errorNumber === 6 || userGuessedQuote}
        ></VirtualKeyboard>
      </div>
    </div>
  );
};
