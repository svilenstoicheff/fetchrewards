# Coding Challenge
This repository contains code that completes the following coding challenge: https://fetch-hiring.s3.amazonaws.com/frontend.html. 

It is a Node/Express application. I chose this approach as there didn't appear to be a clean way to retrieve the data file from the client, because of CORS restrictions: The data endpoint does not have its Access-Control-Allow-Origin header set appropriately.  
## Setup
- Clone the repository.
- Run `npm install` and `npm start` from the command lind. 
- Point your browser to localhost:3000

The relevant code is in the following files:
- https://github.com/svilenstoicheff/fetchrewards/blob/main/routes/index.js
- https://github.com/svilenstoicheff/fetchrewards/blob/main/views/index.pug
- https://github.com/svilenstoicheff/fetchrewards/blob/main/public/stylesheets/style.css
