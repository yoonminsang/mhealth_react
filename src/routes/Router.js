import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Main,
  AuthLogin,
  AuthSignup,
  CommunityWriting,
  CommunityPage,
  CommunityPost,
  ex,
  Exercise,
  ExerciseLegs,
  ExerciseArms,
  ExerciseBack,
  ExerciseChest,
  ExerciseCore,
  ExerciseShoulder,
  Supplements,
  SupplementsProtein,
  SupplementsRemainder,
} from "./index";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />

        <Route
          exact
          path="/auth/login"
          render={(props) => (
            <AuthLogin
              history={props.history}
              logged={this.props.logged}
              onLogin={this.props.onLogin}
            />
          )}
        />

        <Route
          exact
          path="/auth/signup"
          render={(props) => (
            <AuthSignup
              history={props.history}
              logged={this.props.logged}
              onLogin={this.props.onLogin}
            />
          )}
        />

        <Route
          exact
          path="/community/writing"
          render={(props) => (
            <CommunityWriting
              history={props.history}
              logged={this.props.logged}
              id={this.props.id}
            />
          )}
        />

        <Route
          path="/community/:category/page/:pageId/:postId"
          render={(props) => (
            <CommunityPost
              history={props.history}
              match={props.match}
              logged={this.props.logged}
              id={this.props.id}
              displayName={this.props.displayName}
            />
          )}
        />
        <Route
          path="/community/:category/page/:pageId"
          render={(props) => (
            <CommunityPage history={props.history} match={props.match} logged={this.props.logged} />
          )}
        />
        <Route
          exact
          path="/community/:category"
          render={(props) => (
            <CommunityPage history={props.history} match={props.match} logged={this.props.logged} />
          )}
        />

        <Route exact path="/ex" component={ex}></Route>
        <Route exact path="/exercise" component={Exercise}></Route>
        <Route exact path="/exercise/legs" component={ExerciseLegs}></Route>
        <Route exact path="/exercise/arms" component={ExerciseArms}></Route>
        <Route exact path="/exercise/back" component={ExerciseBack}></Route>
        <Route exact path="/exercise/chest" component={ExerciseChest}></Route>
        <Route exact path="/exercise/core" component={ExerciseCore}></Route>
        <Route exact path="/exercise/shoulder" component={ExerciseShoulder}></Route>
        <Route exact path="/supplements" component={Supplements}></Route>
        <Route exact path="/supplements/protein" component={SupplementsProtein}></Route>
        <Route exact path="/supplements/remainder" component={SupplementsRemainder}></Route>
      </Switch>
    );
  }
}

export default Router;
