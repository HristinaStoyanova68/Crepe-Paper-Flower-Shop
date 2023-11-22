import * as request from '../components/lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password,
    });

    return result;
}