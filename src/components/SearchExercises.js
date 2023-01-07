import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box, Stack, Button, TextField } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import { ExerContext } from '../pages/Home';
import { exercise_options } from '../utils/FetchData';
import Filter from '../utils/Filter';
const SearchExercises = () => {
  const [searchValue, setSearchValue] = useState('');
  const { exercises, setExercises, bodyParts, searchExValue, setSearchExValue } = useContext(ExerContext);
  const [searchedExercises, setSearchedExercises] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };
  const submitHandler = async () => {
    const options = exercise_options('https://exercisedb.p.rapidapi.com/exercises');
    const res = await axios.request(options);
    const newExercises = res.data;

    if (searchValue) {
      const resetExercises = Filter(newExercises, searchValue);
      setExercises('');
      setExercises(resetExercises);
      setSearchExValue(searchValue);
    }
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
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar key={crypto.randomUUID()} bodyPartsData={['all', ...bodyParts]} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
