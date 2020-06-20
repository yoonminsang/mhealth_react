import React, { Component } from "react";
import axios from "axios";
import "./stylesheets/Community.css";
import { CommunityMenu, CommunityBoardList } from "./CommunityComponent";

class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      postList: [],
      postCount: 0,
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
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidUpdate(preProps, preState) {
    const self = this;
    if (preProps.match.params.category !== this.props.match.params.category) {
      window.scrollTo(0, 0);
      this.setState({ category: this.props.match.params.category });
      axios
        .get("/server" + this.props.match.url)
        .then(function (res) {
          self.setState({
            postList: res.data.postList,
            postCount: res.data.postCount[0].postCount,
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    } else if (preProps.match.params.pageId !== this.props.match.params.pageId) {
      window.scrollTo(0, 0);
      axios
        .get("/server" + this.props.match.url)
        .then(function (res) {
          self.setState({
            postList: res.data.postList,
            postCount: res.data.postCount[0].postCount,
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="community">
        <CommunityMenu logged={this.props.logged} category={this.state.category}></CommunityMenu>
        <CommunityBoardList
          match={this.props.match}
          postList={this.state.postList}
          postCount={this.state.postCount}
        ></CommunityBoardList>
      </div>
    );
  }
}

export default CommunityPage;
