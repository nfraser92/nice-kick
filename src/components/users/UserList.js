import React, { Component } from "react"
import "./User.css"
import soccer from "./soccer_2.jpg"

export default class UserList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
            <section className="user">
                {
                    this.props.users.filter(user => user.userId === Number(sessionStorage.getItem("credentials")))
                    .map(user =>
                        <div className="userCard" key={user.id}>
                        <div className="imageHolder">
                        <img src={soccer} className="ball-icon" alt="ball" />
                        </div>
                            <div><strong>Name: {user.firstName} {user.lastName}</strong></div>
                            <div><strong>Age: {user.age}</strong></div>
                            <div><strong>Email: {user.email}</strong></div>
                            <div><strong>Username: {user.username}</strong></div>
                            <div className="btn buttons">
                            <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(
                                    `/users/${user.id}/edit`
                                    );
                                }}
                                >Edit Profile
                                </button>
                                <button type="button"
                                onClick={() => {
                                  this.props.history.push("/sessions/new")
                                }}
                                className="btn btn-success">
                                 New Session
                                </button>
                                <button type="button"
                                onClick={() => {
                                    this.props.history.push("/locations/new")
                                }}
                                className="btn btn-success">
                                 New Field
                                </button>
                              </div>
                        </div>
                    )
                }
            </section>
                </div>
                </React.Fragment>
        );
    }
}
