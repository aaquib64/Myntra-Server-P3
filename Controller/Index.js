const productList = require("../Models/Products.json");

exports.getAllProducts = (req, res) => {
  res.status(200).json(productList);
};

exports.getProductsById = (req, res) => {
  const ProductId = req.params.id;
  const product = productList.find((value) => value.id == ProductId);

  if (product) {
    res.status(200).json({ product });
  } else {
    res.status(404).json({
      message: "Please provide valid product ID",
    });
  }
};

exports.getAllProductstByName = (req, res) => {
  const productName = req.params.names;
  const filterProduct = productList.filter(
    (value) => value.names == productName
  );

  if (filterProduct.length > 0) {
    res.status(200).json(filterProduct);
  } else {
    res.status(404).json({ message: "please Provide Valid Name" });
  }
};

exports.getAllProductByGender = (req, res) => {
  const Gender = req.params.gender;

  const ProductByGen = productList.filter((rest) => rest.gender == Gender);

  if (ProductByGen.length > 0) {
    res.status(200).json(ProductByGen);
  } else {
    res.status(404).json({ message: "please Provide Valid Gender" });
  }
};

exports.getAllProductsByCategory = (req, res) => {
  const Category = req.params.category;

  const ProductByCat = productList.filter((rest) => rest.category == Category);

  if (ProductByCat.length > 0) {
    res.status(200).json(ProductByCat);
  } else {
    res.status(404).json({ message: "please Provide Valid Category" });
  }
};
