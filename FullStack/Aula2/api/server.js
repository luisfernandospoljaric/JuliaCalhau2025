const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000, () =>{
    console.log('servidor rodando em http://localhost:4000')
});