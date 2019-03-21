import React, { Component} from "react";
import  "./Home.css"

export default class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="wrapper">
           <div className="title"><h1 className="title">Welcome to NiceKick!</h1></div>
                  <div className="btn buttons">
                  <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.props.history.push("/users")}
                                >Profile
                                </button>
          <button type="button"
          onClick={() => {
              this.props.history.push("/sessions/new")
            }}
            className="btn btn-success">
           Start A Session!
          </button>
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/locations/new")
                        }}> Add New Field
                </button>
        </div>
        </div>
        </React.Fragment>
        )
    }
}