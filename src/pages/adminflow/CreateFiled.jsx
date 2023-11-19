import React, {useState, useEffect} from 'react';
import SubmitButton from "../components/SubmitButton";
import {useNavigate, useLocation, redirect} from 'react-router-dom';
import {getElementTypes, getType, createElement} from "../../services/elements";
import FormFields from "./FormFields";


const CreateField = ({index, setElement}) => {
    const [types, setTypes] = useState();
    const [selectedType, setSelectedType] = useState();
    const [instance, setInstance] = useState(null);
    const [attributeValues, setAttributeValues] = useState({});
    const [label, setLabel] = useState({});

    useEffect(() => {
        getElementTypes().then(res => {
            setTypes(res.response.types)
        })
    }, []);

    const handleTypeSelect = (type) => {
        setSelectedType(type)
        getType(type).then(res => {
            setInstance(res.response.type)
            setAttributeValues(res.response.type.attributes)
        })
    };

    const handleAttributeChange = (name, value) => {
        const newValues = attributeValues.map((attribute) =>
            attribute.name === name ? {...attribute, value} : attribute
        );
        setAttributeValues(newValues);
        setElement(index, {...instance, attributes: newValues, label: label})
    };
    const handleLabelChange = (name, value) => {
        setLabel(value);
        setElement(index, {...instance, attributes: attributeValues, label: value})
    };


    const nav = useNavigate();
    return <div className='p-2 flex flex-wrap gap-5 items-center border border-amber-600 m-1'>
        {index}
        <select className="left-0" onChange={(e) => handleTypeSelect(e.target.value)} value={selectedType}>
            <option value="">Select a type</option>
            {types?.map(type => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
        {instance && FormFields(instance.attributes.length + 1, {
            name: "Label",
            type: "text",
            default_value: instance?.label
        }, attributeValues, handleLabelChange)}

        <div>
            <div className="flex flex-row gap-4">
                {instance && instance?.attributes && instance.attributes?.map((attribute, i) => FormFields(i, attribute, attributeValues, handleAttributeChange))}
            </div>
        </div>
    </div>;
};

export default CreateField;
