import { useSelector } from "react-redux";
import calculateHighscore from "./../helpers/calculateHighscore"
import { useMemo } from 'react';

export const Highscores = () => {
  const highscores: any[] = useSelector((store: any) => store.response);

  const highscoresSorted = useMemo(() => {
    return highscores
    .map((highscore: any) => ({username: highscore.userName, score: calculateHighscore(highscore)}))
    .sort((first: { username: any; score: number; }, second: { username: any; score: number; }) => second.score - first.score)
  }, [highscores])

  return (
    <div className="page d-flex flex-column justify-center align-center">
      <h1 className="page-title">HighScores</h1>

      <table>
        <tr>
          <th>Player name</th>
          <th>Playes result</th>
        </tr>
        {highscoresSorted.map((highscore, index) => (
            <tr key={index}>
                <td>{highscore.username}</td>
                <td>{highscore.score}</td>
            </tr>
        ))}
      </table>
    </div>
  );
};
