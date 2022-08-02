import axios from 'axios'

export const mainService = axios.create({
    baseURL: 'http://localhost:5000'
})
