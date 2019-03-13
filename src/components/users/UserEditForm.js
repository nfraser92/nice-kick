import React, { Component } from "react"
import NewUserManager from "../../modules/NewUserManager"

export default class UserEditForm extends Component {
    state = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingSession = evt => {
        evt.preventDefault()
        const editedUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            email: this.state.email,
            password: this.state.password,
            userId: parseInt(sessionStorage.getItem("credentials")),
            id: this.props.match.params.sessionId
        };

        this.props.editUser(editedUser)
        .then(() => this.props.history.push("/users"))
    }
        componentDidMount() {
            NewUserManager.edit(this.props.match.params.userId)
            .then(user => {
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    email: user.email,
                    password: user.password,
                    userId: parseInt(sessionStorage.getItem("credentials")),
                    id: this.props.match.params.userId
                })
            })
        }
        render () {
            return (
                <React.Fragment>
                    <form className="userForm">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="firstName"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="form-group">
                              <label htmlFor="lastName">lastName</label>
                              <input
                                  type="text"
                                  required
                                  className="form-control"
                                  onChange={this.handleFieldChange}
                                  id="lastName"
                                  placeholder="Last Name"
                                  value={this.state.lastName}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="age">Enter Your Age</label>
                              <input
                                  type="text"
                                  required
                                  className="form-control"
                                  onChange={this.handleFieldChange}
                                  id="age"
                                  placeholder="age"
                                  value={this.state.age}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                  type="text"
                                  required
                                  className="form-control"
                                  onChange={this.handleFieldChange}
                                  id="email"
                                  placeholder="Enter Your Email Address"
                                  value={this.state.email}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                  type="text"
                                  required
                                  className="form-control"
                                  onChange={this.handleFieldChange}
                                  id="password"
                                  placeholder="Are you sure you want to change your password?"
                                  value={this.state.password}
                              />
                          </div>
                          <button
                type="submit"
                onClick={this.updateExistingUser}
                className="btn btn-primary"
              >
                Submit
              </button>
                            </form>
                </React.Fragment>
            )
        }
    }

