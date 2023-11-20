import React, {useState} from 'react';
import { InfoRounded} from "@mui/icons-material";
import Popover from '@mui/material/Popover';
import ToolTip from "./ToolTip";

const InfoButton = ({formId, element, setElement}) => {

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
        <InfoRounded className="right-2 top-2" onClick={handleInfoClick}/>
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
        <ToolTip onClose={handleCloseTooltip} formId={formId} element={element} setElement={setElement}/>
      </Popover>

      </div>
  );
};

export default InfoButton;