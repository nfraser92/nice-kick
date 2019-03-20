import React, { Component } from "react";
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
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingSession = evt => {
    evt.preventDefault();
    const editedSession = {
      date: this.state.date,
      location: this.state.location,
      shotsTaken: this.state.shots,
      userId: parseInt(sessionStorage.getItem("credentials")),
      areaOfField: this.state.area,
      distance: this.state.from,
      scored: this.state.scored,
      foot: this.state.taken,
      comments: this.state.comments,
      id: this.props.match.params.sessionId
    };

    this.props
      .editSession(editedSession)
      .then(() => this.props.history.push("/sessions"));
  };
  componentDidMount() {
    SessionManager.get(this.props.match.params.sessionId).then(session => {
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
      });
    });
  }

  render() {
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
            <label htmlFor="location">Field</label>
            <select
              defaultValue=""
              className="form-control"
              name="location"
              id="location"
              onChange={this.handleFieldChange}
            >
              <option value="">Field</option>
              {this.props.locations.map(l => (
                <option key={l.id} id={l.id} value={l.name}>
                  {l.name}
                </option>
              ))}
            </select>
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
            <label htmlFor="area">Area</label>
            <select
              defaultValue="foot"
              className="form-control"
              name="area"
              id="area"
              onChange={this.handleFieldChange}
            >
              <option value="">Area</option>
              <option id="Left" value="Left">
                Left
              </option>
              <option id="Right" value="Right">
                Right
              </option>
              <option id="Center" value="Center">
                Center
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="from">Distance</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="from"
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
            <label htmlFor="taken">Taken With</label>
            <select
              defaultValue="foot"
              className="form-control"
              name="taken"
              id="taken"
              onChange={this.handleFieldChange}
            >
              <option value="">Foot</option>
              <option id="Left" value="Left">
                Left
              </option>
              <option id="Right" value="Right">
                Right
              </option>
            </select>
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
            <button
              type="submit"
              onClick={this.updateExistingSession}
              className="btn btn-primary"
            >
              Submit
            </button>
            <button
              type="submit"
              onClick={() => this.props.history.push("/sessions")}
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
