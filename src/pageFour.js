import { useNavigate } from 'react-router-dom'; 
import React, { useState } from "react";
import './pageFour.css';


export function PageFour() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/pageOne'); 
    };
    return (
        <div className="PageFour">
            <div className="container">
                <div className="content">
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDcycG0zcmVocXlyMGl1cHFyeWh2dWFzOXpybGFheWlpMDlkcGVzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dJYoOVAWf2QkU/giphy.gif" alt="Centered GIF" className="centered-gif" />
                    <h1 className="text-below">I can't believe you would say that.....</h1>
                    <div className="goback-container-button-container">
                        <button className="yes-button" onClick={handleClick}>Please try again :(</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

