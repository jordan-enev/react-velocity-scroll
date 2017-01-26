import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const Velocity = require('../node_modules/velocity-react/lib/velocity-animate-shim');

class MessageItem extends React.Component{
    componentWillUpdate() {
        const parentNode = ReactDOM.findDOMNode(this).parentNode;
        const node = ReactDOM.findDOMNode(this);

        Velocity(node, 'scroll', {
            duration: 500,
            container: parentNode,
            queue: false
        });
    }

    render() {
        const {message} = this.props;

        return <li style={style}>{message.date + ' - ' + message.text}</li>
    }
}

const style = {
    listStyle: 'none'
};

export default MessageItem;
