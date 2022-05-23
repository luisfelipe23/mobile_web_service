import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mobile-book-server.herokuapp.com/'
});

export default api;