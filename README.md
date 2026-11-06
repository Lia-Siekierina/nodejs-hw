# Node.js Homework 1

A simple REST API built with Node.js and Express.js.

## Technologies

- Node.js
- Express.js
- CORS
- dotenv
- pino-http

## Installation

```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The server runs on `http://localhost:3000` by default.

## Available Routes

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | `/notes`         | Retrieve all notes         |
| GET    | `/notes/:noteId` | Retrieve a note by ID      |
| GET    | `/test-error`    | Test server error handling |

## Error Handling

- `404` — Route not found.
- `500` — Internal server error.
