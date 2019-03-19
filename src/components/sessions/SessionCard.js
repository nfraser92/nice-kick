import React, { Component } from "react";
import "./Sessions.css"
import { Link } from "react-router-dom"

export default class SessionCard extends Component {
    render () {
        let session = this.props.session

        return (
                <section className="sessions">
                <div key={session.id} className="newsCard">
                <div className="card-body">
                <div><strong>Date:</strong>  {session.date}</div>
                <div><strong>Location:</strong>  {session.location}</div>
                <Link className="nav-link link" to={`/sessions/${this.props.session.id}`}>Details</Link>
                         <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(
                                    `/sessions/${session.id}/edit`
                                );
                            }}
                        >Edit</button>
                        <button
                            onClick={() => this.props.deleteSession(session.id)
                                .then(() => this.props.history.push("/sessions"))}
                            className="btn red-btn-success">Delete</button>
                </div>
                </div>
                </section>
        )
    }
}