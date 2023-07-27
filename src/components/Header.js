import React from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./GetEvents";

const Header = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Ticketmaster
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/concerts">
              Concerts
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/sports">
              Sports
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/artstheater">
              Arts & Theater
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/family">
                Family
              </NavLink>
              <NavLink className="dropdown-item" to="/deals">
                Deals
              </NavLink>
              <NavLink className="dropdown-item" to="/entertainmentguides">
                Entertainment Guides
              </NavLink>
            </div>
          </li>
          <div className="divider"></div>
          <NavLink className="nav-link" to="/signin">
            Sign In
          </NavLink>
          <NavLink className="nav-link" to="/sell">
            Sell
          </NavLink>
          <NavLink className="nav-link" to="/giftcards">
            Gift Cards
          </NavLink>
          <NavLink className="nav-link" to="/help">
            Help
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
