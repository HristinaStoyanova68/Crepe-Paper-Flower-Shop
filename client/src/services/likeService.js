import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const allLikes = async (itemId) => {
    const query = new URLSearchParams({ where: `itemId="${itemId}"` });
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const like = async (itemId) => {
    await request.post(baseUrl, { itemId });
}