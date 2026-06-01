## REST api (Representational State Transfer).

1. State means it stateless.
2. Server does not store any information about the client's previous requests.
3. Client-Server.
4. Uniform Interface(It is constraint. It have the 4 principles, 1 -> Resource Identification, 2 -> Resource Manpulation, 3 -> Self discriptive messages, 4-> HATEOAS)


## HTTP Request Structure

POST /users HTTP/1.1

Headers

Body

## Types of HTTP Status Codes
HTTP status codes are categorized into five groups.

1xx – Informational

2xx – Success

3xx – Redirection

4xx – Client Error

5xx – Server Error



# Problem Statement

## User Management API

A REST API that allows clients to:

- Create users
- View users
- Update users
- Delete users

# Requirements

## Functional Requirements

- Create User
- Get User
- Get All Users
- Update User
- Delete User

## Non-Functional Requirements

- Fast response
- Scalable
- Maintainable
- Secure
- Easy to extend

## Resource Design

REST starts with resources.

User

Resource fields:

{
  id,
  name,
  email
}

## API Design

Design endpoints before coding.

## Method	Endpoint	Purpose
- GET	    /users	    Get users
- GET       /users/:id	Get user
- POST	    /users	    Create user
- PATCH	    /users/:id	Update user
- DELETE	/users/:id	Delete user


## Request/Response Design
Create User

Request

{
  "name": "Charan",
  "email": "charan@gmail.com"
}

Response

{
  "success": true,
  "data": {
    "id": 1,
    "name": "Charan",
    "email": "charan@gmail.com"
  }
}

## Data Model Design

Before coding, define your model.


Schema:

{
  id: Number,
  name: String,
  email: String
}

Later in PostgreSQL:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);


