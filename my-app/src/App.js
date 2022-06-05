import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ReceipesPage from "./components/ReceipesPage";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  const childToParent = (childdata) => {
    setIsHomeVisible(childdata);
  };
  return (
    <div>
      <Header />
      <Navbar childToParent={childToParent} />
      <hr></hr>
      {!isHomeVisible && <AboutMe />}
      {isHomeVisible && <ReceipesPage />}
    </div>
  );
}

export default App;
