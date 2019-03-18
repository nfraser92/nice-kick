import React, { Component } from "react"
import "./Locations.css"
import image from "./1.jpg"


export default class LocationList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="locations">
            <div className="headerholder">
                <h1>Fields</h1>
                </div>
                <div className="locationButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }}> Add New Field
                </button>
                </div>
                {
                    this.props.locations.map(location =>
                        <div className="LocationCard" key={location.id}>
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
            </section>
        </React.Fragment>
        )
    }
}