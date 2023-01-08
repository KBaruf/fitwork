import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { FetchData, exercise_options, youtube_options, targetMuscles_options, equipmentsExercises_options } from '../utils/FetchData';
import { Details, ExercisesVideos, SimilarExercises } from './index';

const ExerciseDetail = () => {
  const [exerciseDetailData, setExerciseDetailData] = useState([]);
  const [exerciseDetailsVideos, setExerciseDetailsVideos] = useState('');
  const [muscleTarget, setMuscleTarget] = useState('');

  const { id } = useParams();

  // fetch require Exercise Data
  const fetchExerciseDetails = FetchData(exercise_options(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`));
  const { target, name, equipment } = exerciseDetailData;
  const fetchExerciseVideos = FetchData(youtube_options(`${name} exercises videos`));

  useEffect(() => {
    setExerciseDetailData(fetchExerciseDetails);
    setExerciseDetailsVideos(fetchExerciseVideos);
    setMuscleTarget(target);
  }, [fetchExerciseVideos, name, target]);
  /////////////////////////////////////////////////////////////////////////////

  return (
    <Box>
      <Details singleExerciseDet={exerciseDetailData} />
      <ExercisesVideos exerciseDetailsVideos={exerciseDetailsVideos} name={name} />
      <SimilarExercises target={muscleTarget} equipment={equipment} />
    </Box>
  );
};

export default ExerciseDetail;
