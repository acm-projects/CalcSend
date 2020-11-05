import React, { Component } from 'react';
import './Forum.css'
import UserComment from './UserComment';
import NewPost from './NewPost';

class Forum extends Component{
    render(){
        return(
            <div className="forum-space">
                <div className="forum-identity">
                    <div className="forum-title">
                        FORUM
                    </div>
                    <br></br>
                    <div className="forum-description">
                        See what others have to say...
                    </div>
                </div>
                <UserComment />
                <NewPost />
            </div>
        );  
     }
 }
 
 export default Forum