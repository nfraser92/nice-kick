import React, { Component } from "react"
import "./Locations.css"
import field from "./1.jpg"


export default class LocationList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="container">
            <div className="headerholder">
                <h1>Fields <img src={field} className="field" alt="field"/></h1>
                </div>
            <section className="locations">
            <div className="locationButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }}> Add New Field
                </button>
                {
                    this.props.locations.filter(
                        location => location.enteredBy === Number(sessionStorage.getItem("credentials")))
                        .map(location =>
                            <div className="location" key={location.id}>
                            <div><h3>{location.name}</h3></div>
                            <div>Address: {location.address}</div>
                            <div>Comments: {location.comments}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/locations/${location.id}/edit`);
                                }}
                            >
                                Edit
                            </button>
                            <button
                            onClick={() => this.props.deleteLocation(location.id)
                                .then(() => this.props.history.push("/locations"))}
                                className="btn red-btn-success">Delete</button>
                        </div>
                    )

                }
                </div>
            </section>
                </div>
        </React.Fragment>
        )
    }
}