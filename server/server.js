const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/items');

const app = express();

app.use(express.json());

//DB Config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err));

    // Use Routes
    app.use('/api/items', items);
    app.use('/api/items/product', items);

    // // Upload route for products
    // app.use('api/product/upload', products);

app.get('/', (req, res) => {
    res.send("this is the server for the store")
})



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));