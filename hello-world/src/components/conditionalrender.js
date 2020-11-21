// 4 types
// method 1 -  if/else
// method 2 -  element variables
// method 3 - ternary conditional operator
// method 4 - short circuit operator

import React, { Component } from "react";

class Conditionalrender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div> Welcome Shivam </div>
      
    } else {
      return <div> Welcome Guest </div>;
    }

    // return (
    //     <div>
    //         <div>
    //         welcome shivam
    //         </div>
    //         <div> hello guest </div>
    //     </div>
    // )
  }
}

export default Conditionalrender;
