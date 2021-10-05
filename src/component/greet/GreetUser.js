import React, { Component } from 'react'

export default class GreetUser extends Component {
    constructor(){
        super();
        this.state={name:''};

    }
    doGreeting=(e)=>{
        this.setState({name:e.target.value});
    }
    render() {
        let greetingMessage='';

        if(this.state.name !=''){
            greetingMessage =<h1>Greetings {this.state.name}</h1>
        }
        return (
            <div>
                
            </div>
        )
    }
}
