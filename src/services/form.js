// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';
import {BASE_URL} from "../constants";


export const getAllForms = async () => {
    const url = `form/all/`;
    return axios.get(BASE_URL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const getForm = async (userId, formId) => {
    const url = `form/${userId}/${formId}/`;
    return axios.get(BASE_URL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const setRecordingState = async (userId, formId, recordingState) => {
    const url = 'form/set_record_state/';
    const requestData = {
        user_id: userId,
        form_id: formId,
        recording_state: true
    };
    axios.post(BASE_URL+url,  requestData)
        .then(response => {
            console.log(response.data);
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
    axios.post(BASE_URL+url,  requestData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};

export const getEntries = async (userId, formId) => {
    const url = `form/get-entries/${userId}/${formId}/`;
    return axios.get(BASE_URL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};


export const personalizeElement = async (userId, formId, hideLabel) => {
    const url = 'form/personalize/';
    const requestData = {
        user_id: userId,
        form_id: formId,
        hide_label: hideLabel
    };
    axios.post(BASE_URL+url,  requestData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};