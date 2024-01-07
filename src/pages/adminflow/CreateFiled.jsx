import React, {useState, useEffect} from 'react';
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate, useLocation, redirect} from 'react-router-dom';
import {getElementTypes, getType, createElement} from "../../services/elements";
import FormFields from "./FormFields";
import {CircularProgress} from "@mui/material";
import {Close} from "@mui/icons-material";


const CreateField = ({id, setElement, removeElement}) => {
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
        setElement(id, {...instance, attributes: newValues, label: label})
    };
    const handleLabelChange = (name, value) => {
        setLabel(value);
        setElement(id, {...instance, attributes: attributeValues, label: value})
    };


    const nav = useNavigate();
    return <div className='relative p-2 border border-secondary m-1 text-lg bg-neutralVariant' key={id}>
        <div className='flex flex-wrap gap-5 text-lg items-center'>
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
        </div>

        <div className="absolute top-0 right-0" onClick={()=> {
            const res = window.confirm("Are you sure you want to remove this field?")
            if (res) {
                removeElement(id)
            }
        }}>
            <Close/>
        </div>
    </div>;
};

export default CreateField;
