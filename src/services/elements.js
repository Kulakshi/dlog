// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';
import {BASE_URL} from "../constants";

export const getElementTypes = async () => {
    const url = 'element-types/get-elements/';
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const getType = async (elementName) => {
    const url = `element-types/${elementName}`;
    return axios.get(BASEURL + url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const createElement = async (element) => {
    const url = `elements/create`;
    axios.post(BASEURL + url, element)
        .then(response => {
            return response
        })
        .catch(error => {
            console.error(error);
        });
};