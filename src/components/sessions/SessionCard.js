import React, { Component } from "react";
import "./Sessions.css"

export default class SessionCard extends Component {
    render () {
        let session = this.props.session

        return (
            <React.Fragment>
                <section className="sessions">
                <div key={session.id} className="newsCard">
                <div className="card-body">
                <div key ={session.id}>
                <div>Date: {session.date}</div>
                <div>Location: {session.location}</div>
                        <div>Attempted: {session.shotsTaken} Shots</div>
                        <div>Area of Field: {session.areaOfField}</div>
                        <div>Distance: {session.distance} yards</div>
                        <div>Scored: {session.scored} goals</div>
                        <div>Shooting with: {session.foot} foot</div>
                        <div>Comments: {session.comments}</div>
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
                </div>
                </section>
            </React.Fragment>
        )
    }
}