import React, { Component } from 'react';
import './NewPost.css'

class NewPost extends Component{
    
    render(){
        return(
            <div>
                <button className="add-post-button">
                    <i class="fas fa-plus"></i>
                    Join the discussions...
                </button>
            </div>
        );  
     }
 }
 
 export default NewPost