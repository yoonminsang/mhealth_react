import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Header.css";
class Header extends Component {
  render() {
    const { logged, onLogout, displayName } = this.props;
    return (
      <header id="header">
        <div className="head">
          <h1>
            <Link to="/">M's health</Link>
          </h1>
          <div className="logged">
            {logged ? (
              <Link to="#" onClick={onLogout}>
                <div className="displayName">{displayName}</div>
                로그아웃
              </Link>
            ) : (
              <Link to="/auth/login">로그인/회원가입</Link>
            )}
          </div>
          <div className="menu">
            <nav>
              <ul className="header_menu_items">
                <li className="header_menu_item">
                  <Link to="/community/all">커뮤니티</Link>
                  <ul className="header_submenu_items">
                    <li className="header_submenu_item">
                      <Link to="/community/training">트레이닝</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/community/nutrition">영양학</Link>
                    </li>
                  </ul>
                </li>

                <li className="header_menu_item">
                  <Link to="/exercise">운동</Link>
                  <ul className="header_submenu_items">
                    <li className="header_submenu_item">
                      <Link to="/exercise/legs">다리</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/exercise/chest">가슴</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/exercise/back">등</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/exercise/shoulder">어깨</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/exercise/core">코어</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/exercise/arms">팔</Link>
                    </li>
                  </ul>
                </li>

                <li className="header_menu_item">
                  <Link to="/supplements">보충제</Link>
                  <ul className="header_submenu_items">
                    <li className="header_submenu_item">
                      <Link to="/supplements/protein">단백질</Link>
                    </li>
                    <li className="header_submenu_item">
                      <Link to="/supplements/remainder">기타</Link>
                    </li>
                  </ul>
                </li>

                <li className="header_menu_item">
                  <Link to="/marcket">마켓</Link>
                </li>
              </ul>
            </nav>
            {/* <Link to="dd" className="search">
              <img
                src="https://tistory1.daumcdn.net/tistory/2766937/skin/images/search1.png"
                alt="검색"
              ></img>
            </Link> */}
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
