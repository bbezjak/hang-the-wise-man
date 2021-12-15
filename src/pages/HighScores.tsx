import { useSelector } from "react-redux";
import calculateHighscore from "./../helpers/calculateHighscore"
import { useMemo } from 'react';

export const Highscores = () => {
  const highscores: any[] = useSelector((store: any) => store.response);

  const highscoresSorted = useMemo(() => {
    return highscores
    .map((highscore: any) => (
      {
        username: highscore.userName,
        length: highscore.length,
        uniqueCharacters: highscore.uniqueCharacters,
        duration: highscore.duration,
        errors: highscore.errors,
        score: calculateHighscore(highscore)
      }))
    .sort((first: { username: any; score: number; }, second: { username: any; score: number; }) => second.score - first.score)
  }, [highscores])

  return (
    <>
    <h1 className="page-title">HighScores</h1>
    <div className="page d-flex flex-column justify-center align-center">
      <table className="highscores-table">
        <tr>
          <th>Player name</th>
          <th>Word lenght</th>
          <th>Unique characters</th>
          <th>Game time</th>
          <th>Error number</th>
          <th>Score</th>
        </tr>
        {highscoresSorted.map((highscore, index) => (
            <tr key={index}>
                <td>{highscore.username}</td>
                <td>{highscore.length}</td>
                <td>{highscore.uniqueCharacters}</td>
                <td>{highscore.duration}</td>
                <td>{highscore.errors}</td>
                <td className="font-weight-bold">{highscore.score}</td>
            </tr>
        ))}
      </table>
    </div>
    </>
  );
};
