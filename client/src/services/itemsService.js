import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/data/items';
const baseUrl = 'http://localhost:3030/data';

// export const getAll = async () => {
//     const response = await fetch(baseUrl);
//     const result = await response.json();

//     const data = Object.values(result);

//     return data;
// }

export const getCollection = async (collectionName) => {
    // const response = await fetch(`${baseUrl}${collectionName}`);
    // const result = await response.json();

    const result = await request.get(`${baseUrl}${collectionName}`);

    return result;
};

export const getItem = async (collectionName, itemId) => {
    const result = await request.get(`${baseUrl}/${collectionName}/${itemId}`);

    return result;
};

export const create = async (collectionName, itemData) => {
    const data = {
        ...itemData,
        price: Number(itemData.price),
        soldAmount: 0,
    };
    const result = await request.post(`${baseUrl}/${collectionName}`, data);
    console.log(result);
    return result;
};

export const edit = async (collectionName, itemId, itemData) => {
    // console.log(itemData);
    const result = await request.put(`${baseUrl}/${collectionName}/${itemId}`, itemData);

    return result;
}