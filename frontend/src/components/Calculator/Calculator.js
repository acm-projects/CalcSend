import React, { Component } from 'react';
import  ResultScreen  from "./ResultScreen";
import  KeyPadComponent  from "./KeyPadComponent";
import './Calculator.css'
import OutputWindow from './OutputWindow';
import { encodeEquation } from '../../helpers/encoder';


class Calculator extends Component{

    constructor(){
        super();

        this.state = {
            result: "",
            name: "React",
            showOutputWindow: false,
            solved: false,
            returnJson: {}
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name){
        console.log(name);
        switch(name){
            case "showOutputWindow":
                this.setState(prevState => ({ 
                    showOutputWindow: !prevState.showOutputWindow 
                }))
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
            this.setState(prevState => ({
                result: prevState.result + button
            }))
        }
    };
    
    calculate = () => {
        // Future Fetch call coming here
        // const url = `http://localhost:3001/api/solver/?equation=${this.state.result}` // Cameron, how do we do this???
        fetch(`http://api.wolframalpha.com/v2/query?appid=RPVQ5Q-AYY7U2JV73&input=${this.state.result}&podstate=Step-by-step%20solution&podstate=Exact%20forms&podstate=Exact%20form&format=image&output=json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    solved: true,
                    returnJson: {
                        original: data.queryresult.pods[0].subpods[0].img.src,
                        steps: data.queryresult.pods[1].subpods[0].img.src,
                        solutions: "the solution is here",
                    }
                })
            })
            .catch(err => console.log(err))
    };

    reset = () => {
        this.setState({
            result: "",
            showOutputWindow: false,
            solved: false
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

            { 
                this.state.solved
                
                ?  
                    <>
                        <OutputWindow outputSteps={this.state.returnJson.steps} show={showOutputWindow}/>
                            <button onClick={() => this.hideComponent("showOutputWindow")}>
                                {this.state.showOutputWindow ? "Hide steps" : "See steps..."}
                            </button>
                    </>  
                : 
                    null
            }

            </div>
        )
    }
}

export default Calculator