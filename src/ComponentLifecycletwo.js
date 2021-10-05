import React, { Component } from 'react'

export default class ComponentLifecycletwo extends Component {
    constructor(props){
        super(props);
        this.state={myHero:"My Mother"};
    }
    changeSuperHero=()=>{
        this.setState({myHero:'Shri Ram'})
    }
    shouldComponentUpdate(){
        return true;
    }
    render() {
        return (
            <div>
                <h1>My Super Hero is {this.state.myHero}</h1>
                <button type="button" onClick={this.changeSuperHero}>Change Super Hero</button>             
            </div>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({myHero:'Jai Hanuman'})
        },3000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("root").innerHTML="Before the update , the myHero was"+ prevState.myHero;
    }

    componentDidUpdate(){
        document.getElementById("root").innerHTML="The updated myHero is "+ this.state.myHero;
    }
}
