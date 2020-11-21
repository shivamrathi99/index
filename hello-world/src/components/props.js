import React from 'react'
{// components are binded as objects and are referred as props, we can give them attributes as follows: 
}
const Greeting= props => {
    // we use brackets () in return as there are two or more statements.
    // only one return element is allowed, so for using two or more elements, we will contain them in div.
    return (
        //     'this.props' is used instead of 'props' in class components
        <div>           
    <h1> hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>
    )}
{//props or properties,  are immutable so they cannot be changed, like props.name = "ssss" will give error.
}
export default Greeting