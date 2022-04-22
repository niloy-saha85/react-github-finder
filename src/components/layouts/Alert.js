import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  const { msg } = useContext(AlertContext);


  return msg && <div className="alert alert-danger" role="alert"> {msg} </div>

}