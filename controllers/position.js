const PositionModel = require("../models/Position");
const errorHadler = require("../utils/errorHandler");

module.exports.getPositionByCategoryId = async (req, res) => {
  try {
    const positions = await PositionModel.find({
      category: req.params.categoryId,
      user: req.user.id
    });
    res.status(200).json(positions);
  } catch (e) {
    errorHadler(res, e);
  }
};

module.exports.createPosition = async (req, res) => {
  try {
    const newPosition = PositionModel({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      user: req.user.id
    });
    await newPosition.save();
    res.status(201).json(position);
  } catch (e) {
    errorHadler(res, e);
  }
};
module.exports.deletePositionById = async (req, res) => {
  try {
    await PositionModel.remove({
      _id: req.params.id
    });
    res.status(200).json({
      message: "Position deleted"
    });
  } catch (e) {
    errorHadler(res, e);
  }
};

module.exports.updatePositionById = async (req, res) => {
  try {
    const updatePosition = await PositionModel.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePosition);
  } catch (e) {
    errorHadler(res, e);
  }
};
