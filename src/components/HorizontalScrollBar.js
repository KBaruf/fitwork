import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import { Diversity2Sharp } from '@mui/icons-material';
const HorizontalScrollBar = ({ bodyPartsData, setSearchedExData, searchValue }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className='right-arrow'>
        <img src={LeftArrowIcon} alt='right-arrow' />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Button onClick={() => scrollNext()} className='left-arrow'>
        <img src={RightArrowIcon} alt='right-arrow' />
      </Button>
    );
  };
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsData.map((item, index) => {
          return (
            <Box key={item || index} m='0 40px'>
              <BodyParts item={item} setSearchedExData={setSearchedExData} searchValue={searchValue} />
              <Typography fontSize='24px' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize' pt='4px' textAlign='center'>
                {' '}
                {item}
              </Typography>
            </Box>
          );
        })}
      </ScrollMenu>
    </>
  );
};

export default HorizontalScrollBar;
