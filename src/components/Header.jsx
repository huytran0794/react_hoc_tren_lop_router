import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="wrapper flex justify-center items-center">
            <NavLink to="/" className={"btn btn-primary"}>
              Home Page
            </NavLink>
            <NavLink to="/detail" className={"btn btn-primary"}>
              Detail Page
            </NavLink>
            <NavLink to="/login" className={"btn btn-primary"}>
              Login Page
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
