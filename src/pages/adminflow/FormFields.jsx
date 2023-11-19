import React from 'react';

const FormFields = (key, attribute, formValues, handleInputChange) => {
    const {name, type, default_value} = attribute;
    return <div key={key} className="mb-4 flex flex-row gap-2 items-center">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {name}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={formValues[name] || default_value}
            onChange={e => handleInputChange(name, e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
        />
    </div>
};

export default FormFields;

