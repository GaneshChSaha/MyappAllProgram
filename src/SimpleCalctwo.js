import React, { Component } from 'react'

export default class SimpleCalctwo extends Component {
    
    constructor(){
        super();
        this.state={firstNum:'', secondNum:'', result:'Result will be displayed here'};
    }
    


    submitFormHandler=(event)=>{
        if(this.state.firstNum==0 || this.state.secondNum==0)
        alert('Please enter non zero value');

        let sum=Number(this.state.firstNum)+ Number(this.state.secondNum);
        let sub=Number(this.state.firstNum)- Number(this.state.secondNum);
        this.setState({result:'sum: ' + sum + 'sub: '+sub});
        event.preventDefault();
    }


    doCalculation=(event)=> {
        let name=event.target.name;
        let value=event.target.value;
        if(!Number[value]){
            alert('Please enter numeric number only');
        }else
            this.setState({[name]: value});
    }

    
    render() {
        let res1='';
        let res2='';
        if(this.state.firstNum !='')
            res1=<p>You entered first number as {this.state.firstNum}</p>
        
        if(this.state.secondNum !='')
            res2=<p>You entered second number as {this.state.secondNum}</p>
        
        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                    <p>Enter first number:
                    <input type="text" name="firstNum" value={this.state.firstNum} onChange={this.doCalculation}/>

                    </p>
                    <p>Enter second number:
                    <input type="text" name="secondNum" value={this.state.secondNum} onChange={this.doCalculation}/>
                    </p>
                    <button type="submit">Do Calculation</button>
                </form>
                           
                {res1}
                {res2}
                <p>{this.state.result}</p>
            
            </div>
        )
    }
}
