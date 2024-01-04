const express = require('express');
const bookRoute = require('./routes/books.route.js');

const app = express();

app.use(express.json());

app.use("/api/books", bookRoute)

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});