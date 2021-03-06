import React, { Component } from "react";
import SessionCard from "./SessionCard";

export default class SessionList extends Component {
  render() {

    return (
      <React.Fragment>
        <div id="wrapper">
        <div className="headerholder">
                <h1>Sessions</h1>
                </div>
      <div className="btn add-session-button">
          <button type="button"
          onClick={() => {
            this.props.history.push("/sessions/new")
          }}
          className="btn btn-success">
           Add New Session
          </button>
        </div>
      <section className="sessions">
        {
          this.props.sessions.filter(
            session => session.userId === Number(sessionStorage.getItem("credentials")))
            .map(session =>
              <SessionCard key={session.id} session={session} editSession={this.props.editSession}
              deleteSession={this.props.deleteSession} {...this.props} />
              )
            }
      </section>
            </div>
            </React.Fragment>
    );
  }
}
