import React, {Component, useState} from "react";
import logo from './logo.svg';
import Header from './components/header.jsx';
import InputFileUpload from './components/submit.jsx';
import Result from './components/result.jsx';
import Footer from './components/bottom_navigation.jsx';

import background from "./images/header.jpg";

export function App() {
  const [createdData, setCreatedData] = useState();
    // ↑親コンポーネントで使う：createdDataを更新する関数を宣言


  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <InputFileUpload
          id="try" setCreatedData={setCreatedData}
      />
      <Result
          id="submit" data={createdData}
      />
      <Footer/>
    </div>
  );
}

export default App;
