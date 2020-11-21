// this is used if the child wants to communicate with the parent component
//this file is the parent component

import React, { Component } from 'react'
import Childcomponent from './childcomponent'
//refer to childcomponent.js

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this) // since we are using it in a method 
    }
    
   //jhkjh
    greetParent(childName)
    {
         // alert("hello" + this.state.parentName)
        //or, with template literals
        alert ( `hello ${this.state.parentName} from ${childName}` )
    }
    render() {
        return (
            <div>
                <Childcomponent  greetHandler={ this.greetParent } /> 
            </div>
        )
    }
}

export default ParentComponent

//how to pass methods as props
// 1. in the parent component, define the method
// 2. on the child component tag, pass the method as a prop
// 3. in the child component, access the method using the props object
// 4. if you want you pass a parameter, use the arrow function syntax
