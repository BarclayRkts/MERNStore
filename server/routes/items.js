const express = require('express');
const router = express.Router();

//Iteam Model 
const Item = require('../models/Item');

// @route GET shop
// @desc GET ALL Iteams
// @access PUBLIC

//get all items in the database

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

// @route POST api/items
// @desc POST Create AN Item
// @access PUBLIC

//gets all the items in the database
router.post('/', (req, res) => {
    const newItem = new Item ({
        title: req.body.title,
        pictureURL: req.body.pictureURL,
        description: req.body.description,
        price: req.body.price,
        country: req.body.country

    })
    res.json({
        mes: 'we recieved your data'
    })
    newItem.save().then(item => res.json(item));
});
///api/items

//upload item  product/upload
router.get('/upload', (req, res) => {
    console.log('this localhost/product');
});


// @route DELETE api/iteams/:id
// @desc  Delete Item
// @access PUBLIC

//gets all the items in the database
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success : false}));
})


module.exports = router;