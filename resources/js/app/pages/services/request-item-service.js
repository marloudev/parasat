import axios from "axios"

export function update_change_status_service(data) {
    try {
        const result = axios.post('/api/change_status', data)
        return result
    } catch (error) {

    }
}
export function create_request_item_service(data) {
    try {
        const result = axios.post('/api/request_item', data)
        return result
    } catch (error) {

    }
}

export function get_request_item_service() {
    try {
        const result = axios.get('/api/request_item'+window.location.search)
        return result
    } catch (error) {

    }
}

export async function get_request_item_by_id_service(id) {
    const res = await axios.get('/api/request_item/' + id)
    return res.data
}

export function delete_request_item_service(id) {
    try {
        const result = axios.delete(`/api/request_item/${id}`)
        return result
    } catch (error) {

    }
}

export function update_request_item_service(data) {
    try {
        const result = axios.put(`/api/request_item/${data.id}`, data)
        return result
    } catch (error) {

    }
}