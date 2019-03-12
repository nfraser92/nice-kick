import React, { Component } from "react"

export default class UserList extends Component {
    render() {
        return (
            <section className="users">
                {
                    this.props.users.filter(user => user.userId === Number(sessionStorage.getItem("credentials")))
                    .map(user =>
                        <div className="user" key={user.id}>
                            <div>Name: {user.firstName} {user.lastName}</div>
                            <div>Age: {user.age}</div>
                            <div>Email: {user.email}</div>
                            <div>Username: {user.username}</div>
                        </div>
                    )
                }
            </section>
        );
    }
}
