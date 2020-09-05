const express = require('express')
const router = express.Router();

// Item Model
const Item = require('../../models/Item')

// @route Get api/items
// @desc  Get all items
// @access ublic

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route Post api/items
// @desc  Create  item
// @access Public

router.post('/', (req, res) => {
    const newItem= new Item({
        name:req.body.name
    })

    newItem.save().then(item=>res.json(item))
})

// @route Delete api/items/:id
// @desc  delete items
// @access Public

router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item=>item.remove())
   .then(()=>res.json({ success:"usunięto Twój item"}))
   .catch(err=>res.status(404).json({success:false}))

})


module.exports = router