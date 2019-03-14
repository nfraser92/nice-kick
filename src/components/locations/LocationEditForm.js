import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager";



export default class LocationEditForm extends Component {
    state = {
        name: "",
        address: "",
        comments: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        const editedLocation = {
            id: this.props.match.params.locationId,
            name: this.state.name,
            address: this.state.address,
            comments: this.state.comments
        };

        this.props.editLocation(editedLocation)
        .then(() => this.props.history.push("/locations"))

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
                      </div>
                      <button
            type="submit"
            onClick={this.updateExistingLocation}
            className="btn btn-primary"
          >
            Submit
          </button>
                        </form>
            </React.Fragment>
        )
    }
}