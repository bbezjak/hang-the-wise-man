import axios from "axios";
import { FETCH_QUOTE } from "./actionTypes";

export async function fetchQuote(dispatch: any) {
  console.log("fetchQuote");
  const { data } = await axios.get("http://api.quotable.io/random");

  dispatch({
    type: FETCH_QUOTE,
    payload: data,
  });
}
