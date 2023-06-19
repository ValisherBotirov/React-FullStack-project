import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {useSelector} from "react-redux";

export default function Navbar() {
  const store = useSelector(state=> state.auth)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-dark ">
        <div className="container-fluid container">
          <Link to="/" className="navbar-list navbar-brand">
            Navbar
          </Link>

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarTogglerDemo02"
          >
            <div className="d-flex gap-3 ">
              <Link to="/" className="navbar-list">
                Home
              </Link>

            </div>
            <div className="d-flex gap-3 align-items-center">
              {
                store.loginIn ? <div className="d-flex gap-3 align-items-center">
                  <p className="navbar-list align-content-center m-0">{store.user.username}</p>
                  <div className="btn btn-danger">Log Out</div>
                </div>
                    :
                    <>
                      <Link to="/login" className="navbar-list">
                        Login
                      </Link>
                      <Link to="/register" className="navbar-list">
                        Register
                      </Link>
                    </>
              }

            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
