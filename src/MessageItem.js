import React from 'react';
import ReactDOM from 'react-dom';
const Velocity = require('../node_modules/velocity-react/lib/velocity-animate-shim');

const style = {
    listStyle: 'none'
};

class MessageItem extends React.Component{
    componentDidMount() {
        const parentNode = ReactDOM.findDOMNode(this).parentNode;
        const node = ReactDOM.findDOMNode(this);

        // Once a new item is being added, then scroll down to it
        Velocity(node, 'scroll', {
            duration: 500,
            container: parentNode,
            queue: false
        });
    }

    render() {
        const { message } = this.props;

        return <li style={style}>{message.date + ' - ' + message.text}</li>
    }
}

export default MessageItem;
