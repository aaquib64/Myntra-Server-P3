const productList = require("../Models/Products.json");

exports.getAllProducts = (req, res) => {
  res.status(200).json(productList);
};

exports.getAllProductstByName = (req, res) => {
  const productName = req.params.names;
  const filterProduct = productList.filter((value) => value.names == productName);

  if (filterProduct.length > 0) {
    res.status(200).json( filterProduct );
  } else {
    res.status(404).json({ message: "please Provide Valid Name" });
  }
};

exports.getAllRestaurantByGender = (req, res) => {
  const Gender = req.params.gender;

  const ProductByGen = productList.filter(
    (rest) => rest.gender == Gender
  );

  if (ProductByGen.length > 0) {
    res.status(200).json(ProductByGen );
  } else {
    res.status(404).json({ message: "please Provide Valid Gender" });
  }
};

exports.getAllRestaurantByCategory = (req, res) => {
  const Category = req.params.category;

  const ProductByCat = productList.filter(
    (rest) => rest.category == Category
  );

  if (ProductByGen.length > 0) {
    res.status(200).json(ProductByCat );
  } else {
    res.status(404).json({ message: "please Provide Valid Category" });
  }
};