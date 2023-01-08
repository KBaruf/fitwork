import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
import { targetMuscles_options, equipmentsExercises_options } from '../utils/FetchData';

const SimilarExercises = ({ target, equipment }) => {
  const [exerciseTargetMuscle, setExerciseTargetMuscle] = useState([]);
  const [exerciseByEquipments, setExerciseByEquipments] = useState([]);

  const fetchSimilarExercise = async () => {
    const muscleTarget = targetMuscles_options(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`);
    const res = await axios.request(muscleTarget);
    const targetMuscle = res.data;
    setExerciseTargetMuscle(targetMuscle);
  };
  const fetchExerciseByEquipments = async () => {
    const equipmentExercises = equipmentsExercises_options(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`);
    const res = await axios.request(equipmentExercises);
    const exerciseByEquipment = res.data;
    setExerciseByEquipments(exerciseByEquipment);
  };

  useEffect(() => {
    target && fetchSimilarExercise();
    equipment && fetchExerciseByEquipments();
  }, [target, equipment]);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' textAlign='center'>
        Exercises that Target the Same Muscle Group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {exerciseTargetMuscle?.length ? <HorizontalScrollBar exerciseTargetMuscle={exerciseTargetMuscle} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
