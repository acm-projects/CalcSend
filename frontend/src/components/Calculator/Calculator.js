import React, { Component } from 'react';
import  ResultScreen  from "./ResultScreen";
import  KeyPadComponent  from "./KeyPadComponent";
import './Calculator.css'
import OutputWindow from './OutputWindow';



class Calculator extends Component{

    constructor(){
        super();

        this.state = {
            result: "",
            name: "React",
            showOutputWindow: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name){
        console.log(name);
        switch(name){
            case "showOutputWindow":
                this.setState({ showOutputWindow: !this.state.showOutputWindow });
                break;
            default:
                break;
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
                result: "556/3"
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
        const { showOutputWindow } = this.state;
        return(
            <div className="calculator-body">
                <ResultScreen result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
                { showOutputWindow && <OutputWindow />}
                <button onClick={() => this.hideComponent("showOutputWindow")}>See steps...</button>
            </div>
        )
    }
}

export default Calculator