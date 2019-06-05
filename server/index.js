const express = require('express');
const app = express();
const con = require('../db/index.js');

// const {findByUuid} = require('../db/index.js');
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));


// app.get('/categories',)


app.listen(port, ()=>{console.log('listening at port:',port)})