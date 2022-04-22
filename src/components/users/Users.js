import { useContext } from "react";
import userContext from "../../context/user/userContext";
import { Alert } from "../layouts/Alert";
import { UserItem } from "./UserItem";
import { UserSearch } from "./UserSearch";

export const Users = () => {
  const { users } = useContext(userContext);

  return (
    <>
      <UserSearch />
      <Alert />
      <div className='row mt-2'>
        {users.map(eachUser => <UserItem key={eachUser.login} user={eachUser}></UserItem>)}
      </div>
    </>
  );
}