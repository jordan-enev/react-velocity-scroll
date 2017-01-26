import React from 'react';
import MessagesList from './MessagesList';

const style = {
    textAlign: 'center'
};

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            /**
             * @type Array - Store sent messages
             */
            messages: [],
            /**
             * @type String - Store the input value.
             * It's reset on message sent
             */
            text: ''
        }
    }

    handleOnChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }

    handleOnKeyPress(e) {
        const text = e.target.value;

        // Send the message on `Enter` button press
        if (e.key === 'Enter') {
            this.sendMessage(text);
        }
    }

    /**
     * Add the message to the state and reset the value
     * of the input
     *
     * @param String text - Message text
     */
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

            <MessagesList messages={messages} />
        </div>
    }
}

export default App;
