const baseUrl = 'http://localhost:3030/jsonstore/collections';

// export const getAll = async () => {
//     const response = await fetch(baseUrl);
//     const result = await response.json();

//     const data = Object.values(result);

//     return data;
// }

export const getCollection = async (collectionName) => {
    const response = await fetch(`${baseUrl}${collectionName}`);
    const result = await response.json();

    return result;
}