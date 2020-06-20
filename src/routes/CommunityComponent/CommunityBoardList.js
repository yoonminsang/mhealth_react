import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/CommunityBoardList.css";
class CommunityBoardList extends Component {
  render() {
    let lists = "";
    if (this.props.match.params.pageId === undefined) {
      lists = this.props.postList.map((list, index) => (
        <tr key={index}>
          <td className="title">
            <Link to={`/community/${this.props.match.params.category}/page/1/${list.id}`}>
              {list.title} [{list.comment}]
            </Link>
          </td>
          <td className="user_displayName">
            <Link to="/">{list.user_displayName}</Link>
          </td>
          <td className="time">{list.modified}</td>
          <td className="view">{list.view}</td>
        </tr>
      ));
    } else if (this.props.match.params.postId === undefined) {
      lists = this.props.postList.map((list, index) => (
        <tr key={index}>
          <td className="title">
            <Link to={`${this.props.match.url}/${list.id}`}>
              {list.title} [{list.comment}]
            </Link>
          </td>
          <td className="user_displayName">
            <Link to="/">{list.user_displayName}</Link>
          </td>
          <td className="time">{list.modified}</td>
          <td className="view">{list.view}</td>
        </tr>
      ));
    } else {
      lists = this.props.postList.map((list, index) => (
        <tr key={index}>
          <td className="title">
            <Link
              to={`/community/${this.props.match.params.category}/page/${this.props.match.params.pageId}/${list.id}`}
            >
              {list.title} [{list.comment}]
            </Link>
          </td>
          <td className="user_displayName">
            <Link to="/">{list.user_displayName}</Link>
          </td>
          <td className="time">{list.modified}</td>
          <td className="view">{list.view}</td>
        </tr>
      ));
    }

    let pagination = [];
    if (this.props.match.params.pageId === undefined) {
      pagination.push(<strong key="first">1</strong>);
      for (var i = 1; i < this.props.postCount / 10 && i < 10; i++) {
        pagination.push(
          <Link to={`${this.props.match.url}/page/${i + 1}`} key={i}>
            {i + 1}
          </Link>
        );
      }
      if (this.props.postCount > 100) {
        pagination.push(
          <Link to={`${this.props.match.url}/page/11`} key={"next"}>
            다음
          </Link>
        );
        pagination.push(
          <Link
            to={`${this.props.match.url}/page/${Math.ceil(this.props.postCount / 10)}`}
            key={"end"}
          >
            끝
          </Link>
        );
      }
    } else {
      const a = Math.floor((this.props.match.params.pageId - 1) / 10);
      if (a > 0) {
        pagination.push(
          <Link to={`/community/${this.props.match.params.category}/page/1`} key={"first"}>
            처음
          </Link>,
          <Link
            to={`/community/${this.props.match.params.category}/page/${a * 10 - 9}`}
            key="previous"
          >
            이전
          </Link>
        );
      }
      for (var i = a; i < this.props.postCount / 10 && i < a + 10; i++) {
        if (i + 1 != this.props.match.params.pageId) {
          pagination.push(
            <Link to={`/community/${this.props.match.params.category}/page/${i + 1}`} key={i}>
              {i + 1}
            </Link>
          );
        } else {
          pagination.push(<strong key={i}>{i + 1}</strong>);
        }
      }
      if (100 * (a + 1) < this.props.postCount) {
        pagination.push(
          <Link
            to={`/community/${this.props.match.params.category}/page/${a * 10 + 11}`}
            key={"next"}
          >
            다음
          </Link>,
          <Link
            to={`/community/${this.props.match.params.category}/page/${Math.ceil(
              this.props.postCount / 10
            )}`}
            key={"end"}
          >
            끝
          </Link>
        );
      }
    }

    return (
      <div className="board_list">
        <table width="100%" border="1" cellpading="0" cellSpacing="0" summary="List of Board">
          <caption style={{ display: "none" }}>게시판 목록</caption>
          <colgroup>
            <col style={{ width: "69%" }}></col>
            <col style={{ width: "12%" }}></col>
            <col style={{ width: "12%" }}></col>
            <col style={{ width: "7%" }}></col>
          </colgroup>
          <tbody>{lists}</tbody>
        </table>
        <div className="pagination">{pagination}</div>
      </div>
    );
  }
}

export default CommunityBoardList;
