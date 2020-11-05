import React, { Component } from 'react';
import "./ResultScreen.css";

class ResultScreen extends Component{
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