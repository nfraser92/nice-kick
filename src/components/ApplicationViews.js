import React, { Component } from "react"
import { Route } from "react-router-dom"
import SessionManager from "../modules/SessionManager"
import UserList from "./users/UserList";
import UserManager from "../modules/UserManager"

class ApplicationViews extends Component {
  state = {
    users: [],
    sessions: []
  }

  componentDidMount() {
    // SessionManager.getAll().then(sessions => this.setState({sessions: sessions}))

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
    </React.Fragment>
  }
}

export default ApplicationViews
