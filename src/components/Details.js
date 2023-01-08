import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';
const Details = ({ singleExerciseDet }) => {
  const { bodyPart, equipment, gifUrl, name, target } = singleExerciseDet;
  const moreDetails = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', sm: '20px' } }}>
        <Typography variant='h3' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h6'>
          {' '}
          Exercising regularly is important. Target your <strong> {target}</strong> by doing <strong> {name}</strong> to strengthen your bones and muscles, and improve your ability to do everyday activities.
        </Typography>
        {moreDetails.map((detail) => {
          const { icon, name } = detail;
          return (
            <Stack key={crypto.randomUUID()} direction='row' gap='24px' alignItems='center'>
              <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                <img src={icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
              </Button>
              <Typography variant='h5' textTransform='capitalize'>
                {name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Details;
