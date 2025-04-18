import axios from "axios"

export function create_job_order_service(data) {
    try {
        const result = axios.post('/api/job_order', data)
        return result
    } catch (error) {

    }
}

export function get_job_order_service() {
    try {
        const result = axios.get('/api/job_order')
        return result
    } catch (error) {

    }
}

export async function get_job_order_by_id_service(id) {
    const res = await axios.get('/api/job_order/' + id)
    return res.data
}

export function delete_job_order_service(id) {
    try {
        const result = axios.delete(`/api/job_order/${id}`)
        return result
    } catch (error) {

    }
}

export function update_job_order_service(data) {
    try {
        const result = axios.put(`/api/job_order/${data.id}`, data)
        return result
    } catch (error) {

    }
}