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

    //    if (this.props.outputImg) {
           return (

    //             <div className="result-window">
    //                 <img className="result" src={this.props.outputImg}/>
    //             </div>
    //        )
    //    } else {

    //        return(
               <div className="result-window">
                   <p className="result">{result}</p>
               </div>
           )
    //    }
    }
}

export default ResultScreen