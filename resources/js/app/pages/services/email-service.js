import axios from 'axios';

export function send_email_service(data) {
    try {
        return axios.put(`/api/send_email`, data);  // Note the route used here
    } catch (error) {
        throw new Error('Error sending email');
    }
}
