const Product = require('../models/products.model');


module.exports.findAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}

module.exports.createProduct = (req, res)=>{
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}

module.exports.findOneProduct = (req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct=>{
            res.json({results: oneProduct})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}

module.exports.updateProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedProduct=>{
        res.json({results: updatedProduct})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
}

module.exports.deleteProduct = (req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct=>{
            res.json({results: deletedProduct})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}