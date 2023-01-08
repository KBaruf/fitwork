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
          .slice(0, 6)
          .map((videoDetail, index) => {
            const { videoId, title, thumbnails, description, channelName } = videoDetail.video;
            return (
              <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel='noreffer'>
                <img src={thumbnails[0].url} alt={title} />{' '}
                <Box>
                  {' '}
                  <Typography variant='h5' color='#000' textTransform='upperCase'>
                    {title}
                  </Typography>
                  <Typography variant='h5' color='#000' pt='10px' textTransform='lowerCase'>
                    by {channelName}
                  </Typography>
                </Box>
              </a>
            );
          })}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
