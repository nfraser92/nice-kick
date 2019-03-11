import React, { Component } from "react"
import { Route } from "react-router-dom"
import SessionManager from "../modules/SessionManager"
import UserList from "./users/UserList";
import UserManager from "../modules/UserManager"
import SessionList from "./sessions/SessionList";
import AddSessionForm from "./sessions/SessionAddForm";

class ApplicationViews extends Component {
  state = {
    users: [],
    sessions: []
  }

  addSession = newSession => {
    return SessionManager.post(newSession)
    .then(() => SessionManager.sortSessions())
    .then(sessions => this.setState({sessions: sessions}))
  }

  componentDidMount() {
    SessionManager.getAll().then(sessions => this.setState({sessions: sessions}))

    UserManager.getAll().then(users => this.setState({users: users}))

    

  }
  render() {

    return <React.Fragment>
      <Route exact path="/users" render={props => {
        return (
          <UserList users={this.state.users}
          {...props}  />
          );
        }} />

      <Route exact path="/sessions" render={props => {
        return (
          <SessionList sessions={this.state.sessions}
                       {...props}  />
          );
        }} />

<Route path="/sessions/new" render={(props) => {
                    return <AddSessionForm {...props}
                                addSession={this.addSession}
                                sessions={this.state.sessions} />
                }} />
    </React.Fragment>
  }
}

export default ApplicationViews
