import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { FetchData, exercise_options } from '../utils/FetchData';
import { Details, ExercisesVideos, SimilarExercises } from './index';
const ExerciseDetail = () => {
  return (
    <Box>
      <Details />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
