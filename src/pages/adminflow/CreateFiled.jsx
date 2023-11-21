import React, {useState, useEffect} from 'react';
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate, useLocation, redirect} from 'react-router-dom';
import {getElementTypes, getType, createElement} from "../../services/elements";
import FormFields from "./FormFields";
import {CircularProgress} from "@mui/material";


const CreateField = ({index, setElement}) => {
    const [types, setTypes] = useState();
    const [selectedType, setSelectedType] = useState();
    const [instance, setInstance] = useState(null);
    const [attributeValues, setAttributeValues] = useState({});
    const [label, setLabel] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getElementTypes().then(res => {
            setTypes(res.response.types)
        })
    }, []);

    const handleTypeSelect = (type) => {
        setIsLoading(true)
        setSelectedType(type)
        getType(type).then(res => {
            setInstance(res.response.type)
            setAttributeValues(res.response.type.attributes)
            setIsLoading(false)
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
    return <div className='p-2 flex flex-wrap gap-5 border border-secondary m-1 text-lg bg-neutralVariant items-center'>
        {index}
        <select className="left-0 p-2 bg-neutralVariant border border-primary rounded items-center"
                onChange={(e) => handleTypeSelect(e.target.value)} value={selectedType}>
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
        {
            isLoading && !instance && <div className="flex flex-row gap-4 items-center justify-center">
                <CircularProgress size={30} color="primary"/>
                Loading...
            </div>
        }


        <div>
            <div className="flex flex-row gap-4">
                {instance && instance?.attributes && instance.attributes?.map((attribute, i) => FormFields(i, attribute, attributeValues, handleAttributeChange))}
            </div>
        </div>
    </div>;
};

export default CreateField;
