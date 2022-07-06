import { Box, Typography } from '@mui/material'
import React, {useContext} from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

// left Arrow
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

// Right Arrow
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


function HorizontalData({data, BodyParts, setBodyParts, isBodyPart}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data && data.map((item, index) => {
            return <Box key={index} m="0 40px"
            itemId={item.id || item}
            title={item.id || item}
            >
              {isBodyPart? <BodyPart item={item} BodyParts={BodyParts} setBodyParts={setBodyParts}/> : <ExerciseCard exercise={item}/>}
                

            </Box>
        })}
    </ScrollMenu>
  )
}

export default HorizontalData