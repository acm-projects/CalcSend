import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import {Button} from "../Button"
import AutoCompeleteText from '../SearchBar/AutoCompleteText';
import '../SearchBar/AutoCompleteText';
import Logo from '../../images/side-page-logo.png';

class Navbar extends Component {
state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <img src={ Logo } id="calcsend-logo" alt="CalcSend Logo"/>
                </div>
                
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