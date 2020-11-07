import React, { Component } from 'react';
import "./OutputWindow.css";

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
               THIS IS WHERE THE STEPS WOULD BE
               <br/>
               FIRST STEP
               <br/>
               SECONDS STEP
               <br/>
               THIRD STEP
               <br/>
               SOLUTION
           </div>
       );  
    }
}

export default OutputWindow