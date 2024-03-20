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

