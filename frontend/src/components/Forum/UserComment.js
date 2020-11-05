import React, { Component } from 'react';
import './UserComment.css'
import temp1 from './profilePictures/template-account-photopng.png';
import temp2 from './profilePictures/temp2.jpg';
import temp3 from './profilePictures/Megamind.png';
import temp4 from './profilePictures/drake.jpg';

class UserComment extends Component{
    
    render(){
        return(
            <div className="comments">
                <div className="comment-content">
                    <img src={temp1} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                            The Quadratic Formula, a Theory or Reality???
                        </div>
                        
                        <div className="content">
                            Okay, so let's act like this is a real comment and we're going off on the quadratic formula 
                            (your choice if for or against, but she mad whichever way). We rollin' with our commment. We've 
                            got a lot to say. Man, the quadratic formula...
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp2} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                            Proper Use of Megamind Formula
                        </div>
                        
                        <div className="content">
                            Okay, so let's pretend again that this is a real post. Have you guys seen "Megamind"? It's 
                            interesting, not a favorite, but for some reason that's hovering over my thoughts... Send help?
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp3} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                           Wow, this site is amazing!
                        </div>
                        
                        <div className="content">
                            Math math math! Math? Math. MA-MA-MA-Math! We really love math here. Don't play. Math.
                            Guess what? Math.
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp4} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                        Lorem ipsum dolor sit amet, consectetur...
                        </div>
                        
                        <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consequat enim, vitae lobortis magna. Fusce eu sodales metus. Fusce placerat, eros ut sagittis rhoncus, urna ex dictum eros, at gravida urna purus in lorem. Morbi a euismod felis. Nulla faucibus odio eget ipsum eleifend, nec iaculis nisl placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pulvinar justo purus, et commodo turpis ultrices ac.
                        </div>
                    </div>
                </div>
            </div>
        );  
     }
 }
 
 export default UserComment