import React from 'react';
import './App.css';
import Home from './pages/home';
import { 
  Routes, 
  Route 
} from "react-router-dom";
import BookmarkPage from './pages/bookmarkPage';
import BookPage from './pages/bookPage';
import ReadPage from './pages/readPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bookmark' element={<BookmarkPage />} />
      <Route path='/book' element={<BookPage />} />
      <Route path='/read' element={<ReadPage />} />
    </Routes> 
  );
}

export default App;
