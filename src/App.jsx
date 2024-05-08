import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="w-[1150px] mx-auto border border-faint-white px-[2rem] py-[3rem]">
      <Intro />

      <Skills />

      <Footer />
    </div>
  );
};

export default App;
