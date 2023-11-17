// TooltipContent.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ToolTip = ({label, onClose}) => {
    // Your custom tooltip content goes here
    return (
        <Paper sx={{padding: 2}}>
            <Typography paragraph>
                {label}
            </Typography>
            <TextField label="Input Field" fullWidth margin="normal"/>
            <Button variant="contained" onClick={onClose}>
                Close
            </Button>
        </Paper>
    );
};

export default ToolTip;
