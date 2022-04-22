import { REMOVE_ALERT, SET_ALERT } from "./types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        msg: action.msg
      }
    case REMOVE_ALERT:
      return {
        ...state,
        msg: null
      };
    default:
      return state;
  }
}

export default alertReducer;
