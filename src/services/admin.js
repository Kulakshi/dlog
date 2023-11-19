// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';

const BASEURL = "http://127.0.0.1:8000/"
export const getForms = async (user_id) => {
    const url = `admin/${user_id}/forms/`;
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};
export const getFormStructures = async (user_id) => {
    const url = `admin/get-form-structures/`;
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};


export const createForm = async (form) => {
    const url = `admin/create-form`;
    return axios.post(BASEURL + url, form)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error);
        });
};