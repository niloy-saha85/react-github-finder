import { useState } from "react";

export const UserSearch = ({ onSearch, clearUsers }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const clearSearch = () => {
    setSearchTerm('');
    clearUsers();
  }

  return (
    <div className="row mt-2">
      <div className="col-xs-12 mx-auto">
        <form className="form-inline" onSubmit={(e) => onSearch(e, searchTerm)}>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control" id="searchUser" value={searchTerm} placeholder="Search Users..." onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Search</button>
          {searchTerm && <button type="button" className="btn btn-primary mb-2 ml-2" onClick={clearSearch}>Clear</button>}
        </form>

      </div>
    </div>
  );
}