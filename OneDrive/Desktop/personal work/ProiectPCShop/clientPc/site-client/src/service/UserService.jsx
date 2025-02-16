import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/orders/user"; 

class UserService {
    // Method to get orders by username
    static async getOrdersByUsername(username) {
        try {
            const response = await axios.get(`${BASE_URL}/${username}`);
            return response.data; // Return the orders data
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw new Error("Could not fetch orders.");
        }
    }
}

export default UserService;
