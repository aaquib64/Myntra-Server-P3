//create some routes which can recieve the incoming reuest

const express = require("express"); // Import express package
const router = express.Router(); // Import Router from express package

const controller = require("../Controller/Index"); // Import controller

router.get("/products", controller.getAllProducts);

router.get("/products/:id", controller.getProductsById);

router.get("/productByGender/:gender", controller.getAllProductByGender);

router.get("/getByCategory/:category", controller.getAllProductsByCategory);

// router.get("/:gender/:names", controller.getAllProductstByName);

//router.get('/getMealTypes', controller.getAllMealTypes);

module.exports = router;
