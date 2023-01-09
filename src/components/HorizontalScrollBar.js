import React, { useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => {
        scrollPrev();
      }}
      className='right-arrow'
    >
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};
const HorizontalScrollBar = ({ bodyPartsData, setBodyParts, exerciseTargetMuscle, exerciseByEquipment }) => {
  return (
    <Box style={{ overflowX: 'scroll' }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsData
          ? bodyPartsData?.map((item, index) => {
              return (
                <Box key={crypto.randomUUID()} title={item.id || item} itemId={item.id || item} m='0 40px'>
                  {<BodyParts item={item} index={index} />}
                </Box>
              );
            })
          : exerciseTargetMuscle?.length &&
            exerciseTargetMuscle?.map((target) => {
              return (
                <Box key={crypto.randomUUID()} title={target.id || target} itemId={target.id || target} m='0 40px'>
                  <ExerciseCard exercise={target} />
                </Box>
              );
            })}
        {exerciseByEquipment?.length &&
          exerciseByEquipment?.map((target) => {
            return (
              <Box key={crypto.randomUUID()} title={target.id || target} itemId={target.id || target} m='0 40px'>
                <ExerciseCard exercise={target} />
              </Box>
            );
          })}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollBar;
