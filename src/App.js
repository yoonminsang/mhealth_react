import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import "./App.css";
import { Header, Footer } from "./common";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      id: null,
      displayName: null,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  onLogin = (res) => {
    this.setState({
      logged: true,
      id: res.data.id,
      displayName: res.data.displayName,
    });
  };

  onLogout = () => {
    const self = this;
    axios
      .get("/server/auth/logout")
      .then(function (res) {
        if (res.data.logout === true) {
          self.setState({
            logged: false,
            id: null,
            displayName: null,
          });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  componentDidMount() {
    const self = this;
    axios
      .get("/server")
      .then(function (res) {
        if (res.data.login === true) {
          self.setState({ logged: true, id: res.data.id, displayName: res.data.displayName });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    const { logged, onLogin, onLogout, displayName, id } = this.state;
    return (
      <BrowserRouter>
        <Header logged={logged} onLogout={onLogout} displayName={displayName} />
        <Router logged={logged} onLogin={onLogin} displayName={displayName} id={id} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
