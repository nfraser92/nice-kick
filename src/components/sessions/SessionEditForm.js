import React, { Component } from "react"
import SessionManager from "../../modules/SessionManager";



export default class SessionEditForm extends Component {
    state = {
        date: "",
        location: "",
        shots: "",
        area: "",
        from: "",
        scored: "",
        taken: "",
        comments: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingSession = evt => {
        evt.preventDefault()
        const editedSession = {
            date: this.state.date,
            location: this.state.location,
            shots: this.state.shots,
            userId: parseInt(sessionStorage.getItem("credentials")),
            area: this.state.area,
            from: this.state.distance,
            scored: this.state.scored,
            taken: this.state.taken,
            comments: this.state.comments,
            id: this.props.match.params.sessionId
        };

        this.props.editSession(editedSession)
        .then(() => this.props.history.push("/sessions"))

    }
            componentDidMount() {
                SessionManager.get(this.props.match.params.sessionId)
                .then(session => {
                    this.setState({
                        date: session.date,
                        location: session.location,
                        shots: session.shotsTaken,
                        userId: parseInt(sessionStorage.getItem("credentials")),
                        area: session.areaOfField,
                        from: session.distance,
                        scored: session.scored,
                        taken: session.foot,
                        comments: session.comments,
                        id: this.props.match.params.sessionId
                    })
                })
            }

    render () {
        return (
            <React.Fragment>
                <form className="sessionForm">
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            value={this.state.date}
                        />
                    </div>
                    <div className="form-group">
                          <label htmlFor="location">Location</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="location"
                              placeholder="locaion"
                              value={this.state.location}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="shots">Shots Attempted</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="shots"
                              placeholder="Shots Attempted"
                              value={this.state.shots}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="area">Area of Field</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="area"
                              placeholder="eg. central, left side, right side"
                              value={this.state.area}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="distance">Distance</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="distance"
                              placeholder="How far from goal were you?"
                              value={this.state.from}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="scored">Scored</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="scored"
                              placeholder="How Many did you score?"
                              value={this.state.scored}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="taken">Taken with</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="taken"
                              placeholder="Left or right foot?"
                              value={this.state.taken}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="comments">comments</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="comments"
                              placeholder="comments"
                              value={this.state.comments}
                          />
                      </div>
                      <button
            type="submit"
            onClick={this.updateExistingSession}
            className="btn btn-primary"
          >
            Submit
          </button>
                        </form>
            </React.Fragment>
        )
    }
}