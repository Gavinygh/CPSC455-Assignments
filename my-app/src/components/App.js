import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import ReceipesPage from "./ReceipesPage";
import { useState } from "react";
import Navbar from "./Navbar";
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
