import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_url,
});

export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    console.log(response);
    return response.data;
};

export default httpRequest;
