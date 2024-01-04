// TooltipContent.js
import React from 'react';
import Paper from '@mui/material/Paper';

const ToolTip = ({element}) => {
    return (
        <Paper sx={{padding: 2}}>
            <div className="font-bold">
                {element.label}
            </div>
        </Paper>
    );
};

export default ToolTip;
