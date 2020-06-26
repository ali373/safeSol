import React, { Component } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "./footer";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //this state object contains any data that this component needs
    //Linkutomatic refactoring of code in vs code in win?
  }
  //how to change toggler color...?
  render() {
    return (
      <div className="mainWrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-light mainWrapper ">
          <NavLink class="navbar-brand" className="logofontcolor" to="/">
            <strong>
              Safe<span style={{ color: "#f7941d" }}>Solutions</span>
              Int.
            </strong>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
              <li class="nav-item active">
                <NavLink class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="/"
                >
                  About us
                </NavLink>
                <div class="dropdown-menu dropdownbckgrnd">
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Company
                  </NavLink>
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Team
                  </NavLink>
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Approvals
                  </NavLink>
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Policies
                  </NavLink>
                </div>
              </li>

              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="/"
                >
                  Services
                </NavLink>
                <div class="dropdown-menu dropdownbckgrnd">
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Consultancy
                  </NavLink>
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Training
                  </NavLink>
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Audit
                  </NavLink>
                </div>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Schedule
                </NavLink>
              </li>

              <li class="nav-item dropdown ">
                <NavLink
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="/"
                >
                  Verification
                </NavLink>
                <div class="dropdown-menu dropdownbckgrnd">
                  <NavLink class="dropdown-item navDropdownLinks" to="/">
                    Certificate Verification
                  </NavLink>
                </div>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
