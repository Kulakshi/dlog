import React, {useState} from 'react';
import InfoButton from "./InfoButton";
import {Slider, Box, Typography, ThemeProvider, createTheme} from '@mui/material';

const Scale = ({key, formId, element, setValue}) => {
    const [sliderValue, setSliderValue] = useState();
    const [localElem, setLocalElem] = useState(element)

    const theme = createTheme({
        components: {
            MuiSlider: {
                styleOverrides: {
                    root: {
                        color: '#145B63',
                    },
                    thumb: {
                        backgroundColor: '#145B63',
                    },
                    track: {
                        backgroundColor: '#145B63',
                    },
                    rail: {
                        backgroundColor: '#145B63',
                    },
                },
            },
        },
    });
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const submitSliderChange = (event, newValue) => {
        setValue(newValue)
    };

    const getAttributeValue = (attributes, attributeName) => {
        const attribute = attributes.find(attr => attr.name === attributeName);
        return attribute ? attribute.value : null;
    };

    // Example usage
    const min = getAttributeValue(element?.attributes, 'min');
    const max = getAttributeValue(element?.attributes, 'max');
    const step = getAttributeValue(element?.attributes, 'step');

    return (

        <div className="border border-amber-950 rounded h-full flex-grow items-start flex flex-col p-2">
            <div className="flex flex-row justify-between w-full">
                {localElem.customLabel ? localElem.customLabel : localElem.label}
                <InfoButton formId={formId} element={element} setElement={(element) => setLocalElem(element)}/>

            </div>
            <div className="pb-5 h-full w-full flex-grow items-center justify-center">
                <ThemeProvider theme={theme}>
                    max: {max}
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="h-full">
                        <Typography id="vertical-slider" gutterBottom variant="h4">
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
                            color={'primary'}
                            step={step ? parseInt(step) : 1}
                            marks
                            min={min ? parseInt(min) : 0}
                            max={max ? parseInt(max) : 100}
                            sx={{
                                '& .MuiSlider-thumb': {
                                    width: 60, // Adjust the width
                                    height: 10, // Adjust the height
                                    borderRadius: 0, // Set borderRadius to 0 for a rectangular shape
                                },
                            }}
                        />
                        min: {min}
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Scale;
