import React, { Component } from "react";
import logo from './logo.svg';
import Header from './components/header.jsx';
import InputFileUpload from './components/submit.jsx';
import Reslut from './components/result.jsx';
import Footer from './components/bottom_navigation.jsx';

import background from "./images/header.jpg";

class App extends Component {
  render() {
    return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <InputFileUpload
          id="try"
      />
      <Reslut
          id="submit" 
      />
      <Footer/>
    </div>
  );
 }
}

export default App;
