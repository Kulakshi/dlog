// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';

const BASEURL = "http://127.0.0.1:8000/"
export const addEntry = async (form_id, element_id, value=null) => {
    const url = 'form/add-entry/';
    const requestData = {
        user_id: 1,
        time: new Date().toISOString(),
        form_id: form_id,
        element_id: element_id,
        value: value,  // Replace this with your actual value data
    };
    axios.post(BASEURL+`form/add-entry/`,  requestData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};