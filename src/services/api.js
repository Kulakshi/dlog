import React from 'react';
import axios from 'axios';
import {BASE_URL} from "../constants";
export const callEndpoint = async (url, method, data) => {
    try {
      const response = await fetch(BASEURL+url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
      } else {
        console.error('Error calling the endpoint:'+url+" | ", response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    // axios.get(apiUrl)
    //   .then(response => {
    //     // Handle the successful response
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error fetching data:', error);
    //   });


export const post = async (url, data, queryParams) => {
  try {
    const response = await axios.post(`${BASEURL+url}?${new URLSearchParams(queryParams)}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const result = response.data;
      // Handle the result as needed
    } else {
      console.error('Error calling the endpoint:', url, response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};


