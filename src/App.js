import React from 'react';
import './App.css';

import Start from "./components/Start";
import Header from "./components/Header";
import Slider from "./components/Slider";
import About from "./components/About";
import BuildBy from "./components/BuildBy";
import BuildBy2 from "./components/BuildBy2";
import Last from "./components/Last";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lines from "./components/Lines";
import End from "./components/End";

function App() {
  return (
    <div className="App">
      <Start />
      <Header />
      <Slider />
      <About />
      <BuildBy />
      <BuildBy2 />
      <Last />
      <Contact />
      <Lines />
      <Footer />
      <End />
    </div>
  );
}

export default App;
