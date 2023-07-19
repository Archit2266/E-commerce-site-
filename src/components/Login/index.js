import React from 'react'

export default function index() {
  return (
    <>
      <h1 className="display-6 text-center m-4">Login</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"

            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
