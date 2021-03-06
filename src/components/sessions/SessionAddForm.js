import React, { Component } from "react";

export default class extends Component {

    state = {
        date: "",
        location: "",
        shots: "",
        area: "",
        from: "",
        scored: "",
        taken: "",
        comments:""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      constructNewSession = evt => {
          evt.preventDefault()
          const session = {
              date: this.state.date,
              location: this.state.location,
              shotsTaken: this.state.shots,
              userId: parseInt(sessionStorage.getItem("credentials")),
              areaOfField: this.state.area,
              distance: this.state.from,
              scored: this.state.scored,
              foot: this.state.taken,
              comments: this.state.comments
          }

          this.props.addSession(session)
          .then(() => this.props.history.push("/sessions"))
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
                            placeholder="Enter Date"
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
                        <label htmlFor="shotsTaken">Shots Taken</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="shots"
                            placeholder="Enter Shots Attempted"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <select
                            defaultValue="foot"
                            className="form-control"
                            name="area"
                            id="area"
                            onChange={this.handleFieldChange}>

                        <option value="">Area</option>
                        <option id ="Left" value="Left">Left</option>
                        <option id ="Right" value="Right">Right</option>
                        <option id ="Center" value="Center">Center</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="from">From</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="from"
                            placeholder="How Far out were you?"
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
                            placeholder="How Many Did You Score?"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taken">Taken With</label>
                        <select
                            defaultValue="foot"
                            className="form-control"
                            name="taken"
                            id="taken"
                            onChange={this.handleFieldChange}>

                        <option value="">Foot</option>
                        <option id ="Left" value="Left">Left</option>
                        <option id ="Right" value="Right">Right</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="comments"
                            placeholder="Comments"
                        />
                    <button
          type="submit"
          onClick={this.constructNewSession}
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
        )
    }
}