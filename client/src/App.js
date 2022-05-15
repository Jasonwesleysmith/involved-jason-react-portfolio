import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About'
import Contact from './components/Contact';

const App = () => {
  //javascript here
  const [page, setPage] = useState('About')

  return (
    <>
        <Header page={page} setPage={setPage} />
        {page === "About" ?
        <About /> :
        page === "Portfolio" ?
        <Portfolio /> :
        page === "Contact" ?
        <Contact /> :
        <p>404: This page was not found</p>
    } 
        <Footer />
    </>
  );
}


export default App;
