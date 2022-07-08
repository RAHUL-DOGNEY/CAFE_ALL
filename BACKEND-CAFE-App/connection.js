// const express = require('express');
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://student:PqZF0eQW0SI1Kqky@cluster0.1c1apkh.mongodb.net/booksDB");
// const app = express();
// const con = mongoose.connection;

// con.on("open", () => {
//     console.log("connected to database");
// });
// app.use(express.json());


const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Url = "mongodb://localhost:27017";
const db_name = 'booksDB';
const client = new mongoClient(Url);
client.connect(function(err) {
    assert.equal(null, err);
    console.log('connect successfully');
    const db = client.db(db_name);
    // insertDocuments(db, function() {
    //     client.close();
    // })
});