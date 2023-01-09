import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import logo from '../assets/images/fitwork_logo-bg.png';
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={logo} alt='logo' width='200px' height='41px' />
      </Stack>
      <Typography variant='h5' pb='40px' mt='30px' textAlign='right' pr='30px'>
        Made with ❤️ by Baruf Kosgei &copy; year {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
