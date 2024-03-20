# Bookstore API Documentation

Welcome to the documentation for the Bookstore API. This API allows you to manage books and users within a bookstore system. Below you'll find information on the available routes and how to interact with them.

## Base URL

The base URL for all API requests is `http://localhost:{PORT}`, where `{PORT}` is the port specified in your environment variables.

## User Routes

### Register a New User

#### Endpoint: `POST /users/register`

This endpoint allows users to register with the bookstore system by providing their name, email, password, and isAdmin status.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword",
  "isAdmin": false
}

#### Endpoint: `POST /users/login`
This endpoint allows registered users to log in to the system by providing their email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
Notes:
Upon successful login, a JSON Web Token (JWT) is provided in the response, which should be included in subsequent requests for authentication.
Book Routes
Get All Books
#### Endpoint:  GET /books

This endpoint retrieves a list of all books in the system. Optionally, you can filter the books by category or author using query parameters.

Query Parameters:

category (optional): Filter books by category.
author (optional): Filter books by author.
Get Book by ID
#### Endpoint:  GET /books/:id
This endpoint retrieves a specific book by its unique ID.

Update Book Details
#### Endpoint: PUT /books/:id
This endpoint allows you to update the details of a book by its ID. Note that you need to be authenticated as an admin user to access this route.

**Request Body:**
```json
{
  "title": "Updated Title",
  "author": "New Author",
  "category": "New Category",
  "price": 29.99,
  "quantity": 50
}
Delete Book by ID
#### Endpoint:  DELETE /books/:id
This endpoint allows you to delete a book from the system by its ID. Note that you need to be authenticated as an admin user to access this route.

Add New Book
#### Endpoint: POST /books
This endpoint allows you to add a new book to the system. Note that you need to be authenticated as an admin user to access this route.

**Request Body:**
```json
{
  "title": "New Book",
  "author": "New Author",
  "category": "New Category",
  "price": 19.99,
  "quantity": 100
}

