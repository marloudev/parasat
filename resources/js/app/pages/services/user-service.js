
import axios from "axios"


export async function get_user_service(data) {
    try {
        const result = await axios.get('/api/user')
        return result
    } catch (error) {

    }
}


export async function get_users_service(data) {
    try {
        const result = await axios.get('/api/account')
        return result
    } catch (error) {

    }
}

export function create_user_service(data) {
    try {
        const result = axios.post('/api/account', data)
        return result
    } catch (error) {

    }
}


export async function get_user_by_id_service(id) {
    const res = await axios.get('/api/account/' + id)
    return res.data
}

export function delete_user_service(id) {
    try {
        const result = axios.delete(`/api/account/${id}`)
        return result
    } catch (error) {

    }
}

export function update_user_service(data) {
    try {
        const result = axios.put(`/api/account/${data.id}`, data)
        return result
    } catch (error) {

    }
}