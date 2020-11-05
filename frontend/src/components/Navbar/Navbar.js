import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import {Button} from "../Button"
import AutoCompeleteText from '../SearchBar/AutoCompleteText';
import '../SearchBar/AutoCompleteText';

class Navbar extends Component {
state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">CalcSend<i className="fas fa-calculator"></i></h1>
                <AutoCompeleteText className="nav-searchbar"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <ul className = 'nav-account'>
                    <i className="far fa-user-circle"></i>
                    <Button>Log in</Button>
                </ul>
            </nav>
        )
    }
}

export default Navbar