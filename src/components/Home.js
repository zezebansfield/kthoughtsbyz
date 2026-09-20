import React, { Component } from 'react';
import IgImage from '../assets/instagram.png'
import TiktokImage from '../assets/tik-tok.png'


const Home = () => {    

  const urls = {
    igBlog: "https://www.instagram.com/arzsign",
    igKdrama: "https://www.instagram.com/kthoughtsbyz",
    tiktokBlog: "https://www.tiktok.com/@zaiwinkz",
    tiktokKdrama: "https://www.tiktok.com/@kthoughtsbyz",
  };
  

    return (
      <div className="main-content home">
        <h2 className='username-header'>@kthoughtsbyz</h2>
        <p className='subtitle'>₊✩‧₊˚౨ All things kdrama! (and a little cdrama too) ৎ˚₊✩‧₊ </p>
        <p className='subtitle'> 💌 sign.zainab@gmail.com</p>
        <hr />
        <button className='social-links' onClick={() => {window.open(urls.igKdrama);}}>
          <img src={IgImage}/>
          @kthoughtsbyz - Kdrama Reviews
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.igBlog);}}>
          <img src={IgImage}/>
          @arzsign - Personal / Fashion Blog
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.tiktokKdrama);}}>
          <img src={TiktokImage}/>
          @kthoughtsbyz - Kdrama Reviews
          </button>
          <button className='social-links' onClick={()=> {window.open(urls.tiktokBlog);}}>
          <img src={TiktokImage}/>
          @zaiwinkz Fashion / Lifestyle Blog
          </button>       
      </div>
    );
  }

export default Home;