import React, { Component } from "react"
import { Route } from "react-router-dom"
import SessionManager from "../modules/SessionManager"
import UserList from "./users/UserList";
import UserManager from "../modules/UserManager"
import SessionList from "./sessions/SessionList";
import AddSessionForm from "./sessions/SessionAddForm";
import Login from "./auth/Login"
import SessionEditForm from "./sessions/SessionEditForm";

class ApplicationViews extends Component {
  state = {
    users: [],
    sessions: [],
    activeUser: {}
  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  addSession = newSession => {
    return SessionManager.post(newSession)
    .then(() => SessionManager.sortSessions())
    .then(sessions => this.setState({sessions: sessions}))
  }

  deleteSession = (id) => {
    return SessionManager.deleteAndList(id)
    .then(sessions => this.setState({ sessions: sessions}))
  }

  editSession = editedSession => {
    return SessionManager.put(editedSession)
      .then(() => SessionManager.getAll())
      .then(sessions => this.setState({ sessions: sessions }));
  };

  componentDidMount() {
    SessionManager.sortSessions(this.props.activeUser.id).then(sessions => this.setState({sessions: sessions}))

    UserManager.getAll().then(users => this.setState({users: users}))

  }
  render() {
    return (
      <React.Fragment>

      <Route path="/login" component={Login} />

      <Route exact path="/users" render={props => {
        if (this.isAuthenticated()) {
          return <UserList {...props}
                           activeUser={this.state.activeUser}
                           users={this.state.users} />
        }}
      } />

      <Route exact path="/sessions" render={props => {
        if (this.isAuthenticated()) {
          return <SessionList {...props}
                              activeUser={this.state.activeUser}
                              deleteSession={this.deleteSession}
                              sessions={this.state.sessions} />
        }}
      } />

      <Route exact path="/sessions/new" render={props => {
          return <AddSessionForm {...props}
                              addSession={this.addSession}
                              activeUser={this.state.activeUser}
                              sessions={this.state.sessions} />
        }} />

      <Route exact path="/sessions/:sessionId(\d+)/edit" render={props => {
            return <SessionEditForm {...props}
                        sessions={this.state.sessions}
                        editSession={this.editSession} />
        }} />



    </React.Fragment>
  )
  }
}

export default ApplicationViews
