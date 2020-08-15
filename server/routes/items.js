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

// get item fro product detail page
//products_by_id"
router.get("/id", (req, res) => {
    let type = req.body.type
    // let productIds = req.query.id

    // console.log("req.query.id", req.query.id)
    let productIds = req.body._id
    console.log(productIds)
    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    // console.log("productIds", productIds)

    
    //we need to find the product information that belong to product Id 
    Item.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});


// @route DELETE api/iteams/:id
// @desc  Delete Item
// @access PUBLIC

//gets all the items in the database
// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({success: true})))
//         .catch(err => res.status(404).json({success : false}));
// })


module.exports = router;