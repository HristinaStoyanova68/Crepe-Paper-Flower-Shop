import * as request from '../lib/request';
import Path from '../paths';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    try {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });
    
        return result;
    } catch (error) {
        throw error;
    }
};

export const register = (username, email, password) => {
    try {
        const result = request.post(`${baseUrl}/register`, {
            username,
            email,
            password,
        });
    
        return result;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await request.get(`${baseUrl}/${Path.Logout}`);
    } catch (error) {
        throw error;
    }
}