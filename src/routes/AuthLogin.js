import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./stylesheets/AuthLogin.css";
class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  goHome = () => {
    this.props.history.push("/");
  };

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    if (email === "") {
      alert("이메일을 입력하세요");
      return false;
    }
    if (password === "") {
      alert("비밀번호를 입력하세요");
      return false;
    }
    const self = this;
    axios({
      method: "post",
      url: "/server/auth/login_process",
      data: {
        email: email,
        password: password,
      },
    })
      .then(function (res) {
        if (res.data.login === true) {
          self.props.onLogin(res);
          self.goHome();
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
      <div className="login_form">
        <form onSubmit={this.handleSubmit}>
          <h2>로그인</h2>
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
          <input type="submit" value="로그인" className="btn_login"></input>
        </form>

        <p className="loginMenu">
          <Link to="/auth/findId">아이디 찾기</Link>
          <span>|</span>
          <Link to="/auth/findPassword">비밀번호 찾기</Link>
          <span>|</span>
          <Link to="/auth/signup">회원가입</Link>
        </p>
      </div>
    );
  }
}

export default AuthLogin;
