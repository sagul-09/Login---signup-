import React, { Component } from "react";

class UserDataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:6969/api/v1/user-data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          userData: data.data,
        });
      });
  }

  render() {
    return (
      <div>
        Name: <h1>{this.state.userData.firstName}</h1>
        Email: <h1>{this.state.userData.email}</h1>
      </div>
    );
  }
}

export default UserDataComponent;
