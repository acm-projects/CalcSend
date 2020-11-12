import React, { Component } from 'react';
import './FooterContent.css';
import logo from './side-page-logo.png';

class FooterContent extends Component{
    render(){
        return(
            <div className="footer-container">
                <div className="team-container">
                    <img src={logo} alt="ERROR" className="team-photo"/>
                </div>
                <div className="contact-container">
                    <div className="company-container">
                        Company
                        <br/>
                        Home
                        <br/>
                        Features
                        <br/>
                        Articles
                        <br/>
                        News
                    </div>
                    <div className="product-container">
                        Product
                        <br/>
                        FAQ
                        <br/>
                        Help
                        <br/>
                        Developers
                        <br/>
                        Status
                    </div>
                    <div className="Community">
                        Community
                        <br/>
                        Events
                        <br/>
                        Social
                        <br/>
                        Partner Programs
                    </div>
                </div>  
            </div>
        );  
     }
 }
 
 export default FooterContent