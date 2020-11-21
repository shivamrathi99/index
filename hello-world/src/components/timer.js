import React, { Component } from 'react'

function addZero(i) {
if (i < 10) {
  i = "0" + i;
}
return i;
}

const myFunction = () =>{
var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
let timee = h + ":" + m + ":" + s;
return timee;
}
 class Timer extends Component {
    render() {         
    return (
        (myFunction()<"12:00:00") 
            ? "good morning" 
            : (myFunction() >"12:00:01" && myFunction() < "18:00:00") 
                ? "afternoon"
                : "GE"
    ) 
}
}

export default Timer
