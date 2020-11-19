import React, { Component } from 'react'
// 'this' keyword is undefined in eventhandler, thatswhy event binding is necessary in class components
//eventhandler == onClick
class Eventbind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this); //method 3
  }

  clickHandler() {
    //eg. the below setState will result in undefined if no binding is used
    this.setState({
      message: "goodbye",
    });
  }

  //   method4
  //   clickHandler = () =>
  //   {
  //       this.setState(
  //           {
  //               message: 'goodbye'
  //           }
  //       )
  //   }

  // methods to bind
  // 1. bind the handler in render method using the bind keyword
  // 2. use arrow function is the render method
  // method 1 and 2 have performance issues
  // 3. binding the handler in class constructor rather than renderer (recommended)
  // 4. use arrow function as a class property

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>click</button> */} {/*normal*/}
        <button onClick={this.clickHandler.bind(this)}>click</button> {/*method1*/}
        <button onClick={() => this.clickHandler()}>click</button> {/*method2*/}
        <button onClick={this.clickHandler}>click</button> {/*method3*/}
      </div>
    );
  }
}

export default Eventbind
