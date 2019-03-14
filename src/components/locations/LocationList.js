import React, { Component } from "react"

export default class LocationList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="locations">
                <h1>Locations</h1>
                <div className="locationButton">
                    <button type="button"
                        className="location-button"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }}> Add New Location
                </button>
                </div>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <div><h3>{location.name}</h3></div>
                            <div>{location.address}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/Locations/${this.props.location.id}/edit`);
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    )

                }
            </section>
        </React.Fragment>
        )
    }
}