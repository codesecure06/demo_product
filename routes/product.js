const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

router.get("/check", (req, res) => {
  // console.log(req.seller.id);
  res.send({
    status: "success"
  })
});

router.get("/product", (req, res) => {
  // console.log(req.seller.id);
  Product.find().then((productData) => {
    if (productData) {
      return res.status(200).send({
        message: "Data Successfully fetch.",
        data: productData,
        total: productData.length,
      });
    }
  });
});

router.post("/product", (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
  });

  product.save().then((pro) => {
    return res.status(200).send({
      message: "Product Successfully Added.",
      data: pro,
    });
  });
});

router.put("/product", (req, res) => {
  let condition = {
    _id: req.query.id,
  };

  Product.findOne(condition)
    .then((productData) => {
      if (productData) {
        if (req.body.productName) {
          productData.productName = req.body.productName;
        }

        if (req.body.description) {
          productData.description = req.body.description;
        }

        if (req.body.price) {
          productData.price = req.body.price;
        }

        productData
          .save()
          .then((proData) => {
            res.send({
              message: "Product Successfully Updated.",
              data: proData,
            });
          })
          .catch((err) => {
            res.send(err);
          });
      } else {
        return res.send({
          message: "Product Not Found.",
        });
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.delete("/product", (req, res) => {
  let condition = {
    _id: req.query.id,
  };

  Product.findOne(condition)
    .then((productData) => {
      if (productData) {
        productData.remove().then(() => {
          res.send({
            message: "successfully removed.",
          });
        });
        // res.send()
      } else {
        res.send({
          message: "Product not found",
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
