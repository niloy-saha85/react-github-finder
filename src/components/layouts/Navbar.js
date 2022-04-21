import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="!#">Github Finder</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarsExample03" >
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="!#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="!#">Disabled</a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
}