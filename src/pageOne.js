import { useNavigate } from 'react-router-dom'; 
import React, { useState } from "react";
import './pageOne.css';


export function PageOne() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/pageTwo'); 
    };
    const handleNoclick = () => {
        navigate('/pageFour');
    }

    return (
        <div className="PageOne">
            <div className="container">
                <div className="content">
                    <img src="https://media.giphy.com/media/eZsKqkZUEM5vG/giphy.gif?cid=790b7611x3sfetipbwaxgqkq2wg0eblpaib060xpr5nce0f8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Centered GIF" className="centered-gif" />
                    <h1 className="text-below">Will you be my Valentines?</h1>
                    <div className="button-container">
                        <button className="yes-button" onClick={handleClick}>Yes</button>
                        <button className="no-button" onClick={handleNoclick}>No</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

