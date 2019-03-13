import React, { Component } from "react"

export default class FriendsList extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="friendsList">
                <button
                type="button"
                className="addFriendButton btn-primary"
                onClick={() => {
                    this.props.history.push("/friends/new")
                }}>Add New Friend</button>
                {
                    this.props.friends.filter(friend => friend.user.id === parseInt(sessionStorage.getItem("credentials")))
                    .map(friend => {
                        return <div className="card" key={friend.id}>
                        {
                            this.props.users.find(user => user.id === friend.friendId).username
                        }
                         <button
                         onClick={() => this.props.deletefriendship(friend.id)
                            .then(() => this.props.history.push("/friends"))}
                            className="btn red-btn-success">Delete</button>
                            </div>
                    })
                }
                </section>
            </React.Fragment>
        )
    }
}