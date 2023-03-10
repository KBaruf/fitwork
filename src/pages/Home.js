import React, { useCallback } from 'react';
import { useState, useEffect, createContext } from 'react';
import { Box } from '@mui/system';
import { HeroBanner, SearchExercises, Exercises } from '../components';
import { FetchData, exercise_options } from '../utils/FetchData';
export const ExerContext = createContext();
const Home = () => {
  const [searchExValue, setSearchExValue] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  // fetch exercise data from API
  const allExercises = FetchData(exercise_options('https://exercisedb.p.rapidapi.com/exercises'));
  // fetch Body Parts
  const allBodyParts = FetchData(exercise_options('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'));
  useEffect(() => {
    setExercises(allExercises);
    setBodyParts(allBodyParts);
  }, [allExercises, allBodyParts]);
  return (
    <ExerContext.Provider value={{ exercises, setExercises, setBodyParts, bodyParts, searchExValue, setSearchExValue }}>
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    </ExerContext.Provider>
  );
};

export default Home;
