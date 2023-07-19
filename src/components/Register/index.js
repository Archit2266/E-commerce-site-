import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function index() {
  return (
    <>
      <h1 className="display-6 text-center m-4">Sign up</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div class="mb-3">
            <label for="First Name" class="form-label"></label>
            <input type="text" class="form-control" id="First NAme" placeholder="First NAme" />
          </div>
          <div class="mb-3">
            <label for="Last Name" class="form-label"></label>
            <input type="text" class="form-control" id="Last Name" placeholder="Last Name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"></label>
            <input type="text" class="form-control" id="email" placeholder="E-mail" />
          </div>
          <div class="mb-3">
            <label for="passord" class="form-label"></label>
            <input type="password" class="form-control" id="password" placeholder="Password" />
          </div>

          <button type="submit" class="btn btn-primary">Sign in</button>

        </form>
        <NavLink to="/login" className="btn btn-outline-dark mt-3">
          Already a user? Click Here
        </NavLink>
      </div>
    </>
  );
}
