// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';
import {BASE_URL} from "../constants";

export const getForms = async (user_id) => {
    const url = `admin/${user_id}/forms/`;
    return axios.get(BASE_URL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};
export const getFormStructures = async (user_id) => {
    const url = `admin/get-form-structures/`;
    return axios.get(BASE_URL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};


export const createForm = async (form) => {
    const url = `admin/create-form`;
    return axios.post(BASE_URL + url, form)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error);
        });
};

export const setFormLayout = async (userId, formId, hideLabel, layout) => {
    const url = 'admin/set-layout/';
    const requestData = {
        user_id: userId,
        form_id: formId,
        hide_label: hideLabel,
        layout: layout
    };
    axios.post(BASE_URL+url,  requestData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};