import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(){
        super();
        this.state={firstNum:0,econdNum:0, result:''}
    }

    doCalculator=(e)=>{
        switch(e.target.value){
            case '+':
                this.setState({result:parseFloat(this.state.firstNum)
                + parseFloat(this.state.secondNum)});
                break;
            
            case '-':
                    this.setState({result:parseFloat(this.state.firstNum)
                    - parseFloat(this.state.secondNum)});
                    break;
        }
    }



    render() {
        return (
            <div>
                <input onChange={(e)=>{this.setState({firstNum:e.target.value})}} placeholder="Enter First Number"/><br/>
                <input onChange={(e)=>{this.setState({secondNum:e.target.value})}} placeholder="Enter Second Number"/><br/>
                <button onClick={this.doCalculator} value='+'>+</button>
                <button onClick={this.doCalculator} value='-'>-</button>
                <button onClick={this.doCalculator} value='*'>*</button>

                <p>{this.state.result}</p>
                <p>{this.state.firstNum}</p>
                <p>{this.state.secondNum}</p>

            </div>
        )
    }
}
