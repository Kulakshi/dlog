import React, {useState} from 'react';
import {InfoRounded} from "@mui/icons-material";
import Popover from '@mui/material/Popover';
import ToolTip from "./ToolTip";
import ToolTipHideLabel from "./ToolTipHideLabel";

const InfoButton = ({formId, element = null, labelHidden= false, callback=null, className=null}) => {

    const [tooltipAnchorEl, setTooltipAnchorEl] = useState(null);

    const handleInfoClick = (event) => {
        setTooltipAnchorEl(event.currentTarget);
    };

    const handleCloseTooltip = () => {
        setTooltipAnchorEl(null);
    };
    const openTooltip = Boolean(tooltipAnchorEl);

    return (
        <div>
            <InfoRounded className={`${className}`} onClick={handleInfoClick} />
            <Popover
                open={openTooltip}
                anchorEl={tooltipAnchorEl}
                onClose={handleCloseTooltip}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
            </Popover>

        </div>
    );
};

export default InfoButton;