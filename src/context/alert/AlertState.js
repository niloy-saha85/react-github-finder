import { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { REMOVE_ALERT, SET_ALERT } from './types';

const AlertState = ({ children }) => {

  const initialState = {
    msg: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const { msg } = state;

  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, msg });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  }


  return <AlertContext.Provider
    value={{ msg, setAlert }}
  >
    {children}
  </AlertContext.Provider>
};

export default AlertState;
