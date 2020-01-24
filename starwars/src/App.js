import React from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList"
import logo from './starw.png';
import styled from "styled-components";
import Form from './components/Form';



const Logo = styled.img`
width: 300px;
height: 150px;
`;
const App = () => {

  return (

    <div className="App">
      <Logo src={logo}/>
      {/* <h1 className="Header">React Wars</h1> */}
      <Form />
      <StarWarsList />
      
      

    </div>

  );
}
 
export default App;