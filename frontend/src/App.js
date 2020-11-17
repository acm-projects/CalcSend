import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Calculator from './components/Calculator/Calculator';
import Forum from './components/Forum/Forum';
import FooterContent from './components/FooterContent/FooterContent';
import './App.css';
import './components/SearchBar/AutoCompleteText';
import SidePageLogo from './images/side-page-logo.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="test"> */}
      <center>
        <p className="calculator-title">Enter your problem...</p>
      </center> 
        <Calculator/>
      {/* </div> */}
      
      <div className="middle-page">
        {/* <div style={{width: '70vw'}}> */}
            <Forum className="Forum"/>
        {/* </div> */}
        <div style={{width:'10%', display: 'flex', justifyContent: 'center'}}>
            <img src={SidePageLogo} alt="ERROR" className="side-logo"/>
        </div>
      </div>

      <FooterContent />
    </div>

  );
}

export default App;
