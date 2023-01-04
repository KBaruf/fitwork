import React, { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import '../App.css';
const BodyParts = ({ item, searchValue, setSearchedExData }) => {
  return (
    <>
      <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
          flexDirection: 'row',
          borderTop: searchValue === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px',
        }}
        onClick={() => {
          setSearchedExData(searchValue);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
      >
        <img src={Icon} alt='item' style={{ width: '40px', height: '40px' }} data-id='item' />
        <Typography fontSize='24px' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize' pt='4px' textAlign='center'>
          {' '}
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyParts;
