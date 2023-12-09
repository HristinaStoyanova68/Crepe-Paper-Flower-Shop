import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    try {
        const bouquetsItems = await request.get(`${baseUrl}/bouquets`);
        const decorationsItems = await request.get(`${baseUrl}/decorations`);
        const giftBoxesItems = await request.get(`${baseUrl}/gift_boxes`);

        const result = [...bouquetsItems, ...decorationsItems, ...giftBoxesItems];

        return result;
    } catch (error) {
        throw error;
    }
}

export const getCollection = async (collectionName) => {

    try {
        const result = await request.get(`${baseUrl}${collectionName}`);

        return result;
    } catch (error) {
        throw error;
    }
};

export const getItem = async (collectionName, itemId) => {
    try {
        const result = await request.get(`${baseUrl}/${collectionName}/${itemId}`);

        return result;
    } catch (error) {
        throw error;
    }
};

export const getOwnerItems = async (userId) => {

    try {
        const result = (await getAll()).filter(x => x._ownerId === userId);

        return result;
    } catch (error) {
        throw error;
    }
}

export const create = async (collectionName, itemData) => {

    try {
        const result = await request.post(`${baseUrl}/${collectionName}`, itemData);
    
        return result;
    } catch (error) {
        throw error;
    }
};

export const edit = async (collectionName, itemId, itemData) => {
    try {
        const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, itemData);
    
        return result;
    } catch (error) {
        throw error;
    }
};

export const remove = async (collectionName, itemId) => {

    try {
        await request.remove(`${baseUrl}/${collectionName}/${itemId}`);
    } catch (error) {
        throw error;
    }
}