import React, { Component } from "react";

export default class AddLocationForm extends Component {
  // Set initial state
  state = {
    name: "",
    address: "",
    comments: "",
    enteredBy: parseInt(Number(sessionStorage.getItem("credentials")))
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating object, and
        invoking the function reference passed from parent component
     */
  constructNewLocation = evt => {
    evt.preventDefault();
    if (this.state.location && this.state.address === "") {
      window.alert("Please enter field information");
    } else {
      const location = {
        name: this.state.name,
        address: this.state.address,
        comments: this.state.comments,
        enteredBy: this.state.enteredBy
      };

      // Create the field and redirect user to location list
      this.props.addLocation(location)
        .then(() => this.props.history.push("/locations"));
    }
  };

  render() {
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
              placeholder="Location name"
              value={this.state.name}
              />
          </div>
          <div className="form-group">
            <label htmlFor="address">Field Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="address"
              placeholder="Field Address"
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
            onClick={this.constructNewLocation}
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
    );
  }
}