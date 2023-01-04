import React, { useCallback } from 'react';
import { useState, useEffect, createContext } from 'react';
import { Box } from '@mui/system';
import { HeroBanner, SearchExercises, Exercises } from '../components';
import { FetchData, exercise_options } from '../utils/FetchData';
export const ExerContext = createContext();
const Home = () => {
  const [searchedExData, setSearchedExData] = useState([]);

  // fetch exercise data from API
  const exercises = FetchData(exercise_options('https://exercisedb.p.rapidapi.com/exercises'));

  // fetch Body Parts
  const bodyParts = FetchData(exercise_options('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'));

  return (
    <ExerContext.Provider value={{ exercises, bodyParts, searchedExData, setSearchedExData }}>
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    </ExerContext.Provider>
  );
};

export default Home;
