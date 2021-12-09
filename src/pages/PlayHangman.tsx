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

export const PlayHangman = () => {

  const [activeLetters, setActiveLetters] = useState([] as string[]);

  const [errorNumber, setErrorNumber] = useState(0);

  const [maskedQuote, setMaskedQuote] = useState("");

  const [endTime, setEndTime] = useState(null as (null | number));

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

  const userGuessedQuote = useMemo(() => {
    const quote = response.content;
  
    return !!quote && !!maskedQuote && quote.toLowerCase() === maskedQuote.toLowerCase();

  }, [response.content, maskedQuote]);

  const maskedValue = useMemo(() => {
    if(!response.content) return '';
    const test = response.content.split('').map(char => {
        if(char.match(/[a-z]/i)) {
            if(activeLetters.includes(char.toLowerCase())) {
                return char
            } else {
                return '*'
            }
        } else {
            return char;
        }
    });
    const test2 = test.join('');
    return test2;
}, [response.content, activeLetters]);

  useEffect(() => {
    setEndTime(Date.now());
    submit();
  }, [userGuessedQuote])

  const resetGame = () => {
    setActiveLetters([]);
    setErrorNumber(0);
    fetchQuote(store.dispatch);
  };

  const submit = () => {
      const payload = {
        quoteId: response._id,
        length: response.content.length,
        userName: user,
        uniqueCharacters: uniqueLetters,
        duration: (endTime as number) - startTime, 
        errors: errorNumber
      }

      submitScore(payload, store.dispatch);
  }

  const showHighScore = () => {
      fetchHighscore(store.dispatch);
  }

  return (
    <div className="page d-flex flex-column justify-center align-center">
      <h1 className="page-title">Hang the wise man</h1>
      <h2>Welcome {user}</h2>

      <HangmanDrawing errors={errorNumber}></HangmanDrawing>

      <ErrorCounter errorCount={errorNumber} />
      
      <div>{maskedValue}</div>

      <button onClick={resetGame}>Reset game</button>

      {userGuessedQuote && <button onClick={showHighScore}>See Highscore</button>}

      <VirtualKeyboard
        activateLetter={activateLetter}
        activeLetters={activeLetters}
        disableKeyboard={errorNumber === 6 || userGuessedQuote}
      ></VirtualKeyboard>
    </div>
  );
};
