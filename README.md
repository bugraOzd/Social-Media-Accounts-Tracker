# Social Media Management Application

This project is a full-stack web application for managing social media accounts. It allows users to create, read, update, and delete social media entries.

## Technologies Used

### Frontend

- Angular
- RxJS for reactive programming
- ng-icons for icon components

### Backend

- Node.js
- Express.js
- MongoDB (local instance)

## Features

- Display a list of social media accounts
- Add new social media accounts
- Edit existing social media accounts
- Delete social media accounts
- Search functionality to filter social media entries
- Client side pagination
- Mock authentication service that generates a uuid on login and writes it in the local storage
- Store all the pages that user visits and display them in the last visited drawer on the left side of the screen

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   cd Social-Media-Accounts-Tracker && npm install (to install frontend)
   cd socialMediaApi && npm install (to install backend)
   ```
3. Ensure MongoDB is running locally (for more information see: https://www.mongodb.com/docs/manual/installation/)
4. Start the backend server:
   ```
   cd backend && npm start
   ```
5. Start the Angular development server:
   ```
   cd frontend && ng serve
   ```
6. Open your browser and navigate to `http://localhost:4200`

## API Endpoints

- GET `/api/social-media`: Retrieve all social media entries
- POST `/api/social-media`: Create a new social media entry
- GET `/api/social-media/:id`: Retrieve a specific social media entry
- PUT `/api/social-media/:id`: Update a specific social media entry
- DELETE `/api/social-media/:id`: Delete a specific social media entry

## Postman Collection

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/27552449-2bc82366-801b-4ab2-b904-83bd932e1834?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D27552449-2bc82366-801b-4ab2-b904-83bd932e1834%26entityType%3Dcollection%26workspaceId%3D019904ba-fa84-42bc-99ec-2266f0a6d4df)

## Screenshots
<img width="1470" alt="Ekran Resmi 2024-08-03 15 31 19" src="https://github.com/user-attachments/assets/c7eb04e8-d0ab-45bb-859e-884ce400557c">
<img width="1469" alt="Ekran Resmi 2024-08-03 15 31 37" src="https://github.com/user-attachments/assets/4c0fcc4f-f2d7-42c4-a52a-81697e6816df">
<img width="1469" alt="Ekran Resmi 2024-08-03 15 31 50" src="https://github.com/user-attachments/assets/b7e2eb9a-ea32-4241-a34c-16a31c8b8b1e">

