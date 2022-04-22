import { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import UserContext from "../../context/user/userContext";

export const UserSearch = () => {

  const { searchUsers, clearSearch } = useContext(UserContext);
  const { setAlert } = useContext(AlertContext)

  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const onSearch = async (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      setAlert('Please enter user name to start search!');
      return false;
    }
    console.log('searchTerm: ', searchTerm);
    await searchUsers(searchTerm);
  }

  const handleClearSearch = async () => {
    setSearchTerm('');
    clearSearch();
  }

  return (
    <div className="row mt-2">
      <div className="col-xs-12 mx-auto">
        <form className="form-inline" onSubmit={onSearch}>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control" id="searchUser" value={searchTerm} placeholder="Search Users..." onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Search</button>
          {searchTerm && <button type="button" className="btn btn-primary mb-2 ml-2" onClick={handleClearSearch}>Clear</button>}
        </form>
      </div>
    </div>
  );
}