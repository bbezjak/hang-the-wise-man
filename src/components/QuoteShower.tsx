import { useSelector } from "react-redux";

interface QuoteShowerProps {
  quote: string;
  maskedQuote: string;
  activeLetters: string[];
  errorCount: number;
}

export const QuoteShower = ({
  quote,
  maskedQuote,
  activeLetters,
  errorCount,
}: QuoteShowerProps) => {

  const maxErrorNumber: number = useSelector(
    (state: any) => state.maxErrorNumber
  );

  const calculateColor = (letter: string): string => {
    return activeLetters.includes(letter) ? 'entered' : "not-entered"
  }

  return (
    <>
      {errorCount < maxErrorNumber && (
        <div className="quote font-weight-bold">{maskedQuote}</div>
      )}

      {errorCount === maxErrorNumber && (
        <div className="quote font-weight-bold">{quote.split("").map((letter, index) => <span key={`${letter}${index}_error`} className={calculateColor(letter)}>{letter}</span>)}</div>
      )}
    </>
  );
};
