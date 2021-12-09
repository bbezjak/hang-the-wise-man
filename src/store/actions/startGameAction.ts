import { SAVE_USERNAME } from "./actionTypes";

export function startNewGame(dispatch: any, playerName: string) {
  dispatch({
    type: SAVE_USERNAME,
    payload: playerName,
  });
}
