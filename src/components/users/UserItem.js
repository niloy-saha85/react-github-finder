import './UserItem.css';

export const UserItem = ({ user: { login, html_url, avatar_url,  } }) => {
  return (
    <div className="col-md-3 col-sm-6 item">
      <div className="card">
        <img className="card-img-top" src={avatar_url} alt='github user' />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <a href={html_url} className="btn btn-primary" target="_blank">View Profile</a>
        </div>
      </div>
    </div>
  );
};