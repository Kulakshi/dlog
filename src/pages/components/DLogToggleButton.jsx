import React, {useState} from 'react';
import {ToggleButtonGroup, ToggleButton as MaterialToggleButton} from "@mui/material";
    const getAttributeValue = (attributes, attributeName) => {
        const attribute = attributes?.find(attr => attr.name === attributeName);
        return attribute ? attribute.value : null;
    };
const DLogToggleButton = ({key, formId, element, onClick, displayLabel}) => {
    const checked = parseInt(getAttributeValue(element?.attributes, 'checked'));
    const [selected, isSelected] = useState(1)
    return (
       <ToggleButtonGroup
      color="primary"
      value={selected}
      exclusive
      selected={selected}
          onChange={() => {
            isSelected(selected ? 0 : 1);
          }}
      aria-label="Platform"
    >
      <MaterialToggleButton value={1} color={"primary"}>True</MaterialToggleButton>
      <MaterialToggleButton value={0}>False</MaterialToggleButton>
    </ToggleButtonGroup>
    );
};

export default DLogToggleButton;