import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  bg-dark ">
        <div class="container-fluid container">
          <Link to="/" className="navbar-list navbar-brand">
            Navbar
          </Link>

          <div
            class="collapse navbar-collapse d-flex justify-content-between"
            id="navbarTogglerDemo02"
          >
            <div class="d-flex gap-3 ">
              <Link to="/" className="navbar-list">
                Home
              </Link>
              <Link to="/login" className="navbar-list">
                Login
              </Link>
              <Link to="/register" className="navbar-list">
                Register
              </Link>
            </div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
