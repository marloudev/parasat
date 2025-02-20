import axios from "axios"

export function create_application_service(data) {
    try {
        const result = axios.post('/api/application', data)
        return result
    } catch (error) {

    }
}


export function get_application_service() {
    try {
        const result = axios.get('/api/application')
        return result
    } catch (error) {

    }
}