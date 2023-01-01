import React from 'react';
import { useEffect, useState } from 'react';
import { Typography, Box, Stack, Button, TextField } from '@mui/material';
const SearchExercises = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchValue(value);
  };
  const submitHandler = () => {
    console.log(searchValue);
    setSearchValue('');
  };

  return (
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>
        Awsome Exercise you should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: {
              lg: '800px',
              xs: '350px',
            },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          value={searchValue}
          onChange={searchHandler}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '24px', xs: '16px' }, height: '56px', position: 'absolute', right: '0' }} onClick={submitHandler}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
