# Book Reading App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Created as a job entry test for front-end developer role.

## How to run

### 1.`npm install` 
Install all of the required packages.
### 2.`npm start`
Runs the app in the development mode.
### 3. Install 'Allow CORS: Access-Control-Allow-Origin' plugin on your browser
This step is required because the API used in this project has some cross-origin (CORS) issue.
### 4. Clear localStorage
Clear all localStorage on your browser to use the bookmark feature

## Feedback on the given API
The API cannot be fetched by front-end without additional plugin that allows cross-origin server between front-end and back-end, probably because the configuration in the backend server is not allowing CORS yet.

Aside from the CORS issue, based on my experience working on a similar project, it's better to separate the Book API into two. The first one is used for retrieving a list of books from each category, which only consists of category ID, book ID, cover_url, and authors data, while query parameters remain unchanged. Then, the second API is used for retrieving complete data for each book, with parameters of bookID and returns title, authors, description, sections, etc. By seperating those two APIs, each book detail page can be accessed directly by its book ID from the URL.


