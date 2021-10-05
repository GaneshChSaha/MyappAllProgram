import React, { Component } from 'react'

export default class StylingDemo extends Component {
    constructor(){
        super();
    }
    render() {
        const mystyle= {
            color:"white",
            backgroundColor:"DodgerBlue",
            padding:"10px",
            fontFamily:"Arial"
        };
        return (
            <div>
                <h1 style={{color:"red"}}>Namaskara India</h1>
                <h2 style={{backgroundColor:"lightblue"}}>Welcome to Bengaluru</h2>
                <p style={mystyle}>All is well</p>
            </div>
        )
    }
}
