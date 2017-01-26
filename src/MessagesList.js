import React from 'react';
import MessageItem from './MessageItem';

const style = {
    height: '100px',
    overflowY: 'scroll'
};

const MessagesList = (props) => {
    let { messages } = props;

    messages = messages.map( function(message, index){
        return <MessageItem key={index} index={index} message={message} />
    });

    return <ul style={style}>{messages}</ul>
};

export default MessagesList;
