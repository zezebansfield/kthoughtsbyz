import React, { Component } from 'react';
import IgImage from '../assets/instagram.png'
import TiktokImage from '../assets/tik-tok.png'
import ProfilePhoto from '../assets/profile.png'


const Home = () => {    

  const urls = {
    igBlog: "https://www.instagram.com/arzsign",
    igKdrama: "https://www.instagram.com/kthoughtsbyz",
    tiktokBlog: "https://www.tiktok.com/@zaiwinkz",
    tiktokKdrama: "https://www.tiktok.com/@kthoughtsbyz",
  };
  

    return (
      <div className="main-content home">
        <div className='heading'>
          <img className='profile-photo' src={ProfilePhoto}/>
          <h2 className='username-header'>@kthoughtsbyz</h2>
          <span className='subtitle'>✩‧˚ k+cdrama discourse ˚✩‧ </span>
          <span className='subtitle'> 💌 sign.zainab@gmail.com</span>
        </div>
        <hr />
        <div className='buttons-container'>
          <button className='social-links' onClick={() => {window.open(urls.igKdrama);}}>
          <img className='social-icons' src={IgImage}/>
          kdrama
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.igBlog);}}>
          <img className='social-icons' src={IgImage}/>
          fashion + lifestyle
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.tiktokKdrama);}}>
          <img className='social-icons' src={TiktokImage}/>
          kdrama
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.tiktokBlog);}}>
          <img className='social-icons' src={TiktokImage}/>
          fashion + lifestyle
          </button>  
        </div>
     
      </div>
    );
  }

export default Home;