import React, { Component } from 'react';
import "./ResultScreen.css";

class ResultScreen extends Component{
    constructor(){
        super();
        this.state = {
            name: "React",
        }
    }

    render(){
       let {result} = this.props;
       return(
           <div className="result-window">
               <p className="result">{result}</p>
           </div>
       );  
    }
}

export default ResultScreen