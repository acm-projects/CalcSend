import React, { Component } from 'react';
import "./OutputWindow.css";
import firstSolution from './images/first-solution.jpg';

class OutputWindow extends Component{
    constructor(){
        super();
        this.state = {
            name: "React"
        };
    }
    
    render(){
       return(
           <div className="result-window">
               Your solution is below!
               <br/>
               <br/>
               <img src={firstSolution} alt="LOADING..." />
           </div>
       );  
    }
}

export default OutputWindow