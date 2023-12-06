export default function inputValuesValidation(values) {

    if (values.hasOwnProperty('username')) {
        const username = values.username;

        if (username === '') {
            throw new Error('Username is required!');
        }

        if (username.length < 6) {
            throw new Error('Username must be more than 6 characters!');
        }

        if (username.length > 18) {
            throw new Error('Username must be less than 18 characters!');
        }

        const usernameRegex = /^[a-zA-Z0-9_]+$/;

        const isValidUsername = (username) => {
            return usernameRegex.test(username);
        };

        if (isValidUsername(username) === false) {
            throw new Error('Invalid username');
        }
    }

    if (values.hasOwnProperty('email')) {
        const email = values.email;

        if (email === '') {
            throw new Error('Email is required!');
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        const isValidEmail = (email) => {
            return emailRegex.test(email);
        };

        if (isValidEmail(email) === false) {
            throw new Error('Invalid email');
        }
    }

    if (values.hasOwnProperty('password')) {
        const username = values.password;
    }

    if (values.hasOwnProperty('re-password')) {
        const username = values['re-password'];
    }

    if (values.hasOwnProperty('name')) {
        const username = values.name;
    }

    if (values.hasOwnProperty('imageUrl')) {
        const username = values.imageUrl;
    }

    if (values.hasOwnProperty('description')) {
        const username = values.description;
    }

    return null;
}