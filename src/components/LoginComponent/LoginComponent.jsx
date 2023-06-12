import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

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

    console.log(this.state.email, this.state.password);

    fetch("http://localhost:6969/api/v1/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'OK') {
          alert('login successful')
        }
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.formSubmitHandler}>
        <h3>Login</h3>
        <hr />
        <div className="mb-3">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
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
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          forgot <a href="#">Password?</a>
        </p>
        <p className="forgot-password text-right">
          New user? <a href="/signup">sign-up here?</a>
        </p>
      </form>
    );
  }
}

export default LoginComponent;
