import React, { useContext, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import { ExerContext } from '../pages/Home';
import { FetchData, exercise_options } from '../utils/FetchData';
import Filter from '../utils/Filter';
const BodyParts = ({ item }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const { exercises, setExercises, searchExValue, setSearchExValue } = useContext(ExerContext);

  const allExercises = FetchData(exercise_options('https://exercisedb.p.rapidapi.com/exercises'));
  const handlerClick = (e) => {
    setSelectedBodyPart(item);
    // Filter based on categories
    const searchedExercises = Filter(allExercises, item);
    setExercises(searchedExercises);
    //////////////////////////////////////////////

    if (item === 'all') setExercises(allExercises);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };
  return (
    <>
      <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
          flexDirection: 'row',
          borderTop: searchExValue === item || selectedBodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px',
        }}
        onClick={handlerClick}
      >
        <img src={Icon} alt='item' style={{ width: '40px', height: '40px' }} />
        <Typography fontSize='24px' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize' pt='4px' textAlign='center'>
          {' '}
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyParts;
