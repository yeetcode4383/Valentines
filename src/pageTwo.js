import './pageTwo.css';
import { useNavigate } from 'react-router-dom'; 



export function PageTwo() {
  const images = new Array(10).fill(0); // Number of falling images
  const navigate = useNavigate(); 
  const handleClick = () => {
      navigate('/pageThree'); 
  };
  const goback = () => {
    navigate('/pageOne');
  }

  return (
      <div className="PageTwo">
        <div className="container">
          <div className="content">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRyYXZ1d3IzZHk4YWE2dnA5bHl3NGE2d2dkZjlvcWN4bDdsbDJwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GTHVmLdqLOGmA/giphy.gif" alt="Centered GIF" className="centered-gif" />
            <h1 className="text-below">Wowiee where would you like to go?</h1>
            <div className="selection-container">
              <button className="yes-button" onClick={handleClick}>Option 1</button>
              <button className="yes-button" onClick={handleClick}>Option 2</button>
              <button className="yes-button" onClick={handleClick}>Option 3</button>
              <button className="yes-button" onClick={handleClick}>Option 4</button>
            </div>
            <div className="goback-container">
              <button className="yes-button" onClick={goback}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
  );
}

