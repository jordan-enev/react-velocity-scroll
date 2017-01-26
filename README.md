# About
Example of using [Velocity scroll command](http://velocityjs.org/#scroll) in React. The example includes sending and listing messages in a chat-like manner - _once a message is sent, then scroll the messages list to the last added one_.

The repo is a result from the following Stack Overflow contribution: [velocity-react - animating scrollTop after component update](http://stackoverflow.com/questions/35566357/velocity-react-animating-scrolltop-after-component-update).

# Demo
1. https://jordan-enev.github.io/react-velocity-scroll/

# Installation
1. `npm install`
1. `npm start`

# Note
The Velocity library is included in the example via [velocity-react](https://github.com/twitter-fabric/velocity-react) module. Its recommended to include the module for future advanced animations, because it provides already implemented React components for using Velocity's animations. However the repo don't use any animations. It uses only Velocity library's `scroll` command.
