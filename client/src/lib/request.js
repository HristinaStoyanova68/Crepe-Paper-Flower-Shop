// const buildOptions = (data) => {
//     const options = {};

//     if (data) {
//         options.body = JSON.stringify(data);
//         options.headers = {
//             'Content-Type': 'application/json',
//         };
//     }

//     const token = localStorage.getItem('accessToken');

//     if (token) {
//         options.headers = {
//             ...options.headers,
//             'X-Authorization': 'accessToken',
//         }
//     }

//     return options;
// }

// const request = async (method, url, data) => {
//     const response = await fetch(url, {
//         ...buildOptions(data),
//         method,
//     });
//     console.log(response);
//     console.log(response.status);

//     if (response.status === 204) {
//         console.log(response.status);

//         return {};
//     }

//     if (response.headers.get('content-length') === '0' || response.status === 201) {
//         return {}; // Връщане на празен обект за празен отговор
//     }

    

//     const contentType = response.headers.get('content-type');

//     if (contentType && contentType.includes('application/json')) {
//         const result = await response.json();
//         return result;
//     } else {
//         // Ако отговорът не е валиден JSON, може да се върне празен обект или друго подходящо стойност за случая
//         return {};
//     }

//     // const result = await response.json();

//     // if (!response.ok) {
//     //     throw result;
//     // }

//     // return result;

    
// };

// export const get = request.bind(null, 'GET');
// export const post = request.bind(null, 'POST');
// export const put = request.bind(null, 'PUT');
// export const remove = request.bind(null, 'DELETE');
// export const patch = request.bind(null, 'PATCH');


const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
        'content-type': 'application/json',
        };  
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        }
    }

    return options;
}

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {

        return {};
    }

    const result = await response.json();

    if(!response.ok) {
        throw result;
    }

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');