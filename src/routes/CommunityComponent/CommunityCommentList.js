import React, { Component } from "react";
import axios from "axios";
import "./stylesheets/CommunityCommentList.css";
class CommunityCommentList extends Component {
  constructor(props) {
    super(props);
    this.state = { submit_comment_id: "" };
    this.deleteSubmit = this.deleteSubmit.bind(this);
    this.submitCommentIdChange = this.submitCommentIdChange.bind(this);
  }

  submitCommentIdChange(e) {
    this.setState({ submit_comment_id: e.target.parentNode.childNodes[0].value });
  }

  deleteSubmit(e) {
    e.preventDefault();
    const post_id = this.props.post_id;
    const id = this.state.submit_comment_id;
    const self = this;
    axios({
      method: "post",
      url: "/server/community/comment/delete_process",
      data: {
        post_id: post_id,
        id: id,
      },
    })
      .then(function (res) {
        if (res.data.delete === true) {
          // window.location.reload();
          // self.props.history.push(`${self.props.history.location.pathname}/#`);
          self.props.postUpdate();
        } else {
          alert("시스템 오류. 다시 시도해주세요");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    let lists = "";
    lists = this.props.comments.map((list, index) => (
      <tr key={index}>
        <td className="user_displayName">{list.user_displayName}</td>
        <td className="comment">{list.comment}</td>
        <td className="time">
          {list.modified}
          {this.props.displayName === list.user_displayName && (
            <form onSubmit={this.deleteSubmit}>
              <input type="hidden" value={list.id}></input>
              <input type="submit" value="삭제" onClick={this.submitCommentIdChange}></input>
            </form>
          )}
        </td>
      </tr>
    ));

    return (
      <div className="comment_list">
        <div className="header">
          <h2>
            댓글 <span>{this.props.comments.length}</span>
          </h2>
        </div>
        <table width="100%" border="1" cellpading="0" cellSpacing="0" summary="List of Comments">
          <caption style={{ display: "none" }}>댓글 목록</caption>
          <colgroup>
            <col style={{ width: "15%" }}></col>
            <col style={{ width: "65%" }}></col>
            <col style={{ width: "20%" }}></col>
          </colgroup>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}

export default CommunityCommentList;
