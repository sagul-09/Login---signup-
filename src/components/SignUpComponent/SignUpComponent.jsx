import React, { Component } from "react";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  firstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );

    fetch("http://localhost:6969/api/v1/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <form onSubmit={this.formSubmitHandler}>
        <h3>Sign up</h3>
        <hr></hr>
        <div className="mb-3">
          <label>First Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your firstname"
            value={firstName}
            onChange={this.firstNameHandler}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
            value={lastName}
            onChange={this.lastNameHandler}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your mail"
            value={email}
            onChange={this.emailHandler}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={this.passwordHandler}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already Registered, <a href="/login">Sign-in here?</a>
        </p>
      </form>
    );
  }
}

export default SignUpComponent;
