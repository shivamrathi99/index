import React from 'react'



const Hello = () => 
{
    
    // this is jsx
    // return (
    //     <div className= 'dummyClass'> //as class is a reserved keyword, we have to
    //      use className instead of using class 
    //         <h1>
    //             hello shivam, how are you
    //         </h1>
    //     </div>

        //this is without jsx
        return React.createElement(  // 3 parameters minimum 
            'div', //the tag name 
            {id:'hello', className: 'dummyClass'}, //id or classname (optional), can be null
            // 'h1' , 'hello shivam, how are you' //this is wrong 
            React.createElement ( 'h1', null , "HelloShivam, how are you")
    )
}

export default Hello 

// as you can see, using jsx is much more easier than without jsx
