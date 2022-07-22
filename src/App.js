import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />

    </div>    
  );
}

export default App;
