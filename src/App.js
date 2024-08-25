import React, { Component } from "react";
import logo from './logo.svg';
import Header from './components/header.jsx';
import InputFileUpload from './components/submit.jsx';
import FixedContainer from './components/result.jsx';

class App extends Component {
  render() {
    return (
    <>
    　　<Header/>
  　　  <InputFileUpload
     　　   id="try"
        />
     　　<FixedContainer/>
    </>
  );
 }
}

export default App;
