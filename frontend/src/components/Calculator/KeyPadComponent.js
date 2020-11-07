/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./KeyPadComponent.css";
import pi from './images/pi-mathematical-constant-symbol.svg';
import firstDerivative from './images/first-derivative.svg';
import OutputWindow from './OutputWindow';

class KeyPadComponent extends Component{
    constructor(){
        super();
        this.state = {
            name: "React",
            showOuputWindow: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name){
        console.log(name);
        switch(name){
            case "showOutputWindow":
                this.setState({ showOuputWindow: !this.state.showOuputWindow});
                break;
            default:
                break;
        }
    }
    
    render(){
        const { showOuputWindow } = this.state;
        return(
            <div className="buttons">
                <button className="calc-button"  name="sin(" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                <button className="calc-button"  name="cos(" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                <button className="calc-button"  name="tan(" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                
                <button className="calc-button"  name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="calc-button"  name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="calc-button"  name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                
                <button className="calc-button"  name="&#8508;" onClick={e => this.props.onClick(e.target.name)}><img src={pi} className="button-image"/></button>
                <button className="calc-button"  name="&#101;" onClick={e => this.props.onClick(e.target.name)}>e</button>
                <button className="calc-button"  name="sigma(" onClick={e => this.props.onClick(e.target.name)}>sigma</button>

                <button className="calc-button"  name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="calc-button"  name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="calc-button"  name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                
                <button className="calc-button" name="d/dx(" onClick={e => this.props.onClick(e.target.name)}><img src={firstDerivative} className="button-image"/></button>
                <button className="calc-button" name="&#8747;" onClick={e => this.props.onClick(e.target.name)}>integral</button>
                <button className="calc-button" name="limit(x->" onClick={e => this.props.onClick(e.target.name)}>limit</button>

                <button className="calc-button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="calc-button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="calc-button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>

                <button className="calc-button" name="&#8734;" onClick={e => this.props.onClick(e.target.name)}>infinity</button>
            
                <button className="calc-button" name="ln(" onClick={e => this.props.onClick(e.target.name)}>ln</button>
                <button className="calc-button" name="log(" onClick={e => this.props.onClick(e.target.name)}>log</button>
                
                <button className="calc-button" name="^(" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-superscript"></i></button>
                <button className="calc-button" name="&#8730;" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-square-root-alt"></i></button>
                
                <button className="calc-button" name="|" onClick={e => this.props.onClick(e.target.name)}>abs|x|</button>

                <button className="calc-button" name="modulus(" onClick={e => this.props.onClick(e.target.name)}>mod</button>
                <button className="calc-button" name="!" onClick={e => this.props.onClick(e.target.name)}>!</button>

                <button className="calc-button" name="+" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-plus"></i></button>
                <button className="calc-button" name="-" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-minus"></i></button>
                <button className="calc-button" name="*" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-times"></i></button>
                <button className="calc-button" name="/" onClick={e => this.props.onClick(e.target.name)}><i class="fas fa-divide"></i></button>
                
                
                <button className="calc-button" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="calc-button" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="calc-button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                
                <button className="calc-button" name="C" onClick={e => this.props.onClick(e.target.name)}>CLEAR</button>
                <button className="calc-button" name="CE" onClick={e => this.props.onClick(e.target.name)}>BACKSPACE</button>
                <button className="calc-button" name="ENTER" onClick={e => this.props.onClick(e.target.name)}>ENTER</button>
                
            </div>
        );
    }
}

export default KeyPadComponent