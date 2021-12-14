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

export const PlayHangman = () => {
  const [activeLetters, setActiveLetters] = useState([] as string[]);

  const [errorNumber, setErrorNumber] = useState(0);

  const [endTime, setEndTime] = useState(null as null | number);

  const response: QuoteResponse = useSelector((state: any) => state.response);

  const user: string = useSelector((state: any) => state.userName);

  const startTime: number = useSelector((state: any) => state.startTime);

  const uniqueLetters = useMemo(() => {
    if (response && response.content) {
      const letterArray = response.content.split("");
      const unique: string[] = [];
      letterArray.forEach(
        (letter) => !unique.includes(letter) && unique.push(letter)
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
    const test = response.content.split("").map((char) => {
      if (char.match(/[a-z]/i)) {
        if (activeLetters.includes(char.toLowerCase())) {
          return char;
        } else {
          return "*";
        }
      } else {
        return char;
      }
    });
    const test2 = test.join("");
    return test2;
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

      const payload = {
        quoteId: response._id,
        length: response.content.length,
        userName: user,
        uniqueCharacters: uniqueLetters,
        duration: (endTime as number) - startTime,
        errors: errorNumber,
      };

      submitScore(payload, store.dispatch);
    }
  }, [userGuessedQuote]);

  const resetGame = () => {
    setActiveLetters([]);
    setErrorNumber(0);
    fetchQuote(store.dispatch);
  };

  const showHighScore = () => {
    fetchHighscore(store.dispatch);
  };

  return (
    <>
     <h1 className="page-title">Hang the wise man</h1>
     <div className="page d-flex flex-column justify-center align-center">
     
      <h2>Welcome {user}</h2>

      <p>{startTime} - {endTime}</p>

      <HangmanDrawing errors={errorNumber}></HangmanDrawing>

      <ErrorCounter errorCount={errorNumber} />

      <div className="text-center">{maskedValue}</div>

      <Button onClick={resetGame} text="Reset game"></Button>

      {userGuessedQuote && (
        <Button onClick={showHighScore} text="See Highscore"></Button>
      )}

      <VirtualKeyboard
        activateLetter={activateLetter}
        activeLetters={activeLetters}
        disableKeyboard={errorNumber === 6 || userGuessedQuote}
      ></VirtualKeyboard>
    </div>
    </>
    
  );
};
