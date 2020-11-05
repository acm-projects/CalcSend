import React, { Component } from 'react';
import './UserComment.css'
import temp1 from './profilePictures/sanjeev-account-image.jpg';
import temp2 from './profilePictures/ruthvik-account-image.jpg';
import temp3 from './profilePictures/aeron-account-image.jpg';
import temp4 from './profilePictures/abigail-account-image.png';

class UserComment extends Component{
    
    render(){
        return(
            <div className="comments">
                <div className="comment-content">
                    <img src={temp1} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                            The History of the Quadratic Formula
                        </div>
                        
                        <div className="content">
                            We all remember high school. We all also remember having to memorize the quadratic formula, but 
                            do you remember where the quadratic formula came from? I've been looking into this and I found some 
                            pretty interesting things about how the quadratic formula came to be...
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp2} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                            Best way to teach integrals, Opinion Piece
                        </div>
                        
                        <div className="content">
                            I've been talking with other students and came to a startling realization about integrals: we had 
                            no clue what we were doing. Turns out integrals are paramount, so I've been wondering what makes the 
                            most sense to everyone else? I've heard some people...
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp3} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                           Permutations versus combinations
                        </div>
                        
                        <div className="content">
                            Does anyone have any idea how to keep the permutation and combination formulas clearly different when 
                            studying the two? I've played around with putting different numbers into both -- I've worked through 
                            textbook problems, but I still...
                        </div>
                    </div>
                </div>

                <div className="comment-content">
                    <img src={temp4} className="user-img" alt="ERROR"/>
                   
                    <div className="text">
                        <div className="header">
                        An Overview of Strong induction
                        </div>
                        
                        <div className="content">
                        To prove that P(n) is true for all integers n, where P(n) is a propositional function, 
                        we need to verify that P(1) is true and then show that the conditional statement [P(1) 
                        ^ P(2) ^ P(3) ^ ... ^ P(k)] towards P(k+1) is true for all positive...
                        </div>
                    </div>
                </div>
            </div>
        );  
     }
 }
 
 export default UserComment