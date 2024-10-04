import React, { Component } from "react";
import logo from './logo.svg';
import Header from './components/header.jsx';
import InputFileUpload from './components/submit.jsx';
import Reslut from './components/result.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
    <>
    <Header/>
    <InputFileUpload
        id="try"
    />
     <Reslut/>
     <Footer/>
    </>
  );
 }
}

export default App;
