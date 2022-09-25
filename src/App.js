import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

import './style.css';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash);
    });
  }, []);

  const router = {
    '#home': <Home />,
    '#about': <About />,
    '#contact': <Contact />,
  };

  return (
    <>
      <Header />
      {router[hash] ?? router['#home']}
    </>
  );
}

export default App;
