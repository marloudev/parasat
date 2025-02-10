export async function get_user_service(data) {
    try {
        const result = await axios.get('/api/user')
        return result
    } catch (error) {

    }
}