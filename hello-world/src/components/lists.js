import React, { Component } from 'react'
import './style.css'


class Lists extends Component {
    render() {
        const arr = ["shubham", "shivam", "abc", "ashsdhaskjdd", "qwe", "123" ,"$%%$", "dsfds", "121212"]
        return (
            <div className = "divstyle">
                {arr.map((item) => <div key={item}>{item}</div>  )}
            </div>
        )
    }
}

export default Lists
