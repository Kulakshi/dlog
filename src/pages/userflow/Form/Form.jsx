import React, {useCallback, useEffect, useState} from 'react';
import './style.css';
import './formstyles.css';
import {getForm, personalizeElement} from "../../../services/form";
import {useLocation} from "react-router-dom";
import FormElement from "../FormElement";
import {useUser} from "../../../contexts/UserContext";
import {CircularProgress, Switch} from "@mui/material";
import Header from "../../components/Header";
import {Responsive, WidthProvider} from "react-grid-layout";
import {
    CloseSharp,
    DashboardOutlined,
    PauseCircleOutlined,
    PlayCircle, PlayCircleOutlined,
    SaveOutlined, VisibilityOffOutlined, VisibilityOutlined,
} from "@mui/icons-material";
import {setFormLayout} from "../../../services/admin";
import FormTutorial from "./FormTutorial";


    const Overlay =({isRecording, setRecording}) => {
        const [isOpen, setIsOpen] = useState(true)
      return (
        <div
          className={`fixed left-0 w-full h-full bg-black bg-opacity-30 flex flex-col gap-2 items-center justify-center 
          ${(!isRecording && isOpen) ? 'block' : 'hidden'}`}>
            <div className="p-10 rounded-2xl bg-white relative">
                <CloseSharp className="absolute right-2 top-2 text-gray-700" style={{width:30, height:30, opacity:100}}
                onClick={()=>setIsOpen(false)}/>
                <PlayCircle className="text-red-300 opacity-100" style={{width:80, height:80, opacity:100}} onClick={setRecording}/>
                <div className="opacity-100 text-black text-xl">Start recording data</div>
            </div>
        </div>
      );
    };

const ResponsiveGridLayout = WidthProvider(Responsive);
const Form = () => {
    const location = useLocation()
    const {userId, userRole, showTutorial, setShowTutorial} = useUser()
    const [isLoading, setIsLoading] = useState(true);
    const [editModeOn, setEditModeOn] = useState(false);
    const [layout, setLayout] = useState([]);
    const [isRecording, setIsRecording] = useState(false);

    const [form, setForm] = useState(null)
    const [items, setItems] = useState(null)
    const [hideLable, setHideLabel] = useState(null)

    const loadForm = () => {
        userRole && getForm(userRole, userId, location.state.form._id)
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
                            layout: {...item.layout}|| {x: i, y: 0, w: 1, h: 2, static: !editModeOn}
                        }
                }) : null;
                setItems(items)
            })

    }

    const updateItemsLayout = (elements, layout) => {
        if(elements?.length < 1 || elements?.length !== layout?.length) return

        const idxToLayout = layout.reduce((acc, item) => {
              acc[item.i] = item;
              return acc;
            }, {});
         const items = elements?.map((item, i) => {
                    return {
                            ...item,
                            layout: idxToLayout[item.element_id]
                        }
                });
        setItems(items)
    }

    useEffect(() => {
        setIsRecording(false)
        if (userId) loadForm()
    }, [userId])

    const setRecording = () => {
        setIsRecording(!isRecording)
    }
    const setLabelVisibility = () => {
        personalizeElement(userId, form._id, !hideLable, layout)
        setHideLabel(!hideLable)
    }
    const setEditMode = () => {
        if (editModeOn) {
            userRole === "ADMIN" ?
                setFormLayout(userId, form._id, hideLable, layout)
                :
                personalizeElement(userId, form._id, hideLable, layout)
        }
        setEditModeOn(!editModeOn)
    }

    const onLayoutChange = (layout) => {
        setLayout(layout)
        updateItemsLayout(items, layout)
    }

    return <div className='flex flex-col flex-1 h-full w-full'>
        {
            form ?
                <>
                    <Header title={form.name} backPath={userRole === "ADMIN" ? "/admin/dashboard":"/forms"} backData={{form:form}}>
                        <div className="flex flex-row items-center gap-4 justify-center text-white">
                            {userRole !== "ADMIN" &&
                                <>
                                    {isRecording ?
                                        <PauseCircleOutlined onClick={setRecording} className="animate-bounce"
                                                     style={{ animationDuration: '1s', animationIterationCount: 2 }}/>
                                        :
                                        <PlayCircleOutlined onClick={setRecording}/>
                                    }
                                </>
                            }
                            {userRole !== "ADMIN" &&
                                <>
                                {
                                    hideLable ?
                                        <VisibilityOutlined onClick={setLabelVisibility}/> :
                                        <VisibilityOffOutlined onClick={setLabelVisibility}/>
                                }
                                </>
                            }
                            {editModeOn ?
                                <SaveOutlined onClick={setEditMode}/>
                                :
                                <DashboardOutlined onClick={setEditMode}>Edit Layout</DashboardOutlined>
                            }
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
                                        <FormElement isRecording={isRecording} formId={form._id} element={element} displayLabel={!hideLable}/>
                                    </div>
                                })
                            }
                        </ResponsiveGridLayout>
                        {
                            showTutorial && <FormTutorial onClose={()=>{setShowTutorial(false)}}/>
                        }
                    </div>
                    {
                        !showTutorial && <Overlay isRecording={isRecording} setRecording={setRecording}/>
                    }

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
