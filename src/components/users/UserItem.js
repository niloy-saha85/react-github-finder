import { Link } from 'react-router-dom';
// import './UserItem.css';

export const UserItem = ({ user: { login, html_url, avatar_url, } }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-2">
      <div className="card">
        <img className="card-img-top" src={avatar_url} alt='github user' />
        <div className="card-body">
          <h5 className="card-title text-truncate">{login}</h5>
          <p className="card-text text-truncate" title={html_url}>{html_url}</p>
          <Link to={`user/${login}`} className="btn btn-primary">View Profile</Link>
        </div>
      </div>
    </div>
  );
};