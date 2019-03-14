import React, { Component } from "react"
import { Route } from "react-router-dom"
import SessionManager from "../modules/SessionManager"
import UserList from "./users/UserList";
import UserManager from "../modules/UserManager"
import SessionList from "./sessions/SessionList";
import AddSessionForm from "./sessions/SessionAddForm";
import Login from "./auth/Login"
import SessionEditForm from "./sessions/SessionEditForm";
import UserEditForm from "../components/users/UserEditForm"
import NewUserManager from "../modules/NewUserManager"
import LocationManager from "../modules/LocationManager";
import LocationList from "./locations/LocationList";
import AddLocationForm from "./locations/AddLocationForm";


class ApplicationViews extends Component {
  state = {
    users: [],
    sessions: [],
    locations: []
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
      .then(() => SessionManager.sortSessions())
      .then(sessions => this.setState({ sessions: sessions }));
  };

  editUser = editedUser => {
    return NewUserManager.put(editedUser)
    .then(() => UserManager.getAll())
    .then(users => this.setState({ users: users }));
  }

  addLocation = newLocation => {
    return LocationManager.post(newLocation)
    .then(() => LocationManager.getAll())
    .then(locations => this.setState({locations: locations}))
  }

  componentDidMount() {
    SessionManager.sortSessions().then(sessions => this.setState({sessions: sessions}))

    UserManager.getAll().then(users => this.setState({users: users}))

    LocationManager.getAll().then(locations => this.setState({locations: locations}))

  }
  render() {
    return (
      <React.Fragment>

      <Route path="/login" component={Login} />

      <Route exact path="/users" render={props => {
        if (this.isAuthenticated()) {
          return <UserList {...props}
                           activeUser={this.state.activeUser}
                           users={this.state.users}
                           editUser={this.editUser} />
        }}
      } />
      <Route exact path="/users/:userId(\d+)/edit" render={props => {
                  return <UserEditForm {...props}
                              users={this.state.users}
                              activeUser={this.state.activeUser}
                              editUser={this.editUser} />
              }} />

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

    <Route exact path="/locations" render={props => {
        if (this.isAuthenticated()) {
          return <LocationList {...props}
                              locations={this.state.locations} />
        }}
      } />

    <Route exact path="/locations/new" render={props => {
          return <AddLocationForm {...props}
                              addLocation={this.addLocation}
                              activeUser={this.state.activeUser}
                              locations={this.state.locations} />
        }} />

    </React.Fragment>
  )
  }
}

export default ApplicationViews
