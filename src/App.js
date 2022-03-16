import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./style.css";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  const handleHashChange = () => {
    setHash(window.location.hash);
  };

  useEffect(()=>{
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      // no need for cleanup here since we are never unmounting the App Component
    }
  },[]); // empty array means run only once to avoid adding multiple listeners hence no memory leaks

  return (
    <>
      <Header />
      {hash === "" && <Home />}
      {hash === "#home" && <Home />}
      {hash === "#about" && <About />}
      {hash === "#contact" && <Contact />}
    </>
  );
}

export default App;

