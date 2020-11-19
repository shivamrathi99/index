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
    
   
    greetParent(childName)
    {
         // alert("hello" + this.state.parentName)
        //or, with template literals
        alert ( `hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <Childcomponent  greethandler={ this.greetParent } /> 
            </div>
        )
    }
}

export default ParentComponent
