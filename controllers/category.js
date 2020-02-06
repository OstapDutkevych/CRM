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
  try {
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.updateCategoryById = async (req, res) => {
  try {
  } catch (e) {
    errorHandler(res, e);
  }
};
