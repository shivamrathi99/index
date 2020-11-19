import React, { Component } from "react";

//by using es7 snippet for redux
// type (rce+tab) for class component template and (rfc+tab) for functional component
// type rconst for constructor snippet for state/prop
class Counter extends Component {
  constructor(props) {
    super(props);
    // the only place where you can assign this.state is the constructor
    // for changing value use setState
    this.state = {
      count: 0,
    };
  }

  increment() {
    // we try to change the value directly without setState
    //  this.state.count= this.state.count+1
    //  console.log(this.state.count)
    // this will change the value of count in the console but the browser will not re-render
    // so we should never change state directly; use setState

    this.setState(
      {
        count: this.state.count + 1, // now browser will rerender the count
      },
      () => {
        console.log("Callback", this.state.count); // will sync
      }
    );
    // whenever you want a function to execute after the state has been changed, pass it as a second parameter in setState method
    // so it will behave as a callback function, or it will not render,as setState is an async function

    console.log(this.state.count); // this is async, there will be increment in the browser but not in console.

    // react may group multiple setState calls into a single update for better performance, for eg., if you run increment() five times
    // it will result in increment by 1 only
    // so whenever you want to update a state based on previous state, you will pass function as a argument in setState instead of an object.

    //so, ,use
    //  this.setState(prevState => ({ ,
    //  count:prevState.count + 1
    //  })

    // the second parameter to setState func is props, in case you want to use it.
    // this will be 
    // //  this.setState((prevState,props) => ({ ,
    // //  count:prevState.count + props.addValue
    // //  })
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    // this will be grouped together and only incremented by 1
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count} </div>
        {
          //to bind with state component count
        }
        <button onClick={() => this.incrementFive()}>Increment </button>
        {
          // arrow function says that when you click on the button the increment method is called
        }
      </div>
    );
  }
}

export default Counter;
