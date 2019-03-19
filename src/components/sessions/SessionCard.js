import React, { Component } from "react";
import "./Sessions.css"

export default class SessionCard extends Component {
    render () {
        let session = this.props.session

        return (
                <section className="sessions">
                <div key={session.id} className="newsCard">
                <div className="card-body">
                <div><strong>Date:</strong>  {session.date}</div>
                <div><strong>Location:</strong>  {session.location}</div>
                        <div><strong>Attempted:</strong> {session.shotsTaken} Shots</div>
                        <div><strong>Area of Field:</strong>  {session.areaOfField}</div>
                        <div><strong>Distance:</strong> {session.distance} yards</div>
                        <div><strong>Scored:</strong> {session.scored} goals</div>
                        <div><strong>Shooting With:</strong> {session.foot} foot</div>
                        <div><strong>Comments:</strong> {session.comments}</div>
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