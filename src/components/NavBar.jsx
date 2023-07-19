import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          SHOPLANE
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>



        <div className="nav-link buttons">
          <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>Login or Signup
          </NavLink>
          <NavLink to="/cart" className="btn ms-2">
            <i className="fa fa-shopping-cart me-1"></i>
          </NavLink>
        </div>

      </div>

    </nav>
  );
}
