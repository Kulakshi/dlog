// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';

const BASEURL = "http://127.0.0.1:8000/"


export const getAllForms = async () => {
    const url = `form/all/`;
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const getForm = async (formId) => {
    const url = `form/${formId}/`;
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const addEntry = async (userId, formId, elementId, value=null) => {
    const url = 'form/add-entry/';
    const requestData = {
        user_id: userId,
        time: new Date().toISOString(),
        form_id: formId,
        element_id: elementId,
        value: value,  // Replace this with your actual value data
    };
    axios.post(BASEURL+url,  requestData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};