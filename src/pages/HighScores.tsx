import { useSelector } from "react-redux";

export const Highscores = () => {
  const highscores: any[] = useSelector((store: any) => store.response);

  return (
    <div className="page d-flex flex-column justify-center align-center">
      <h1 className="page-title">HighScores</h1>

      <table>
        <tr>
          <th>Player name</th>
          <th>Playes result</th>
        </tr>
        {highscores.map((highscore) => (
            <tr>
                <td>{highscore.name}</td>
                <td>{highscore.score}</td>
            </tr>
        ))}
      </table>
    </div>
  );
};
