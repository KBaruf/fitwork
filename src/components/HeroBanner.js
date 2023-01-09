import { Box, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import HeroBannerImg from '../assets/images/workout.jpg';
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212 px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px 20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness
      </Typography>
      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px'>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>
        Checkout the most Effective Exercises
      </Typography>
      <Stack>
        <a href='#exercises' style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
          Explore Exercises
        </a>
      </Stack>
      <Typography fontWeight={600} color='#ff2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize='200px'>
        Exercises
      </Typography>
      <img src={HeroBannerImg} alt='woman working out' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
