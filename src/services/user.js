// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';

const BASEURL = "http://127.0.0.1:8000/"
export const login = async (user_id, team, project) => {
    const url = 'user/login/';
    const requestData = {
        user_id: user_id,
        time: new Date().toISOString(),
        team: team,
        project: project
    };
    axios.post(BASEURL + url, requestData)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error);
        });
};
