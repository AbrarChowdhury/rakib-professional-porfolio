import React from 'react';
import './Components/faIcons/index'
import './App.css';
import Gallery from './Sections/Gallery/gallery'
import HeroPage from './Sections/heroPage/HeroPage'
import 'materialize-css/dist/css/materialize.min.css'
function App() {
  return (
    <div className="App">
      <HeroPage/>
      <Gallery/>
    </div>
  );
}

export default App;
