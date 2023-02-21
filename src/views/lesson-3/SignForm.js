import React from "react";

class SignForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="form-title mb-5">
          <h2>Sign up for an account</h2>
          <p>
            Signing up for an account is free and easy.Fill out the form below
            to get started.JavaScript is required to continue
          </p>
        </div>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input type="text" className="form-control" id="passwordConfirm" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <p className="terms-of-use mb-4">
            By clicking the "Sign Up" button below,I certify that I have read
            and agree ti the TMDB terms of use and privacy policy.
          </p>
          <div>
            <button type="submit" className="btn btn-sign-up me-3">
              Sign Up
            </button>
            <button type="button" className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignForm;
