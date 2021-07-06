import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_URL_NODE
});

export const clienteAxios2 = axios.create({
    baseURL: process.env.REACT_APP_URL_JAVA
});


export default clienteAxios;