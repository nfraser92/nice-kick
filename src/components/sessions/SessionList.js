import React, { Component } from "react";

export default class SessionList extends Component {
  render() {
    return (
      <section className="sessions">
        <div>
          <button type="button"
          onClick={() => {
              this.props.history.push("/sessions/new")
          }}
          className="btn btn-success">
           Add New Session
          </button>
        </div>
        {this.props.sessions.map(session => (
          <section className="sessions" key={session.id}>
            <div>Date {session.date}</div>
            <div>Location {session.location}</div>
            <div>Shots Taken: {session.shotsTaken}</div>
            <div>Area: {session.areaOfField}</div>
            <div>From: {session.distance}</div>
            <div> Scored:{session.scored}</div>
            <div>Taken With: {session.foot} foot</div>
            <div>Comments: {session.comments}</div>
          </section>
        ))}
      </section>
    );
  }
}
