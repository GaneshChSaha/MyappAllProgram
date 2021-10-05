import React, { Component } from "react";

export default class SimpleCalc extends Component {
  constructor() {
    super();
    this.state = {
      firstNum: '',
      secondNum: '',
      total: '',
    };
  }

  doCalculation1 = (event) => {
    this.setState({
      firstNum: event.target.value,
    });
  };

  doCalculation2 = (event) => {
    this.setState({
      secondNum: event.target.value,
    });
  };

  submitFormHandler = (event) => {
    let total= parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
    alert('Addition of two number: '+total);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFormHandler}>
          <p> Enter First Number: </p>
          <input
            type="text"
            name="firstNum"
            value={this.state.firstNum}
            onChange={this.doCalculation1}
          />
          <p> Enter Second Number: </p>
          <input
            type="text"
            name="secondNum"
            value={this.state.secondNum}
            onChange={this.doCalculation2}
          />
          <br />
          <input type="submit" value="Click here"/>
          
        </form>
        <p>{this.state.total}</p>
        <p>
          You Entered first number as <h1> {this.state.firstNum} </h1>
          and second number as <h1> {this.state.secondNum} </h1>
        </p>
      </div>
    );
  }
}
