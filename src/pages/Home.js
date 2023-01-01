import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import { HeroBanner, SearchExercises, Exercises } from '../components';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
