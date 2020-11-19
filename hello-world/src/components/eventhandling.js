// you pass a function as eventhandler rather than a string

import React from 'react'

function Functionclick() {

    function clickhandler() //no need to write function keyword for class components
    {
        console.log ("button clicked")
    }

    return (
        <div>
            
            <button onClick= {clickhandler}> click </button>  
            {// you pass a function in eventhandler (onClick) rather than a string                                       
            // <button onClick= "clickhandler()"> click </button>
            // notice, it is written clickhandler and not clickhandler(), as it is a function and not a function call
            //for class component, it is this.clickhandler  
            }
        </div>
    )
}

export default Functionclick
