import React, { Component } from 'react';
import "./About.css";
import profilePic from "./assets/profilePic.HEIC";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              
              alt="Profile Pic"
              >src = {profilePic}</img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elizabeth Cucuzzella</div>
            <div className="brief_description">
              I am a sophomore studying data science and mathematics at Tufts University.
            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}