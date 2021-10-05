import React, { Component } from "react";
class ComponentY extends Component {
  constructor() {
    super();
    this.state={name:0};
  }

  doChange=(e)=>{
    this.setState=({name:e.target.value});
  }
  render() {
    return (
      <div>
        <h1>ComponentY</h1>
        <h2>Welcome{this.state.name}</h2>
        <h2>{this.state.name}</h2>
        <h2>{this.state.name}</h2>
        <input onChange={this.doChange} type={'text'} placeholder={'Enter your name'}/>
      </div>
    );
  }
}
export default ComponentY;
