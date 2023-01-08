import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
const ExercisesVideos = ({ exerciseDetailsVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
      <Typography variant='h3' mb='33px' textAlign='center'>
        Watch <span style={{ color: '#ff2626', textTransform: 'capitalize' }}>{name}</span> Exercises Videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}>
        {exerciseDetailsVideos?.contents
          ?.filter((items) => items.video)
          .slice(0, 4)
          .map((videoDetail, index) => {
            const { videoId, title, thumbnails, description } = videoDetail.video;
            return (
              <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel='noreffer'>
                <img src={thumbnails[0].url} alt={title} />{' '}
              </a>
            );
          })}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
