import axios from 'axios'
const DB_URL = 'http://localhost:8888'

export function tasksave(data) {
    try {
        return axios.post(`${DB_URL}/task`, data)
    } catch (error) {
        console.log(error);
    }

}

export function fetchdata(url) {
    try {
        return axios.get(`${DB_URL}/task/${url}`)
    } catch (error) {
        console.log(error);
    }

}


export function deletetask(id) {
    return axios.delete(`${DB_URL}/task/${id}`)

}


export function markcompleted(id) {
    return axios.put(`${DB_URL}/task/${id}/completed`)

}

export function singledata(id) {
    return axios.get(`${DB_URL}/task/${id}`)
}

export function updatedata(data, id) {
    return axios.put(`${DB_URL}/task/${id}`, data, id)

}