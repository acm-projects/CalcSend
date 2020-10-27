import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Calculator from './components/Calculator/Calculator';
import './App.css';
import './components/SearchBar/AutoCompleteText';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-Component">
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
