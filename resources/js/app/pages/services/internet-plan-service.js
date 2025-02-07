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