import { useSelector } from "react-redux";
import calculateHighscore from "./../helpers/calculateHighscore";
import { useMemo, useState } from "react";
import useWindowSize from "./../hooks/useScreenSize";
import { PageTitle } from "../components/PageTitle";

export const Highscores = () => {
  const highscores: any[] = useSelector((store: any) => store.response);

  const highscoresSorted = useMemo(() => {
    return highscores
      .map((highscore: any) => ({
        username: highscore.userName,
        length: highscore.length,
        uniqueCharacters: highscore.uniqueCharacters,
        duration: highscore.duration,
        errors: highscore.errors,
        score: calculateHighscore(highscore),
      }))
      .sort(
        (
          first: { username: any; score: number },
          second: { username: any; score: number }
        ) => second.score - first.score
      );
  }, [highscores]);

  const [headers, setHeaders] = useState({
    playerName: "Player name",
    wordLength: "Word length",
    uniqueCharacters: "Unique characters",
    gameTime: "Game time",
    errorNumber: "Error number",
    score: "Score",
  });

  const windowSize = useWindowSize();

  return (
    <>
      <PageTitle title="HighScores"></PageTitle>
      <div className="page highscores d-flex flex-column justify-center align-center">
        {windowSize.breakpoint === "xs" && (
          <div className="width-100">
            {highscoresSorted.map((highscore, index) => (
              <table
                className={`highscores-table table-small width-100 ${
                  index % 2 === 0 ? "even" : "odd"
                }`}
                key={highscore.username + index}
              >
                <tbody className="d-flex flex-column">
                  <tr className="d-flex justify-space-between">
                    <th>{headers.playerName}</th>
                    <td>{highscore.username}</td>
                  </tr>
                  <tr className="d-flex justify-space-between">
                    <th>{headers.wordLength}</th>
                    <td>{highscore.length}</td>
                  </tr>
                  <tr className="d-flex justify-space-between">
                    <th>{headers.uniqueCharacters}</th>
                    <td>{highscore.uniqueCharacters}</td>
                  </tr>
                  <tr className="d-flex justify-space-between">
                    <th>{headers.gameTime}</th>
                    <td>{highscore.duration}</td>
                  </tr>
                  <tr className="d-flex justify-space-between">
                    <th>{headers.errorNumber}</th>
                    <td>{highscore.errors}</td>
                  </tr>
                  <tr className="d-flex justify-space-between">
                    <th>{headers.score}</th>
                    <td className="font-weight-bold">{highscore.score}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        )}

        {windowSize.breakpoint !== "xs" && (
          <table className="highscores-table">
            <thead>
              <tr>
                {Object.values(headers).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {highscoresSorted.map((highscore, index) => (
                <tr
                  key={highscore.username + index}
                  className={index % 2 === 0 ? "even" : "odd"}
                >
                  <td>{highscore.username}</td>
                  <td className="text-center">{highscore.length}</td>
                  <td className="text-center">{highscore.uniqueCharacters}</td>
                  <td className="text-center">{highscore.duration}</td>
                  <td className="text-center">{highscore.errors}</td>
                  <td className="text-center font-weight-bold">
                    {highscore.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
