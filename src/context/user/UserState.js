import { useEffect, useReducer } from "react";
import UserReducer from "./userReducer";
import UserContext from "./userContext";
import { listUsers, searchUsers as searchService } from "../../components/users/UserService";
import { CLEAR_USERS, LOAD_USERS } from "./types";



export const UserState = ({ children }) => {
  const initialState = {
    users: [],
    user: {}
  };

  // Load the initial list of users
  useEffect(() => {
    (async () => {
      const users = await listUsers();
      dispatch({ type: LOAD_USERS, payload: users });
    })();
  }, []);

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { users, user } = state;

  const searchUsers = async (searchTerm) => {
    const users = await searchService(searchTerm);
    dispatch({ type: LOAD_USERS, payload: users });
  }

  const clearSearch = async () => {
    dispatch({ type: CLEAR_USERS, payload: [] });
    const users = await listUsers();
    dispatch({ type: LOAD_USERS, payload: users });
  }

  return <UserContext.Provider
    value={{ users, user, searchUsers, clearSearch }}
  >
    {children}
  </UserContext.Provider>
}

export default UserState;
