import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { FetchData, exercise_options } from '../utils/FetchData';
import { Details, ExercisesVideos, SimilarExercises } from './index';

const ExerciseDetail = () => {
  const [exerciseDetailData, setExerciseDetailData] = useState([]);
  const { id } = useParams();
  const fetchExerciseDetails = FetchData(exercise_options(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`));
  useEffect(() => {
    setExerciseDetailData(fetchExerciseDetails);
  }, [fetchExerciseDetails]);
  return (
    <Box>
      <Details singleExerciseDet={exerciseDetailData} />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
