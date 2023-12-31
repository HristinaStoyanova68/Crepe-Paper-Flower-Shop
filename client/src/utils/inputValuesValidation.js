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

        const usernameRegex = /^[a-zA-Z0-9_\-]+$/;

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
        const password = values.password;

        if (password === '') {
            throw new Error('Password is required!');
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}$/;

        const isValidPassword = (password) => {
            return passwordRegex.test(password);
        };

        if (isValidPassword(password) === false) {
            throw new Error('Your passord must contain lowercase and uppercase and numbers');
        }
    }

    if (values.hasOwnProperty('re-password')) {
        const rePassword = values['re-password'];

        if (values.password !== rePassword) {

            throw new Error('Passwords do not match');
        }
    }

    if (values.hasOwnProperty('name')) {
        const name = values.name;

        if (name === '') {
            throw new Error('Name is required!');
        }

        const nameRegex = /^[A-Za-z0-9\s\-_]{4,50}$/;

        const isValidName = (name) => {
            return nameRegex.test(name);
        }

        if (isValidName === false) {
            throw new Error('Name must contain at least four characters!');
        }

    }

    if (values.hasOwnProperty('imageUrl')) {
        const imageUrl = values.imageUrl;

        if (imageUrl === '') {
            throw new Error('Image is required!');
        }

        const imageUrlRegex = /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;

        const isValidImageUrl = (imageUrl) => {
            return imageUrlRegex.test(imageUrl);
        };

        if (isValidImageUrl(imageUrl) === false) {
            throw new Error('ImageUrl must start with "http://" or "https://"!');
        }

    }

    if (values.hasOwnProperty('description')) {
        const description = values.description;

        if (description === '') {
            throw new Error('Description is required!');
        }

        const descriptionRegex = /^[A-Za-z0-9\s\-_]{4,200}$/;

        const isValidDescription = (description) => {
            return descriptionRegex.test(description);
        }

        if (isValidDescription === false) {
            throw new Error('Descripion must contain at least four characters!!');
        }
    }

    return null;
}