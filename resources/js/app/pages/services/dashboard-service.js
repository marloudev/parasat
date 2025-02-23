import axios from "axios";

export async function dashboard_service() {
    try {
        const res = await axios.get("/api/dashboard");
        const res1 = await axios.get('/api/dashboard');

        return {
            application: res.data,
            items: res1.data
        };

        return res.data;
    } catch (error) {
        console.log("error", error);
    }
}

