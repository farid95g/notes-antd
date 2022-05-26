import axios from "axios"

export const getNotes = () => {
    return axios
        .get('https://notes-antd-default-rtdb.firebaseio.com/notes.json')
        .then(({ data }) => {
            return Object.keys(data).map(key => ({
                ...data[key],
                id: key
            }))
        })
}