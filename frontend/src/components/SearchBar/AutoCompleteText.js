import React from 'react';
import './AutoCompleteText.css'

export default class AutoCompeleteText extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            'Quadratics',
            "Pathag",
            'Mathhhh',
            'Meaath',
            'mathematics',
            'ma',
            'mahahaha',
        ];
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected(value){
        this.setState(() => ({
            text: value,
            suggestion: [],
        }))
    }

    renderSuggestions(){
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul className = "filtered-list">
                {suggestions.map((item) => <li className = "filtered-list-items" onClick ={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    
    render(){
        const { text } = this.state;
        return(
            <div>
                <input className = "nav-search" value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}