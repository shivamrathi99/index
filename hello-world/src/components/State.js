import React, { Component } from "react";

// as we're using state, it can be changed within the function
// as we're using class components, so we will use this.props
// Welcome {this.props.name} a.k.a {this.props.heroName}
//as the above line is a prop, so the children cannot change its properties
//now we will use state

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }
  // a state is an object that is maintained inside the component,
  // so we can change it and it is mutable.
  changeMessage() {
    this.setState({
      message: "thankyou for subscribing",
    });
  }
 // setState method is used to change the state of the component
 
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}> Subscribe </button>
      </div>
    );
  }
}
export default Message;
