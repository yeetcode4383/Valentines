import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './pageThree.css';
import tsukki from './assets/tsukki.png'


export function PageThree() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/pageTwo'); 
    };
    return (
        <div className="PageThree">
            <div className="container">
                <div className="content">
                    <img src={tsukki} alt="Centered GIF" className="tsukki" />
                    <h1 className="text-below">An all expensed trip to Mastro's Steakhouse!!!!!!!!!!!!!!!</h1>
                    <a className="hyperlink" href="https://www.yelp.com/biz/mastros-steakhouse-costa-mesa-2" className="text-below">Menu</a>
                    <div className="goback-container">
                        <button className="yes-button" onClick={handleClick}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

