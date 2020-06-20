import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stylesheets/CommunityComment.css";
class CommunityComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
    this.commentChange = this.commentChange.bind(this);
    this.commentSubmit = this.commentSubmit.bind(this);
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.match.params.postId !== this.props.match.params.postId) {
      this.setState({ comment: "" });
    }
  }

  commentChange(e) {
    this.setState({ comment: e.target.value });
  }

  commentSubmit(e) {
    e.preventDefault();
    const user_id = this.props.id;
    const post_id = this.props.post_id;
    const comment = this.state.comment;
    if (comment === "") {
      alert("댓글을 입력하세요");
      return false;
    }
    const self = this;
    axios({
      method: "post",
      url: "/server/community/comment/create_process",
      data: {
        user_id: user_id,
        post_id: post_id,
        comment: comment,
      },
    })
      .then(function (res) {
        if (res.data.create === true) {
          self.props.postUpdate();
          self.setState({ comment: "" });
        } else {
          alert("시스템 오류. 다시 시도해주세요");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="comment">
        <form onSubmit={this.commentSubmit}>
          <textarea
            value={this.state.comment}
            onChange={this.commentChange}
            maxLength="400"
          ></textarea>
          {this.props.logged ? (
            <input type="submit" value="댓글달기" className="bt white"></input>
          ) : (
            <Link
              to="/auth/login"
              className="bt white"
              onClick={() => alert("로그인이 필요합니다")}
            >
              댓글달기
            </Link>
          )}
        </form>
      </div>
    );
  }
}

export default CommunityComment;
