import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

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
const HorizontalScrollBar = ({ bodyPartsData }) => {
  return (
    <Box style={{ overflowX: 'scroll' }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsData.map((item, index) => {
          return (
            <Box title={item.id || item} itemId={item.id || item} m='0 40px'>
              <BodyParts item={item} />
            </Box>
          );
        })}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollBar;
