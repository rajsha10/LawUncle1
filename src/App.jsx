import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import About from './components/About';
import Features from './components/Features';
import './App.css'

function App() {
  return (
    <>
      <Router>
          <Header />
        <Routes>
          <Route exact path='/' element={<>
            <Container />
            <About />
            <Features />
          </>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App