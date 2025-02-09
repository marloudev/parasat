import axios from "axios"

export function create_item_service(data) {
    try {
        const result = axios.post('/api/item', data)
        return result
    } catch (error) {

    }
}

export function get_item_service() {
    try {
        const result = axios.get('/api/item')
        return result
    } catch (error) {

    }
}

export async function get_item_by_id_service(id) {
    const res = await axios.get('/api/item/' + id)
    return res.data
}

export function delete_item_service(id) {
    try {
        const result = axios.delete(`/api/item/${id}`)
        return result
    } catch (error) {

    }
}

export function update_item_service(data) {
    try {
        const result = axios.put(`/api/item/${data.id}`, data)
        return result
    } catch (error) {

    }
}