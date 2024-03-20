# Masai Library API Documentation

## Introduction

Welcome to the documentation for the Masai Library backend API. This API allows users to browse and purchase books online. It is built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

## Base URL

The base URL for all API endpoints is: https://masai-library-backend-j9n5.onrender.com

## Authentication

To access protected routes, users need to register and login. Authentication is done via JWT token-based authorization.

## API Endpoints

### Register
- *Method:* POST
- *Endpoint:* users/register
- *Description:* Allows customers to register. Hashes the password on store.
- *Request Body:*
  json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
    "isAdmin""true"
  }

### Login
- **Method:** POST
- **Endpoint:** `users/login`
- **Description:** Allows customers to login. Hashes the password on store.
- **Request Body:**
  json
  {
  "email": "john@example.com",
  "password": "password"
}

### Get All Books
- *Method:* GET
- *Endpoint:* /books
- *Description:* Returns a list of all available books.
- *Request Body:*
  json
  {
  "msg": "All Books Data",
  "books": []
}

### Get Book by ID
- **Method:** GET
- **Endpoint:** `/books/:id`
- **Description:**Returns the details of a specific book identified by its ID.

- **Request Body:**
  - **Response:** `Book Object`

### Get Books by Category
- **Method:** GET
- **Endpoint:** `/books?category=fiction`
- **Description:**Returns the details of a specific book identified by its ID.

- **Request Body:**
  - **Response:** `Array of book objects`

### Get Books by Author and Category
- **Method:** GET
- **Endpoint:** `/books?author=corey&category=fiction`
- **Description:**Returns books whose author is corey and category is fiction.

- **Request Body:**
  - **Response:** `Array of book objects`

### Add New Book
- **Method:** POST
- **Endpoint:** `/books`
- **Description:** Allows admin to add new books to the system. (Protected Route)
- **Request Body:**
  json
  {
    "title": "Book Title",
  "author": "Author Name",
  "category": "fiction",
  "price": 10.99,
  "quantity": 10
  }

 ### Update Book by ID
- *Method:* PUT
- *Endpoint:* /books/:id
- *Description:* Allows admin to update the details of a specific book identified by its ID. (Protected 
- *Request Body:*
  - *Response:* Updated Array of book objects

