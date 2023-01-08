import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { FetchData, exercise_options, youtube_options } from '../utils/FetchData';
import { Details, ExercisesVideos, SimilarExercises } from './index';

const ExerciseDetail = () => {
  const [exerciseDetailData, setExerciseDetailData] = useState([]);
  const [exerciseDetailsVideos, setExerciseDetailsVideos] = useState([]);
  const { id } = useParams();

  const exerciseQuery = exerciseDetailData.name;
  const fetchExerciseDetails = FetchData(exercise_options(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`));

  const fetchExerciseVideos = FetchData(youtube_options(`${exerciseQuery} exercises videos`));

  useEffect(() => {
    setExerciseDetailData(fetchExerciseDetails);
    setExerciseDetailsVideos(fetchExerciseVideos);
  }, [fetchExerciseDetails, fetchExerciseVideos]);
  return (
    <Box>
      <Details singleExerciseDet={exerciseDetailData} />
      <ExercisesVideos exerciseDetailsVideos={exerciseDetailsVideos} name={exerciseQuery} />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
