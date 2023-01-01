import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, ExerciseDetail, Footer } from './components';
import { Home } from './pages';
const App = () => {
  return (
    <>
      <Box width='400px' sx={{ width: { xl: '1288px' } }} m=' 0 auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default App;
