import React, { Component } from 'react';
import "./OutputWindow.css";
// import firstSolution from './images/first-solution.jpg';

class OutputWindow extends Component{
    constructor(){
        super();
        this.state = {
            name: "React"
        };
    }
    
    render(){
       if (this.props.show) {
       
            return(
            <div className="result-window">
                <center>
                        Your solution is below!
                        <br/>
                        <br/>
                        <img src={this.props.outputSteps} alt="LOADING..." style={{maxWidth: '80vw'}} />
                </center>
            </div>
        )
       } else return null  
    }
}

export default OutputWindow