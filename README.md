
# HRISTINA’S CRAFT WORLD ReactJS

The project **HRISTINA’S CRAFT WORLD ReactJS** is an online platform where handmade things from and with crepe paper can be listed. Here you can enjoy exquisitely made crepe paper bouquets, also decorations for home or your unforgettable party, as well as see a variety of gift boxes decorated with crepe paper. On this platform, the user will have the opportunity to both view and browse their own crepe paper stuff. Let's share the pleasure of our hobby - to create beautiful flowers and decorations that will be part of the comfort of the day.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [How it works](#how-it-works)
5. [Project Structure](#project-structure)
6. [API Reference](#api-reference)
7. [API Endpoints](#api-endpoints)
8. [License](#license)
9. [Credits](#credits)

## Project Overview

**HRISTINA’S CRAFT WORLD ReactJS** aims to bring together people for whom the beauty of small things makes тхеир day beautiful and smiling. It is a place where anyone can view or showcase incredible flowers, bouquets, or decorations made solely from crepe paper.

## Tech Stack




[![JavaScript](https://img.shields.io/badge/JavaScript-brightgreen.svg)](https://github.com/HristinaStoyanova68/Crepe-Paper-Flower-Shop)





![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-Language-blue)
![CSS](https://img.shields.io/badge/CSS-Styles-orange)

![React](https://img.shields.io/badge/React-Library-blue)
![react-router-dom](https://img.shields.io/badge/react--router--dom-Library-red)

![Vite](https://img.shields.io/badge/Vite-Tool-yellow)
![Firebase](https://img.shields.io/badge/Firebase-Platform-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Framework-purple)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Features

- ### Carousel Features:

**1.Collections Carousel:**
Our application features three distinct carousels showcasing the names of the following collections: 
- bouquets 
- decorations
- gift boxes

**2.Items Carousel:**
These carousel offer a visual representation of each collection, allowing users to preview three elements from each category swiftly.

**3.New Releases Carousel:**
Additionally, we provide a carousel displaying the most recent items added to our platform. This carousel showcases the latest additions from all collections, providing users with a quick glance at the most recent items available.

- ### Dropdown Navigation for Collections:

Our application includes a dropdown menu containing the names of the various collections. This feature enables users to easily and swiftly navigate to their preferred collection, allowing them to explore the items within it effortlessly.

- ### User Authentication: 
Secure user authentication ensures a personalized experience for each member with their created items.


## How it works

- **Account Creation:**
Users register to create personalized accounts, allowing them to create, modify, or delete items.
- **Creating an Item in a Collection:** 
Once registered, users choose a collection in which they can add their own item.
- **Real-time Updates:** 
All changes made to the collections, including additions and modifications, are updated in real-time, ensuring that information about each item is current.
- **Liking an Item:** 
Any logged-in user who is not the owner of an item can like it, and the count of likes is displayed on the item's screen.
- **Guest Visitors:** 
Unauthenticated visitors can browse all collections and their contents but cannot add, modify, delete, or like items within the collections.

## Project Structure

The project follows a structured organization to enhance maintainability and ease of navigation. Here's a brief overview of the main directories and their purposes:

- **/client:**
 Contains the frontend application built with React.

- **/public:**
 Static assets and HTML template.

- **/src:**
 React components, styles, and application logic.

 - **/server:**
 REST service, provided for educational purposes by **SoftUni Practice Server**.

## API Reference

- ### API Description:

The API service serves as the backend for a product-focused website that facilitates user registration, login functionality, and navigation for both registered and guest users.

#### User Authentication:

- **Registration:** Allows users to create personalized accounts, enabling them to create, edit, or delete items.
- **Login:** Registered users can log in to access additional functionalities.
- **Guest Access:** Unregistered users can browse the site but cannot perform CRUD operations or like items.

#### User Actions:

- **Create, Edit, Delete Items:** Logged-in users have the ability to create, modify, and delete items.
- **View Created Items:** Users can view all items they've created.
- **Like Items:** Logged-in users (non-creators) can like items but cannot like their own created items.

- ### Server

#### Usage

This is **REST service**, provided for educational purposes by **SoftUni Practice Server**. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

## API Endpoints

- ### Authentication

#### BaseUrl

`http://localhost:3030/users`

#### Register:

##### POST /register

**Description: Register a new user.**

**Request:**
```json
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```
**Response:**
```json
{
    "userData": "userData"
}
```

#### Login:

##### POST /login

**Description: Authenticate and log in a user.**

**Request:**
```json
{
    "username": "string",
    "password": "string"
}
```
**Response:**
```json
{
    "User Data": "userData"
}
```

- ### Collections

#### BaseUrl

`http://localhost:3030/data`

##### GET /bouquets

##### GET /decorations

##### GET /gift_boxes

**Description: Get Collections**

**Request:**
```json
{
    "collectionName": "string",
}
```
**Response:**
```json
{
    "collectionName ": "collectionName"
}
```

- ### For both logged-in and guest users:

##### GET /:collectionName/:itemId/details

**Description: Get item and it's details.**

**Request:**
```json
{
    "collectionName": "string",
    "itemId": "unique_id_here"
}
```
**Response:**
```json
{
    "itemData ": "itemData"
}
```

- ### For logged in users:

**Likes functionality**

#### BaseUrl

`http://localhost:3030/data/likes`

##### GET/:itemId

**Description: Get all likes**

**Request:**
```json
{
    "itemId": "unique_id_here"
}
```
**Response:**

The response will be an array of objects, where the key for each object will be its index in the array, and the value will be "itemData".

Example structure:

```json
[
    {
        "0": "likeData"
    },
    {
        "1": "likeData"
    },
    {
        "2": "likeData"
    },
    ...
]
```

- ### For Owner users:

#### BaseUrl

`http://localhost:3030/data`

##### GET /:collectionName/:itemId/edit

**Description: Edit item's details.**

**Request:**
```json
{
    "collectionName": "string",
    "itemId": "unique_id_here"
}
```
**Response:**
```json
{
    "itemData ": "itemData"
}
```

##### GET /:collectionName/:itemId/remove

**Description: Get item and remove it.**

**Request:**
```json
{
    "collectionName": "string",
    "itemId": "unique_id_here"
}
```
**Response:**
```json
{
    "success": true,
}
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Credits
This documentation is writen with the help of [ChatGPT](https://www.openai.com/chatgpt/)







