import { CLEAR_USERS, LOAD_USERS } from "./types";

export const userReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.payload };
    case CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default userReducer;
