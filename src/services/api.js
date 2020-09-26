import axios from 'axios';

const api = axios.create({
    baseURL: 'https://o-bth-backend.herokuapp.com/',
});

export default api;