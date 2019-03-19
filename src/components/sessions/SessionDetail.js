import React, { Component } from "react"
import "./Sessions.css"

export default class SessionDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const session = this.props.sessions.find(
            s => s.id === parseInt(this.props.match.params.sessionId)) || {}

return (
    <section className="sessions">
    <div key={session.id} className="card-body">
    <div><strong>Date:</strong>  {session.date}</div>
    <div><strong>Location:</strong>  {session.location}</div>
    <div><strong>Attempted:</strong> {session.shotsTaken} Shots</div>
    <div><strong>Area of Field:</strong>  {session.areaOfField}</div>
    <div><strong>Distance:</strong> {session.distance} Yards</div>
    <div><strong>Scored:</strong> {session.scored} Goals</div>
    <div><strong>Shooting With:</strong> {session.foot} Foot</div>
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
    </section>
)
    }
}