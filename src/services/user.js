// import {callEndpoint, postDataWithQueryParams} from "./api";
import axios from 'axios';
import {BASE_URL} from "../constants";

export const login = async (user_id, team, project) => {
    const url = 'user/login/';
    const requestData = {
        user_id: user_id,
        time: new Date().toISOString(),
        team: team,
        project: project
    };
    axios.post(BASE_URL + url, requestData)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error);
        });
};
