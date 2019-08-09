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
import LocationEditForm from "./locations/LocationEditForm";
import FriendsList from "./friends/FriendsList"
import Home from "./home/home";
import SessionDetail from "./sessions/SessionDetail";
import FriendsManager from "../modules/FriendsManager";
import AddFriend from "./friends/AddFriend";
import ChatManager from "../modules/ChatManager";
import ChatList from "./chat/ChatList";
import ChatForm from "./chat/ChatForm";
import ChatEdit from "./chat/ChatEditForm";


class ApplicationViews extends Component {
  state = {
    users: [],
    sessions: [],
    friends: [],
    locations: [],
    chats: []
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

  editLocation = editedLocation => {
    return LocationManager.put(editedLocation)
      .then(() => LocationManager.getAll())
      .then(locations => this.setState({ locations: locations }));
  };

  deleteLocation = (id) => {
    return LocationManager.deleteAndList(id)
    .then(locations => this.setState({ locations: locations}))
  }

  addFriend = newFriend => {
    return FriendsManager.addFriend(newFriend)
    .then(() => FriendsManager.getAllUserFriends())
    .then(friends => this.setState({friends: friends}))
  }

  deleteFriend = (id) => {
    return FriendsManager.deleteAndList(id)
    .then(friends => this.setState({friends: friends}))
  }

  addChat = newChat => {
    return ChatManager.post(newChat)
    .then(() => ChatManager.getAll())
    .then(chats => this.setState({chats: chats}))
  }

  deleteChat = deletedChat => {
    return ChatManager.deleteAndList(deletedChat)
    .then(chats => this.setState({chats: chats}))
  }

  editChat = editedChat => {
    return ChatManager.put(editedChat)
    .then(() => ChatManager.getAll())
    .then(chats => this.setState({chats: chats}))
  }

  componentDidMount() {
    SessionManager.sortSessions().then(sessions => this.setState({sessions: sessions}))

    UserManager.getAll().then(users => this.setState({users: users}))

    LocationManager.getAll().then(locations => this.setState({locations: locations}))

    FriendsManager.getAllUserFriends().then(friends => this.setState({friends: friends}))

    ChatManager.getAll().then(chats => this.setState({chats: chats}))

  }
  render() {
    return (
      <React.Fragment>

      <Route path="/login" component={Login} />

      <Route exact path="/" render={props => {
        if (this.isAuthenticated()) {
          return <Home activeUser={this.state.activeUser}
                       {...props}
                       addSession={this.addSession}
                       editUser={this.editUser}
                       users={this.state.users}
                       locations={this.state.locations}
                       addLocation={this.addLocation}
                       sessions={this.state.sessions}/>
        }}
      } />
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
                              locations={this.state.locations}
                              sessions={this.state.sessions} />
        }}
      } />

      <Route exact path="/sessions/new" render={props => {
        return <AddSessionForm {...props}
        addSession={this.addSession}
                              locations={this.state.locations}
                              activeUser={this.state.activeUser}
                              sessions={this.state.sessions} />
                            }} />

        <Route exact path="/sessions/:sessionId(\d+)" render={(props) => {
                  return <SessionDetail {...props}
                    sessions={this.state.sessions}
                    locations={this.state.locations}
                    editSession={this.editSession}
                    deleteSession={this.deleteSession} />
                  }} />

      <Route exact path="/sessions/:sessionId(\d+)/edit" render={props => {
            return <SessionEditForm {...props}
                        sessions={this.state.sessions}
                        locations={this.state.locations}
                        editSession={this.editSession} />
                      }} />

    <Route exact path="/locations" render={props => {
      if (this.isAuthenticated()) {
          return <LocationList {...props}
          locations={this.state.locations}
          deleteLocation={this.deleteLocation} />
        }}
      } />

    <Route exact path="/locations/new" render={props => {
          return <AddLocationForm {...props}
                              addLocation={this.addLocation}
                              activeUser={this.state.activeUser}
                              locations={this.state.locations} />
                            }} />

    <Route exact path="/locations/:locationId(\d+)/edit" render={props => {
      return <LocationEditForm {...props}
                              locations={this.state.locations}
                              editLocation={this.editLocation} />
    }} />

    <Route exact path="/friends" render={props => {
      if (this.isAuthenticated()) {
        return <FriendsList {...props}
                            activeUser={this.state.activeUser}
                            users ={this.state.users}
                            friends={this.state.friends}
                            deleteFriend={this.deleteFriend}
                            addFriend={this.addFriend} />      }}
    } />

<Route exact path="/friends/new" render={(props) => {
        return <AddFriend {...props}
        activeUser={this.state.activeUser}
        addFriend={this.addFriend}
        users={this.state.users} />
			}} />

<Route exact path="/chats" render={props => {
            return (<ChatList
              chats={this.state.chats}
              addChat={this.addChat}
              deleteChat={this.deleteChat}
              updateChat={this.updateChat}
              {...props}
              users={this.state.users} />
          );
        }} />

        <Route
          exact
          path="/chats/new"
          render={props => {
            return (
              <ChatForm
                chats={this.state.chats}
                addChat={this.addChat}
                {...props}
              />
            );
          }}
        />

<Route exact path="/chats/:chatId(\d+)/edit" render={props => {
            return <ChatEdit {...props}
                        chats={this.state.chats}
                        users={this.state.users}
                        editChat={this.editChat} />
                      }} />
    </React.Fragment>
  )
}
}

export default ApplicationViews
