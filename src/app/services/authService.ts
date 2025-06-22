import axios from 'axios';

// Use relative URL which will be proxied by Next.js
const API_URL = '/api/auth/login';

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export const AuthService = {
    login: async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post('', {'username': email, 'password': password });
            return response.data;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },
};