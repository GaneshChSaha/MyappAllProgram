import React, { Component } from 'react'

export default class ComponentLifeCycleDemo extends Component {
    constructor(){
        super();
        console.log('constructor called');
    }
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps called');
    }
    componentDidMount(){
        console.log('componentDidMount called');
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button> onClick={()=>{this.setState({name:'Vinay'})}}</button>
            </div>
        )
    }
}
