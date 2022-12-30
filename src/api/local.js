import axios from 'axios';

const local = axios.create({
    baseURL: 'http://localhost:3001/emails'
})
export default local;

export const endpoints = {
    getAll: "/",
    getEmail: (id) => `/${id}`,
    updateEmail: (id) => `/${id}`,
    newEmail: "/",
}