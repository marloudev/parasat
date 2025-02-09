import axios from "axios"

export function create_serial_number_item_service(data) {
    try {
        const result = axios.post('/api/serial_number_item', data)
        return result
    } catch (error) {

    }
}

export function get_serial_number_item_service() {
    try {
        const result = axios.get('/api/serial_number_item')
        return result
    } catch (error) {

    }
}

export async function get_serial_number_item_by_id_service(id) {
    const res = await axios.get('/api/serial_number_item/' + id)
    return res.data
}

export function delete_serial_number_item_service(id) {
    try {
        const result = axios.delete(`/api/serial_number_item/${id}`)
        return result
    } catch (error) {

    }
}

export function update_serial_number_item_service(data) {
    try {
        const result = axios.put(`/api/serial_number_item/${data.id}`, data)
        return result
    } catch (error) {

    }
}