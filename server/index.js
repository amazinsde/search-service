require('newrelic');
const express = require('express');
const app = express();
const db = require('../db/index.js');
const faker = require('faker');
//NEW RELIC for metrics on DB response-time

const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));


app.listen(port, () => {console.log('listening at port:', port)});


app.get('/api/items/id/:id', (req, res) => {
    console.log('Got a get request for id = ', req.params.id);
    db.getItemsById(req.params.id, (err, data) => {
        if(err){
            console.log('Error fetching items from DB:');
            console.log(err);
            res.status(401).send();
        } else{
            console.log('Got items from the database:');
            res.status(201).send(data);
        }
    });
});

app.get('/api/items/name/:name', (req, res) => {
    // console.log('Got a get request for name = ', req.params.name);
    db.searchItemsByName(req.params.name, (err, data) => {
        if(err){
            console.log('Error fetching item from DB:');
            console.log(err);
            res.status(401).send(err);
        } else{
            // console.log('Got an item from database');
            res.status(201).send(data);
        }
    });
});

app.post('/api/items', (req, res) => {
    console.log('Got an Item post request:');
    let { name, price, type, image } = req.body;
    const item = { name, price, type, image };
    if( !name || !price || !type || !image ){
        console.log('Request.body not properly formatted');
        res.status(422).send('Please fix your input');
    } else {
        db.addItem(item, (err) => {
            if(err){
                console.log('Error posting item to DB:');
                console.log(err);
                res.status(501).send(err);
            } else {
                console.log('Successful post to DB');
                res.status(201).send(); 
            }
        })
    }
});

app.put('/api/items/id/:id', (req, res) => {
    console.log('Got an Item put request:');
    console.log(req.body)
    let { name, price, type, image } = req.body;
    const item = { name, price, type, image };
    let id = req.params.id;
    if( !name && !price && !type && !image ){
        console.log('Request.body not properly formatted');
        res.status(422).send('Please fix your input');
    } else {
        db.updateItem(id, item, (err) => {
            if(err){
                console.log('Error updating item to DB:');
                console.log(err);
                res.status(501).send(err);
            } else {
                console.log(`Successful update to id: ${id}`);
                res.status(201).send(); 
            }
        }); 
    }
});

app.delete('/api/items/id/:id', (req, res) => {
    let id = req.params.id;
    db.deleteItem(id, (err) => {
        if(err){
            console.log('Error deleting item from DB:');
            console.log(err);
            res.status(501).send(err);
        } else {
            console.log(`Successful deletion of id: ${id}`);
            res.status(201).send(); 
        }
    }); 
});



const seedTheDatabase = async function(x) {

    let name, price, type, image;

    name = faker.commerce.productName();
    price = faker.commerce.price();
    type = faker.commerce.department();
    image = `https://loremflickr.com/1280/720/?lock=${Math.floor(Math.random() * 1000)}`;

    return new Promise((resolve) => {
        db.query(`INSERT INTO items (product_name, price, type, image) 
        VALUES ('${name}', ${price}, '${type}', '${image}')`, (err, res) => {
            if(err){
                console.log('Error inserting item to DB:');
                console.log(err);
                resolve(x);
            } else{
                resolve(x + 1);
            }
        });
    });

};

async function seedOneMillion() {
    let x = 0
    console.log('about to seed...');
    while(x < 10000000){
        x = await seedTheDatabase(x);
        if(x % 100000 === 0){
            console.log(x);
        }
    }
}
