import React, {useState, useEffect} from 'react';
import SubmitButton from "../components/SubmitButton";
import {getFormStructures, createForm} from "../../services/admin";
import {useUser} from '../../contexts/UserContext';
import {useNavigate} from 'react-router-dom';
import CreateFiled from "./CreateFiled";


const CreateForm = () => {
    const {userId, setUser} = useUser();
    const [name, setName] = useState("");
    const [elements, setElements] = useState({});
    const [form, setForm] = useState(null);
    const [fields, setFields] = useState([]);


    useEffect(() => {
        getFormStructures().then((res) => {
            setForm({...res.response.form, user_id: userId})
        })
    }, [])

    const addElementUI = () => {
        let index = fields.length
        setFields([...fields, <CreateFiled key={index} index={index} setElement={addElement}/>])
    }
    const addElement = (index, element) => {
        elements[index] = element
        setElements(elements)
        let values = Object.keys(elements).map(function (key) {
            return elements[key];
        });
        setForm({...form, elements: values})
    }

    const handleLabelInput = (e) => {
        setForm({...form, name: e.target.value})
        setName(e.target.value)
    }


    const submitForm = (e) => {
        if (!form.name) {
            alert("Name is required")
        } else {
            createForm(form)
                .then((res) => {
                    if (res?.code == 200) {
                        nav("/forms")
                    }
                });
        }
    }


    const nav = useNavigate();
    return <div className='bg-amber-200 flex flex-col flex-1 justify-between p-5 h-full w-full overflow-y-scroll'>
        <div className="mb-4 flex flex-row gap-2 items-center">
            <label className="block text-sm font-medium text-gray-700">
                Title:
            </label>
            <input
                type="text"
                value={name}
                onChange={e => handleLabelInput(e)}
                className="mt-1 p-2 border rounded-md w-full"
            />
        </div>
        {fields?.map((field) => field)}
        <SubmitButton label={"Add Field"} onClick={() => {
            addElementUI()
        }}/>
        <div className="flex flex-row gap-5 w-full m-4 justify-center">
            <SubmitButton label={"Cancel"} onClick={() => {
                nav("/forms")
            }}/>
            <SubmitButton label={"Submit"} onClick={submitForm}/>
        </div>
    </div>;
};

export default CreateForm;
