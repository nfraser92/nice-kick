import React, { Component } from "react";

export default class SessionCard extends Component {
    render () {
        let session = this.props.session

        return (
            <React.Fragment>
                <div key={this.props.session.id} className="newsCard">
                <div className="card-body">
                <div key ={session.id}>
                <div>Title: {session.location}</div>
                        {/* <div>Synopsis: {session.summary}</div>
                        <div> <a href={`${session.url}`}>Read session </a> </div>
                        <div>Date: {session.timestamp}</div> */}
                        {/* <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(
                                    `/sessions/${session.id}/edit`
                                );
                            }}
                        >Edit</button>
                        <button
                            onClick={() => this.props.deleteNews(session.id)
                                .then(() => this.props.history.push("/sessions"))}
                            className="btn red-btn-success">Delete</button> */}
                </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}