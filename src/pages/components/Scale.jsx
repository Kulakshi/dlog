import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Scale = ({setValue}) => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const submitSliderChange = (event, newValue) => {
        setValue(newValue)
    };

    return (

        <div className="border border-amber-950 p-5 h-full flex-grow">
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="h-full">
                <Typography id="vertical-slider" gutterBottom>
                    {sliderValue}
                </Typography>
                <Slider
                    orientation="vertical"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    onChangeCommitted={submitSliderChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="vertical-slider"
                    valueLabelFormat={(value) => `${value}`}
                    step={1}
                    marks
                    min={0}
                    max={100}
                    sx={{
                        '& .MuiSlider-thumb': {
                            width: 30, // Adjust the width
                            height: 10, // Adjust the height
                            borderRadius: 0, // Set borderRadius to 0 for a rectangular shape
                        },
                    }}
                />
            </Box>
        </div>
    );
};

export default Scale;
