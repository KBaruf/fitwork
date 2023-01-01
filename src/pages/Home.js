import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import { HeroBanner, SearchExercises, Exercises } from '../components';
import FetchData from '../components/FetchData';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises ExerciseData={FetchData} />
      <Exercises />
    </Box>
  );
};

export default Home;
