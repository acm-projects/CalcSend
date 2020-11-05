import React, { Component } from 'react';
import  ResultScreen  from "./ResultScreen";
import  KeyPadComponent  from "./KeyPadComponent";
import './Calculator.css'



class Calculator extends Component{

    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "ENTER"){
            this.calculate()
        } else if(button === "C"){
            this.reset()
        } else if(button === "CE"){
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    
    calculate = () => {
        try{
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render(){
        return(
            <div className="calculator-body">
                <ResultScreen result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        )
    }
}

export default Calculator