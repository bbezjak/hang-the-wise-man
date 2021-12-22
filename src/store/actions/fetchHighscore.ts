import axios from "axios";
import { FETCH_HIGHSCORES } from "./actionTypes";

export async function fetchHighscore(dispatch: any) {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
  );
  
  dispatch({
    type: FETCH_HIGHSCORES,
    payload: data,
  });
}
