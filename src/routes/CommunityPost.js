import React, { Component } from "react";
import axios from "axios";
import "./stylesheets/Community.css";
import {
  CommunityMenu,
  CommunityBoardList,
  CommunityBoard,
  CommunityComment,
  CommunityCommentList,
} from "./CommunityComponent";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      postList: [],
      postCount: 0,
      post: [],
      comments: [],
      recommend: [],
      postUpdate: this.postUpdate,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ category: this.props.match.params.category });
    const self = this;
    axios
      .get("/server" + this.props.match.url)
      .then(function (res) {
        self.setState({
          postList: res.data.postList,
          postCount: res.data.postCount[0].postCount,
          post: res.data.post[0],
          comments: res.data.comments,
          recommend: res.data.recommend,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidUpdate(preProps, preState) {
    const self = this;
    if (preProps.match.params.postId !== this.props.match.params.postId) {
      window.scrollTo(0, 0);
      axios
        .get("/server" + this.props.match.url)
        .then(function (res) {
          self.setState({
            post: res.data.post[0],
            comments: res.data.comments,
            recommend: res.data.recommend,
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  postUpdate = () => {
    const self = this;
    axios
      .get("/server" + this.props.match.url)
      .then(function (res) {
        self.setState({
          postList: res.data.postList,
          post: res.data.post[0],
          comments: res.data.comments,
          recommend: res.data.recommend,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="community">
        <CommunityMenu logged={this.props.logged} category={this.state.category}></CommunityMenu>
        <CommunityBoard
          history={this.props.history}
          match={this.props.match}
          id={this.props.id}
          post={this.state.post}
          logged={this.props.logged}
          displayName={this.props.displayName}
          recommend={this.state.recommend}
          postUpdate={this.state.postUpdate}
        ></CommunityBoard>
        <CommunityCommentList
          post_id={this.state.post.post_id}
          comments={this.state.comments}
          displayName={this.props.displayName}
          postUpdate={this.state.postUpdate}
        ></CommunityCommentList>
        <CommunityComment
          logged={this.props.logged}
          post_id={this.state.post.post_id}
          id={this.props.id}
          postUpdate={this.state.postUpdate}
          match={this.props.match}
        ></CommunityComment>
        <CommunityBoardList
          match={this.props.match}
          postList={this.state.postList}
          postCount={this.state.postCount}
        ></CommunityBoardList>
      </div>
    );
  }
}

export default Community;
