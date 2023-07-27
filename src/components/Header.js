import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "./GetEvents";

const Header = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Ticketmaster
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Concerts <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sports <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Arts & Theater <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Family
                </a>
                <a className="dropdown-item" href="#">
                  Deals
                </a>
                <a className="dropdown-item" href="#">
                  Entertainment Guides
                </a>
              </div>
            </li>
            <div className="divider"></div>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sign In <span className="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sell <span className="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Gift Cards <span className="sr-only">(current)</span>
              </a>
            </li>{" "}
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Help <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Header;
