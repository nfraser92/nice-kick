import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager";



export default class LocationEditForm extends Component {
    state = {
        name: "",
        address: "",
        comments: "",
        enteredBy: parseInt(Number(sessionStorage.getItem("credentials")))
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        if (this.state.name && this.state.address && this.state.comments === " ")  {
            window.alert("Please enter all required information");
          } else {
        const editedLocation = {
            id: this.props.match.params.locationId,
            name: this.state.name,
            address: this.state.address,
            comments: this.state.comments,
            enteredBy: this.state.enteredBy
        };

        this.props.editLocation(editedLocation)
        .then(() => this.props.history.push("/locations"))
    };
    }
            componentDidMount() {
                LocationManager.get(this.props.match.params.locationId)
                .then(location => {
                    this.setState(location)
                })
            }

    render () {
        return (
            <React.Fragment>
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="name">Field</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="address"
                              placeholder="locaion"
                              value={this.state.address}
                          />
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
                              value={this.state.comments}
                          />
                      <button
            type="submit"
            onClick={this.updateExistingLocation}
            className="btn btn-primary"
            >
            Submit
          </button>
                      <button
            type="submit"
            onClick={() => this.props.history.push("/locations")}
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