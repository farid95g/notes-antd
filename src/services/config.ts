import axios from "axios"

export const mainService = axios.create({
    baseURL: 'https://notes-antd-default-rtdb.firebaseio.com'
})