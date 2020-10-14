import React from 'react';
import './Components/faIcons/index'
import './App.css';
import Gallery from './Sections/Gallery/gallery'
import SideBar from './Sections/SideBar/sideBar'
import 'materialize-css/dist/css/materialize.min.css'
function App() {
  return (
    <div className="App">
    <div className="sideBarInfo"><SideBar/></div>
      
      <div className="area">
      <div className="side-section"></div>
      <div className="gallery-section"><Gallery/></div>
      </div>
      
    </div>
  );
}

export default App;
