import axios from "axios"

export function create_stock_item_service(data) {
    try {
        const result = axios.post('/api/stock_item', data)
        return result
    } catch (error) {

    }
}

export function get_stock_item_service() {
    try {
        const result = axios.get('/api/stock_item')
        return result
    } catch (error) {

    }
}

export async function get_stock_item_by_id_service(id) {
    const res = await axios.get('/api/stock_item/' + id)
    return res.data
}

export function delete_stock_item_service(id) {
    try {
        const result = axios.delete(`/api/stock_item/${id}`)
        return result
    } catch (error) {

    }
}

export function update_stock_item_service(data) {
    try {
        const result = axios.put(`/api/stock_item/${data.id}`, data)
        return result
    } catch (error) {

    }
}