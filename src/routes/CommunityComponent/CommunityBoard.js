import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./stylesheets/CommunityBoard.css";
class CommunityBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommending: false,
    };
    this.deleteSubmit = this.deleteSubmit.bind(this);
    this.recommendSubmit = this.recommendSubmit.bind(this);
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.recommend !== this.props.recommend) {
      this.setState({ recommending: false });
    }
  }

  deleteSubmit(e) {
    e.preventDefault();
    const self = this;
    const category_id = this.props.post.category_id;
    const post_id = this.props.post.post_id;
    axios({
      method: "post",
      url: "/server/community/delete_process",
      data: {
        post_id: post_id,
        category_id: category_id,
      },
    })
      .then(function (res) {
        if (res.data.delete === true) {
          self.props.history.push(`/community/${self.props.match.params.category}`);
        } else {
          alert("시스템 오류. 다시 시도해주세요");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  recommendSubmit(e) {
    e.preventDefault();
    this.setState({ recommending: true });
    const self = this;
    const post_id = this.props.post.post_id;
    const user_id = this.props.id;
    const updown = this.props.recommend[0] ? "down" : "up";
    axios({
      method: "post",
      url: "/server/community/recommend_process",
      data: {
        post_id: post_id,
        user_id: user_id,
        updown: updown,
      },
    })
      .then(function (res) {
        if (res.data.recommend === true) {
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
    return (
      <article className="board">
        <div className="header">
          <h1 className="title">{this.props.post.title}</h1>
          <div className="fl">
            <span className="user_displayName">{this.props.post.user_displayName}</span>
            <span> | </span>
            <span className="created">{this.props.post.modified}</span>
          </div>
          <div className="fr">
            <span className="views">조회 : {this.props.post.view} </span>
            <span className="recommend">추천 : {this.props.post.recommend} </span>
            <span className="comment">댓글 : {this.props.post.comment}</span>
          </div>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: this.props.post.content }}
        ></div>

        <div className="board_recommend">
          {this.props.logged ? (
            <form onSubmit={this.recommendSubmit}>
              {this.props.recommend[0] ? (
                <input
                  type="submit"
                  className="bt2 gray"
                  value={"추천 " + this.props.post.recommend}
                  disabled={this.state.recommending}
                ></input>
              ) : (
                <input
                  type="submit"
                  className="bt2 blue"
                  value={"추천 " + this.props.post.recommend}
                  disabled={this.state.recommending}
                ></input>
              )}
            </form>
          ) : (
            <Link
              to="/auth/login"
              className="bt2 blue"
              onClick={() => alert("로그인이 필요합니다")}
            >
              추천 {this.props.post.recommend}
            </Link>
          )}
        </div>

        <div className="board_button">
          <div className="fl">
            {this.props.logged ? (
              <Link to="/community/writing" className="bt blue">
                글쓰기
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="bt blue"
                onClick={() => alert("로그인이 필요합니다")}
              >
                글쓰기
              </Link>
            )}
          </div>
          {this.props.displayName === this.props.post.user_displayName && (
            <div className="fr">
              <form onSubmit={this.deleteSubmit}>
                <input type="submit" value="삭제" className="bt gray"></input>
              </form>
              <input type="button" value="수정" className="bt gray"></input>
            </div>
          )}
        </div>
      </article>
    );
  }
}

export default CommunityBoard;
