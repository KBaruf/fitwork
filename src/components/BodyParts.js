import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyParts = ({ item, searchValue, setSearchedExData }) => {
  return (
    <>
      <Box
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
        <img src={Icon} alt='dumpbell' styles={{ width: '40px', height: '40px' }} />
      </Box>
    </>
  );
};

export default BodyParts;
