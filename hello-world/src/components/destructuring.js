//two ways to destructure in functional component
// 1. in the function parameter itself 
// 2. in the function body
import React from 'react'

//eg.
// const Greeting= props => {
   
//     return (
//         <div>       
//     <h1> hello {props.name} a.k.a {props.heroName}</h1>
//     {props.children}
//     </div>
//     )}

//this can be written as 
const Greeting= ({name,heroName}) => { // method 1
   
    return (
        <div>       
    <h1> hello {name} a.k.a {heroName}</h1>
    {props.children}
    </div>
    )}
    export default Greeting



    const Greeting= props => { 
     const { name, heroName} = props  // method 2
        return (
            <div>       
        <h1> hello {name} a.k.a {heroName}</h1>
        {props.children}
        </div>
        )}
        export default Greeting



        //for class componenents, for eg 
        // class Welcome extends Component {
        //     render()
        //     {
        //         return 
        //         (<h1> 
                    
        //             Welcome {this.props.name} a.k.a. {this.props.heroName}

        //         </h1>
        //         )
        //     }
        // }
        // export default Welcome

        class Welcome extends Component {
            render()
            {
                const {name,heroName}= this.props  //method
                const {state1, state2} = this.state // for state destructuring
                return 
                (<h1> 
                    
                    Welcome {name} a.k.a. {heroName}

                </h1>
                )
            }
        }
        export default Welcome