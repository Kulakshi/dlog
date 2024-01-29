import React, {useEffect, useState} from 'react';
import './style.css';
import './formstyles.css';
import {getForm, personalizeElement} from "../../../services/form";
import {useLocation} from "react-router-dom";
import FormElement from "../FormElement";
import {useUser} from "../../../contexts/UserContext";
import {CircularProgress, Switch} from "@mui/material";
import InfoButton from "../../components/InfoButton";
import Header from "../../components/Header";
import SecondaryButton from "../../components/SecondaryButton";
import {Responsive, WidthProvider} from "react-grid-layout";
import {Edit, Pause, PauseCircle, PlayArrow, PlayCircle, RecordVoiceOver, Save, Square} from "@mui/icons-material";


const ResponsiveGridLayout = WidthProvider(Responsive);
const Form = () => {
    const location = useLocation()
    const {userId, isRecording, setIsRecording} = useUser()
    const [isLoading, setIsLoading] = useState(true);
    const [editModeOn, setEditModeOn] = useState(false);
    const [layout, setLayout] = useState([]);

    const [form, setForm] = useState(null)
    const [items, setItems] = useState(null)
    const [hideLable, setHideLabel] = useState(null)

    const loadForm = () => {
        getForm(userId, location.state.form._id)
            .then((res) => {
                const form = res?.response.form
                setForm(form)
                setIsLoading(false)
                if (form?.layout) setLayout(form?.layout)

               const items = form ? form?.elements.map((item, i) => {
                    return item.element_type !== "Slider" ?
                        {
                            ...item,
                            layout: item.layout || {x: i, y: 0, w: 1, h: 2, static: !editModeOn}
                        }
                        :
                        {
                            ...item,
                            layout: item.layout || {x: i, y: 0, w: 1, h: 2, static: !editModeOn}
                        }
                }) : null;
                setItems(items)
            })

    }

    useEffect(() => {
        if (userId) loadForm()
    }, [userId])

    const setRecording = () => {
        setIsRecording(!isRecording)
    }
    const setEditMode = () => {
        if (editModeOn) {
            personalizeElement(userId, form._id, hideLable, layout).then(res =>
                loadForm()
            )
        }
        setEditModeOn(!editModeOn)
    }

    const updateHideLabel = (checked) => {
        personalizeElement(userId, form._id, checked, layout)
            .then(res =>
            loadForm()
        )
        // setHideLabel(checked)
    }

    const onLayoutChange = (layout) => {
        setLayout(layout)

    }


    return <div className='flex flex-col flex-1 h-full w-full'>
        {
            form ?
                <>
                    <Header title={form.name} backPath={"/forms"}>
                        <div className="flex flex-row items-center gap-4 justify-center text-white">
                            {/*<SecondaryButton onClick={setEditMode} label={editModeOn ? "Save layout" : "Edit layout"}*/}
                            {/*                 className={`px-2 m-0 ${editModeOn && "bg-red-400 text-white"}`}/>*/}
                            {editModeOn ?
                                <Save onClick={setEditMode}/>
                                :
                                <Edit onClick={setEditMode}/>
                            }
                            {isRecording ?
                                <PauseCircle onClick={setRecording}/>
                                :
                                <PlayCircle className="text-red-300" onClick={setRecording}/>
                            }

                            {/*<SecondaryButton onClick={setRecording}*/}
                            {/*                 label={isRecording ? "Stop Recording" : "Start Recording"}*/}
                            {/*                 className={`px-2 m-0 ${isRecording && "bg-red-400 text-white"}`}/>*/}
                            <Switch checked={hideLable} defaultChecked
                                    onChange={(e) => updateHideLabel(e.target.checked)}/>
                        </div>
                    </Header>
                    <div className='flex flex-1 justify-around overflow-auto'>
                        <ResponsiveGridLayout
                            className="layout flex-1 bg-yellow-600x justify-center"
                            // layouts={layout}
                            onLayoutChange={onLayoutChange}
                            breakpoints={{lg: window.screen.height}}
                            cols={{lg: 5, md: 5, sm: 5, xs: 4, xxs: 2}}
                        >
                            {
                                items && items.length > 0 && items.map((element, i) => {
                                    return <div key={element.element_id} className="bg-red-400 react-grid-item"
                                                data-grid={{...element.layout, static: !editModeOn}}>
                                        <FormElement formId={form._id} element={element} displayLabel={!form.hide_label}/>
                                    </div>
                                })
                            }
                        </ResponsiveGridLayout>
                    </div>
                </>
                :
                <div className='flex flex-wrap flex-1 justify-around p-4 pt-0 gap-2'>
                    {isLoading && !form &&
                        <div className="flex flex-row gap-4 items-center justify-center text-tertiary">
                            <CircularProgress size={30} color="primary"/>
                            Loading...
                        </div>
                    }
                    {!isLoading && !form &&
                        "Error loading the form"
                    }
                </div>
        }

    </div>;
};

export default Form;
