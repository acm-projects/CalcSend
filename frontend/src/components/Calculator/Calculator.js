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
            showOutputWindow: false,
            solved: false,
            returnJson: {
                original: null,
                steps: null,
                solution: null
            }
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

        let equation = encodeEquation(this.state.result)
        fetch(`http://api.wolframalpha.com/v2/query?appid=RPVQ5Q-AYY7U2JV73&input=${equation}&podstate=Step-by-step%20solution&podstate=Exact%20forms&podstate=Exact%20form&format=image&output=json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // debugger
                let input = data.queryresult.pods.find(pod => pod.title === "Input" || pod.id === "Input").subpods[0].img.src
                let solution = data.queryresult.pods.find(pod => pod.title === "Solutions" || pod.title === "Results").subpods[0].img.src
                let result = data.queryresult.pods.find(pod => pod.title === "Solutions" || pod.title === "Results").subpods[0].img.title
                let steps = data.queryresult.pods.find(pod => pod.title === "Solutions" || pod.title === "Results").subpods[1].img.src
                this.setState({
                    solved: true,
                    result: result,
                    returnJson: {
                        original: input,
                        steps: steps,
                        solutions: solution,
                    }
                })
            })
            .catch(err => console.log(err))
    };

    reset = () => {
        this.setState({
            result: "",
            showOutputWindow: false,
            solved: false,
            returnJson: {
                original: null,
                steps: null,
                solutions: null
            }
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
                <ResultScreen result={this.state.result} outputImg={this.state.returnJson.original}/>
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