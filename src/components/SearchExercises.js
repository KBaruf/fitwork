import { useContext, useState } from 'react';
import { Typography, Box, Stack, Button, TextField } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import { ExerContext } from '../pages/Home';

const SearchExercises = () => {
  const [searchValue, setSearchValue] = useState('');
  const { exercises, setExercises, bodyParts, setSearchedExData } = useContext(ExerContext);

  const searchHandler = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };

  const submitHandler = () => {
    if (searchValue) {
      const searchedExercises = exercises.filter((exercises) => {
        const { bodyPart, equipment, name, target } = exercises;
        if (bodyPart === searchValue || equipment === searchValue || target === searchValue || name === searchValue) {
          return exercises;
        }
      });
      setSearchedExData('');
      setExercises('');
      setExercises(searchedExercises);
      setSearchedExData(searchedExercises);
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
        <HorizontalScrollBar bodyPartsData={['all', ...bodyParts]} setSearchedExData={setSearchedExData} searchValue={searchValue} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
