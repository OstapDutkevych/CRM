const CategoryModel = require("../models/Category");
const PositionModel = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

module.exports.getAllCategory = async (req, res) => {
  try {
    const allCategories = await CategoryModel.find({
      user: req.user.idres
    });
    res.status(200).json(allCategories);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getCategoryById = async (req, res) => {
  try {
    const categoryById = await CategoryModel.findById(req.params.id);
    res.status(200).json(categoryById);
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.deleteCategoryById = async (req, res) => {
  try {
    await CategoryModel.remove({ _id: req.params.id });
    await PositionModel.remove({ category: req.params.id });
    res.status(200).json({
      message: "Category deleted"
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.createCategory = async (req, res) => {
  const category = new CategoryModel({
    name: req.body.name,
    imageSrc: req.file ? req.file.path : "",
    user: req.user.id
  });
  console.log(req.user);
  try {
    await category.save();
    res.status(201).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.updateCategoryById = async (req, res) => {
  const updatedCategory = {
    name: req.body.name
  };
  if (req.file) {
    updatedCategory.imageSrc = req.file.path;
  }
  try {
    const category = await CategoryModel.findOneAndUpdate(
      {
        _id: req.params.id
      },
      { $set: updatedCategory },
      { new: true }
    );
    res.status(200).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};
