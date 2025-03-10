import axios from "axios"

export function create_application_service(data) {
    try {
        const result = axios.post('/api/application', data)
        return result
    } catch (error) {
        return error
    }
}


export function get_application_service() {
    try {
        const result = axios.get('/api/application')
        return result
    } catch (error) {

    }
}

export function update_application_service(data) {
    try {
        const result = axios.put(`/api/application/${data.id}`, data)
        return result
    } catch (error) {

    }
}

export function delete_application_service(id) {
    try {
        const result = axios.delete(`/api/application/${id}`)
        return result
    } catch (error) {

    }
}