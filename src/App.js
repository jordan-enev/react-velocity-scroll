import React, { Component } from 'react';
import MessagesList from './MessagesList';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  messages: [], text: '' }
    }

    handleOnChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }

    handleOnKeyPress(e) {
        const text = e.target.value;

        if (e.key === 'Enter') {
            this.sendMessage(text);
        }
    }

    sendMessage(text) {
        const { messages } =  this.state;
        const message = { date: new Date(), text };

        this.setState({
            messages: messages.concat([message]),
            text: ''
        });
    }

    render() {
        const { messages, text } = this.state;

        return <div style={style}>
            <h1>Please enter your text message:</h1>
            <input
                value={text}
                placeholder="Press Enter for sending"
                onChange={this.handleOnChange.bind(this)}
                onKeyPress={this.handleOnKeyPress.bind(this)} />
            <MessagesList messages={this.state.messages} />
        </div>
    }
}

const style = {
    textAlign: 'center'
};

export default App;
