import React, { Component } from "react"
import ChatManager from "../../modules/ChatManager"

export default class ChatEdit extends Component {
    state = {
        text: "",
        users: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingChat = evt => {
        evt.preventDefault()

        const editedChat = {
            id: this.props.match.params.chatId,
            text: this.state.text,
            userId: parseInt(sessionStorage.getItem("credentials")),
            date: this.state.date
        }

        this.props.updateChat(editedChat)
        .then(() => this.props.history.push("/chats"))
    }

    componentDidMount() {
        ChatManager.get(this.props.match.params.chatId)
        .then(chat => {
            this.setState({text: chat.text})
        })
    }

    render() {

        return (
            <React.Fragment>
            <form className="chatForm">
                <div className="form-group">
                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="text"
                    placeholder="chat message"
                    value={this.state.text}
                    />
                    <button
                        type="submit"
                        onClick={this.updateExistingChat}
                        className="btn btn-primary">Submit</button>
                </div>
            </form>
        </React.Fragment>
        )
    }
}