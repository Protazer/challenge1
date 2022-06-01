//Librairies import
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages import
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
     margin:0;
     padding:0;
     box-sizing: border-box;
  }
`;

export default App;
