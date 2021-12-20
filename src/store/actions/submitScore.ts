import axios from "axios";

export async function submitScore(payload: any, dispatch: any) {
    const { data } = await axios.post("https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores", payload);
}