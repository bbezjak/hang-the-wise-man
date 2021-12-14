import { FETCH_QUOTE, SAVE_USERNAME } from "../actions/actionTypes";
import { FETCH_HIGHSCORES } from './../actions/actionTypes';

const initialState = {
  response: {},
  // mode: "REGISTER",
  mode: "REGISTER",
  userName: "",
  startTime: null as number | null,
};

export default function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case SAVE_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    case FETCH_QUOTE:
      return {
        ...state,
        mode: "GAME",
        response: action.payload,
        startTime: Date.now(),
      };
    case FETCH_HIGHSCORES:
      return {
        ...state,
        mode: "HIGHSCORES",
        response: action.payload,
      };
    default:
      return state;
  }
}
