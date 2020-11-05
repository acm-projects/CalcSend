import React, { Component } from 'react';
import './userProfilePic.css'
import pic from './profilePictures/template-account-photopng.png';


class UserProfilePic extends Component{
    render(){
        return(
            <div className="forum-space">
                <img src={pic} alt="NOT SHOWN" className="account-image"/>
            </div>
        );  
     }
 }
 
 export default UserProfilePic;