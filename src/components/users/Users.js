import { useEffect, useState } from "react";
import { Alert } from "../layouts/Alert";
import { UserItem } from "./UserItem";
import { UserSearch } from "./UserSearch";
import { listUsers, searchUsers } from "./UserService";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, []);

  const loadUsers = async () => {
    const users = await listUsers();
    setUsers(users);
  }

  const onSearch = async (e, searchTerm = '') => {
    e.preventDefault();
    if (searchTerm === '') {
      setMsg('Please enter user name to start search!');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
      return false;
    }
    console.log('searchTerm: ', searchTerm);
    const users = await searchUsers(searchTerm);
    setUsers(users);
  }

  const clearUsers = async () => {
    setUsers([]);
    await loadUsers();
  }

  return (
    <>
      <UserSearch onSearch={onSearch} clearUsers={clearUsers} />
      {msg && <Alert msg={msg}></Alert>}
      <div className='row mt-2'>
        {users.map(eachUser => <UserItem key={eachUser.login} user={eachUser}></UserItem>)}
      </div>
    </>
  );
}