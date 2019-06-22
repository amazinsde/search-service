const { Client } = require('pg');
const faker = require('faker');
const { url, password } = require('./asdf');

const db = new Client ({
    user: 'WilliamYang',
    password: password,
    host: url,
    database: 'searchbardb',
    port: 5432
}); 

db.connect()
    .then(() => console.log('We are connected to postgreSQL!'))
    .catch((e) => {
        console.log('Error connecting to PostgreSQL:');
        console.log(e);
    });


db.getItemsById = (id, callback) => {
    db.query(`SELECT * FROM items WHERE id = ${id}`, (err, item) => {
            if(err){
                callback(err, null);
            } else{
                callback(null, item);
            }
        });
}

db.searchItemsByName = (name, callback) => {
    let query = `SELECT * FROM items WHERE LOWER(product_name) LIKE LOWER('%${name}%') LIMIT 100`;
    db.query(query, (err, item) => {
            if(err){
                callback(err, null);
            } else{
                // console.log('CONSOLE LOG',item, query);
                callback(null, item);
            }
        });
}

db.addItem = (object, callback) => {
    let { name, price, type, image } = object;
    let query = `INSERT INTO items (product_name, price, type, image) VALUES ('${name}', ${price}, '${type}', '${image}')`;
    db.query(query, (err, status) => {
        if(err){
            callback(err, null);
        } else{
            callback(null, status);
        }
    });
}

db.updateItem = (id, object, callback) => {
    let { name, price, type, image } = object;
    let subquery = name ? `product_name = '${name}', ` : '';
    subquery = price ? subquery + `price = ${price}, ` : subquery;
    subquery = type ? subquery + `type = '${type}', ` : subquery;
    subquery = image ? subquery + `image = '${image}'` : subquery.slice(0, subquery.length - 2);
    console.log(subquery);
    let query = `UPDATE items SET ${subquery} WHERE id = ${id}`;
    console.log(query);
    db.query(query, (err, status) => {
        if(err){
            callback(err, null);
        } else{
            callback(null, status);
        }
    });
}

db.deleteItem = (id, callback) => {
    let query = `DELETE FROM items WHERE id = ${id}`;
    db.query(query, (err, status) => {
        if(err){
            callback(err, null);
        } else{
            callback(null, status);
        }
    });
}



module.exports = db; 