import React from 'react';
import './App.css';

function App() {
  const title = 'CourseCube';
  const trainer="Srinivas Dande Sir";
  return (
    <div className="myclass">
      <h2>Welcome to {title} !</h2>
      <h3>You are learning ReactJS 16 from {trainer} !</h3>
    </div>
  );
}

export default App;
