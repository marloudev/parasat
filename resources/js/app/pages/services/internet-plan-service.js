import axios from "axios"

export function create_internet_plan_service(data) {
    try {
        const result = axios.post('/api/internet_plan', data)
        return result
    } catch (error) {

    }
}

export function get_internet_plan_service() {
    try {
        const result = axios.get('/api/internet_plan')
        return result
    } catch (error) {

    }
}

export function delete_internet_plan_service(id) {
    try {
        const result = axios.delete(`/api/internet_plan/${id}`)
        return result
    } catch (error) {

    }
}

export function update_internet_plan_service(data) {
    try {
        const result = axios.put(`/api/internet_plan/${data.id}`,data)
        return result
    } catch (error) {

    }
}