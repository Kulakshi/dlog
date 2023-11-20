import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InfoButton from "./InfoButton";

const Scale = ({key, formId, element, setValue}) => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const submitSliderChange = (event, newValue) => {
        setValue(newValue)
    };

    return (

        <div className="border border-amber-950 rounded h-full flex-grow items-start flex flex-col p-2">
            <div className="flex flex-row justify-between w-full">
          {element.customLabel? element.customLabel : element.label}
        <InfoButton formId={formId} element={element}/>

            </div>
        <div className="pt-5 h-full w-full flex-grow items-center justify-center">
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
        </div>
    );
};

export default Scale;
