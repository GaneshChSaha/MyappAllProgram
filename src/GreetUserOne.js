import React, { Component } from 'react'

export default class GreetUserOne extends Component {
    constructor(){
        super();
        this.state={userName:''};
    }
    doGreetings=(event)=>{
        this.setState({userName: event.target.value});
    };

    submitFormHandler=(event)=>{
        alert('Welcome to ' + this.state.userName);
    }


    render() {
        let result='';
        if(this.state.userName){
            result=<h1>Hello {this.state.userName}</h1>
        }else{
            result='';
        }
        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                    {result}
                    <h1>Greetings {this.state.userName}</h1>
                    <p>Enter Your Name:</p>
                    <input type="text" onChange={this.doGreetings}/>
                    <input type='submit'value="Click here"></input>
                </form>
            
            </div>
        )
    }
}
