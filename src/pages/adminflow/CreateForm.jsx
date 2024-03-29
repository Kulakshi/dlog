import React, {useState, useEffect} from 'react';
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import {getFormStructures, createForm} from "../../services/admin";
import {useUser} from '../../contexts/UserContext';
import {useNavigate} from 'react-router-dom';
import CreateFiled from "./CreateFiled";
import Header from "../components/Header";
import {v4 as uuidv4} from 'uuid';


const CreateForm = () => {
    const {userId, setUser} = useUser();
    const [name, setName] = useState("");
    const [elements, setElements] = useState({});
    const [form, setForm] = useState(null);


    useEffect(() => {
        getFormStructures().then((res) => {
            setForm({...res.response.form, user_id: userId})
        })
    }, [])

    const addElement = () => {
        elements[uuidv4()] = {}
        setElements({...elements})
    }
    const updateElement = (id, element) => {
        elements[id] = element
        setElements({...elements})
    }
    const removeElement = (id) => {
        if(elements.hasOwnProperty(id)){
            delete elements[id]
        }
        setElements({...elements})
    }

    const handleLabelInput = (e) => {
        setName(e.target.value)
    }


    const submitForm = (e) => {
        if (!name) {
            alert("Name is required")
        } else {
            let values = Object.values(elements)
            setForm({...form, name: name, elements: values})
            createForm(form)
                .then((res) => {
                    if (res?.code == 200) {
                        nav("/admin/forms")
                    }
                });
        }
    }

    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full bg-neutral'>
        <Header title={"Create New Form"} backPath={"/admin/forms"}/>
        <div className='overflow-y-scroll flex flex-col flex-1 justify-between p-5'>
            <div className='flex flex-col pb-5'>
                <div className="mb-4 flex flex-row gap-2 items-center">
                    <label className="block text-lg font-medium text-tertiary w-fit ml-2 text-left">
                        Title:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => handleLabelInput(e)}
                        className="mt-1 p-2 border border-secondary rounded-md w-full"
                    />
                </div>
                {Object.keys(elements)?.map((id) =>
                    <CreateFiled key={id} id={id} setElement={updateElement} removeElement={removeElement}/>
                )}
                <SecondaryButton className="shadow shadow-lg self-end w-1/2 m-0 mt-3" label={"+ Field"} onClick={() => {
                    addElement()
                }}/>
            </div>
            <div className="flex flex-row w-full gap-4">
                <SecondaryButton className="w-1/2 mr-0" label={"Cancel"} onClick={() => {
                    nav("/admin/forms")
                }}/>
                <PrimaryButton className="w-1/2 ml-0" label={"Submit"} onClick={submitForm}/>
            </div>
        </div>
    </div>;
};

export default CreateForm;
