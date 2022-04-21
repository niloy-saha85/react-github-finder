import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getUserProfile } from "./UserService";

export const UserProfile = () => {
  const { login } = useParams('login');
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    (async () => {
      const profile = await getUserProfile(login);
      setUserProfile(profile);
    })();
  }, [login]);

  return (
    <div className="row mt-2">

      <div className="col-col-md-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={userProfile.avatar_url} alt="Github User" className="rounded-circle" width="150" />
              <div className="mt-3">
                <h4>{userProfile.name}</h4>
                <p className="text-secondary mb-1" style={{ maxWidth: '338px' }}>{userProfile.company}</p>
                <p className="text-muted font-size-sm">{userProfile.location}</p>

                <button type="button" className="btn btn-primary mr-1">
                  Repos <span className="badge badge-light">{userProfile.public_repos}</span>
                  <span className="sr-only">unread messages</span>
                </button>
                <button type="button" className="btn btn-info mr-1">
                  Gists <span className="badge badge-light">{userProfile.public_gists}</span>
                  <span className="sr-only">unread messages</span>
                </button>
                <button type="button" className="btn btn-success mr-1">
                  Followers <span className="badge badge-light">{userProfile.followers}</span>
                  <span className="sr-only">unread messages</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3"><h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary"> {userProfile.name}
              </div>
            </div><hr />
            <div className="row">
              <div className="col-sm-3"><h6 className="mb-0">Company</h6>
              </div>
              <div className="col-sm-9 text-secondary"> {userProfile.company}
              </div>
            </div><hr />
            <div className="row">
              <div className="col-sm-3"><h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary"> {userProfile.email}
              </div>
            </div><hr />
            <div className="row">
              <div className="col-sm-3"><h6 className="mb-0">Blog</h6>
              </div>
              <div className="col-sm-9 text-secondary"> {userProfile.blog}
              </div>
            </div><hr />
            <div className="row">
              <div className="col-sm-3"><h6 className="mb-0">Location</h6>
              </div>
              <div className="col-sm-9 text-secondary"> {userProfile.location}
              </div>
            </div><hr />
            <div className="row">
              <div className="col-sm-12">
                <Link className="btn btn-info " to={`/`}>Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}