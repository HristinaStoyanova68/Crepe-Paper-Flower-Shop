import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    const bouquetsItems = await request.get(`${baseUrl}/bouquets`);
    const decorationsItems = await request.get(`${baseUrl}/decorations`);
    const giftBoxesItems = await request.get(`${baseUrl}/gift_boxes`);

    const result = [...bouquetsItems, ...decorationsItems, ...giftBoxesItems];

    return result;
}

export const getCollection = async (collectionName) => {

    const result = await request.get(`${baseUrl}${collectionName}`);

    return result;
};

export const getItem = async (collectionName, itemId) => {
    const result = await request.get(`${baseUrl}/${collectionName}/${itemId}`);

    return result;
};

export const getOwnerItems = async (userId) => {

    const result = (await getAll()).filter(x => x._ownerId === userId);

    return result;
}

export const create = async (collectionName, itemData) => {
    
    const result = await request.post(`${baseUrl}/${collectionName}`, itemData);

    return result;
};

export const edit = async (collectionName, itemId, itemData) => {
    const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, itemData);

    return result;
};

export const remove = async (collectionName, itemId) => {

    await request.remove(`${baseUrl}/${collectionName}/${itemId}`);
}