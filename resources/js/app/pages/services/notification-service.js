import axios from "axios"

export function create_notification_service(data) {
    try {
        const result = axios.post('/api/notification', data)
        return result
    } catch (error) {

    }
}

export function get_notification_service() {
    try {
        const result = axios.get('/api/notification')
        return result
    } catch (error) {

    }
}

export async function get_notification_by_id_service(id) {
    const res = await axios.get('/api/notification/' + id)
    return res.data
}

export function delete_notification_service(id) {
    try {
        const result = axios.delete(`/api/notification/${id}`)
        return result
    } catch (error) {

    }
}

export function update_notification_service(data) {
    try {
        const result = axios.put(`/api/notification/${data.id}`, data)
        return result
    } catch (error) {

    }
}