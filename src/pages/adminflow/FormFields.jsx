import React from 'react';

const FormFields = (key, attribute, formValues, handleInputChange) => {
    const {name, type, default_value} = attribute;
    return <div key={key} className="flex flex-row gap-2 items-center text-lg">
        {name}
        <input
            type={type}
            id={name}
            name={name}
            value={formValues[name] || default_value}
            onChange={e => handleInputChange(name, e.target.value)}
            className="mt-1 p-2 border border-primary rounded-md w-full"
        />
    </div>
};

export default FormFields;

