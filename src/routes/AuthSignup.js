import React, { Component } from "react";
import axios from "axios";
import "./stylesheets/AuthSignup.css";
class AuthSignup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", password2: "", displayName: "" };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.password2Change = this.password2Change.bind(this);
    this.displayNameChange = this.displayNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  password2Change(e) {
    this.setState({ password2: e.target.value });
  }

  displayNameChange(e) {
    this.setState({ displayName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const password2 = this.state.password2;
    const displayName = this.state.displayName;
    if (email === "") {
      alert("아이디를 입력하세요");
      return false;
    } else if (password === "") {
      alert("비밀번호를 입력하세요");
      return false;
    } else if (password !== password2) {
      alert("두 비밀번호가 일치하지 않습니다");
      return false;
    } else if (displayName === "") {
      alert("닉네임을 입력하세요");
      return false;
    }
    const self = this;
    axios({
      method: "post",
      url: "/server/auth/register_process",
      data: {
        email: email,
        password: password,
        displayName: displayName,
      },
    })
      .then(function (res) {
        if (res.data.displayName === displayName) {
          alert(displayName + "님 회원가입을 축하합니다");
          self.props.onLogin(res);
          self.props.history.push("/");
        } else {
          alert(res.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    if (this.props.logged === true) {
      this.props.history.goBack();
    }
    return (
      <div className="signup_form">
        <form onSubmit={this.handleSubmit}>
          <h2>회원가입</h2>
          <div className="email">
            <input
              type="text"
              className="input"
              placeholder="email를 입력하세요."
              onChange={this.emailChange}
              maxLength="40"
            ></input>
          </div>
          <div className="password">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력하세요."
              onChange={this.passwordChange}
              maxLength="20"
            ></input>
          </div>
          <div className="password2">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력하세요"
              onChange={this.password2Change}
              maxLength="20"
            ></input>
          </div>
          <div className="displayName">
            <input
              type="text"
              className="input"
              placeholder="닉네임을 입력하세요"
              onChange={this.displayNameChange}
              maxLength="10"
            ></input>
          </div>
          <input type="submit" value="회원가입" className="btn_login"></input>
        </form>
      </div>
    );
  }
}

export default AuthSignup;
