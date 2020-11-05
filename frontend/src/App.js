import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Calculator from './components/Calculator/Calculator';
import Forum from './components/Forum/Forum';
import './App.css';
import './components/SearchBar/AutoCompleteText';
import SidePageLogo from './images/side-page-logo.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="test">
        <p className="calculator-title">Enter your problem...</p>
        <Calculator/>
      </div>
      
      <div className="middle-page">
        <Forum className="Forum"/>
        <img src={SidePageLogo} alt="ERROR" className="side-logo"/>
      </div>
    </div>
  );
}

export default App;
