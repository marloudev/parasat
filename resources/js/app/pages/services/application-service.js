import axios from "axios"

export function create_application_service(data) {
    try {
        const result = axios.post('/api/application', data)
        return result
    } catch (error) {

    }
}