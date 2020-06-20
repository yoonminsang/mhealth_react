import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./stylesheets/CommunityMenu.css";
class CommunityMenu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="fl">
          <Link
            to="/community/all"
            className={this.props.category === "all" ? "bt blue" : "bt white"}
          >
            전체
          </Link>
          <Link
            to="/community/training"
            className={this.props.category === "training" ? "bt blue" : "bt white"}
          >
            트레이닝
          </Link>
          <Link
            to="/community/nutrition"
            className={this.props.category === "nutrition" ? "bt blue" : "bt white"}
          >
            영양학
          </Link>
        </div>
        <div className="fr">
          {this.props.logged ? (
            <Link to="/community/writing" className="bt blue">
              글쓰기
            </Link>
          ) : (
            <Link to="/auth/login" className="bt blue" onClick={() => alert("로그인이 필요합니다")}>
              글쓰기
            </Link>
          )}
        </div>
      </div>
    );
  }
}
export default CommunityMenu;
