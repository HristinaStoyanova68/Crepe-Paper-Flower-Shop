import * as request from '../lib/request';
import Path from '../paths';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, password) => {
    const result = request.post(`${baseUrl}/register`, {
        username,
        email,
        password,
    });

    return result;
};

export const logout = async () => {
    await request.get(`${baseUrl}/${Path.Logout}`);
}