import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageOne } from './pageOne';
import { PageTwo } from './pageTwo';
import { PageThree } from './pageThree';
import { PageFour } from './pageFour';





function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/pageOne" element={<PageOne />} />
            <Route path="/pageTwo" element={<PageTwo />} />
            <Route path="/pageThree" element={<PageThree />} />
            <Route path="/pageFour" element={<PageFour />} />
          </Routes>
      </Router>
      </div>
  );
}

export default App;
