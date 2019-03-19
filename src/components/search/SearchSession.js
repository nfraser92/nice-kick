import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'


export default class SearchSession extends Component {
    state = {
        session: []
      }

    data = []

  onSelect = (session) => {
    this.setState({session: {session}})


    while(this.data.length > 0) {
        this.data.pop()
}
  }

  render() {
      this.props.sessions.map(session => {
          this.data.push({
            key: session.date,
            value: session.location,
          })
      })

    return (
      <ReactSearchBox
        placeholder="Search Sessions"
        value="data"
        data={this.data}
        callback={session => console.log(session)}
        onSelect={session => this.onSelect(session)}
        />
        )
    }
}
