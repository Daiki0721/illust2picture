import React, {Component, useState} from "react";
import logo from './logo.svg';
import Header from './components/header.jsx';
import InputFileUpload from './components/submit.jsx';
import Result from './components/result.jsx';
import Footer from './components/bottom_navigation.jsx';

import background from "./images/header.jpg";

export function App() {
  const [createdImage, setCreatedImage] = useState();
    // ↑親コンポーネントで使う：createdImageを更新する関数を宣言
    // ↓子コンポーネントから受け取った値で親コンポーネントのcreatedImageを更新する関数A
    const handleValueChange = (newValue) => {
      setCreatedImage(newValue);
    }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <InputFileUpload
          id="try" handleValueChange={handleValueChange}
      />
      <Result
          id="submit" data={createdImage}
      />
      <Footer/>
    </div>
  );
}

export default App;
