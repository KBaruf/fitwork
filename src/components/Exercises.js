import { useState, useContext, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { ExerContext } from '../pages/Home';
import ExerciseCard from './ExerciseCard';

const Exercises = () => {
  const { exercises, setExercises, bodyParts, searchExValue, searchedExData } = useContext(ExerContext);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 8;

  const indexOfLastEx = currentPage * exercisePerPage;
  const indexOfFirstEx = indexOfLastEx - exercisePerPage;
  const currentEx = exercises.slice(indexOfFirstEx, indexOfLastEx);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px' textAlign='center'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', sx: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {currentEx.map((exercise, index) => {
          return (
            <>
              <ExerciseCard key={crypto.randomUUID()} exercise={exercise} />
            </>
          );
        })}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 8 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={(event, value) => {
              paginate(event, value);
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
