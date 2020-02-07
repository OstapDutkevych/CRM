const OrderModel = require("../models/Order");
const errorHandler = require("../utils/errorHandler");
//localhost:5000/api/order?offset=2&limit=5
module.exports.getOrder = async (req, res) => {
  const query = {
    user: req.user.id
  };
  if (req.query.start) {
    query.date = {
      //більше або рівне
      $gte: req.query.start
    };
  }
  if (req.query.end) {
    if (!query.date) {
      query, (date = {});
    }
    query.date["$lte"] = req.query.end;
  }

  if (req.query.order) {
    query.order = +req.query.order;
  }
  try {
    const orders = await OrderModel.find(query)
      .sort({ date: -1 })
      .skip(+req.query.offset)
      .limit(+req.query.limit);
    res.status(200).json(order);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.createOrder = async (req, res) => {
  try {
    const lastOrder = await OrderModel.findOne({ user: req.user.id }).sort({
      date: -1
    });
    const maxOrder = lastOrder ? lastOrder.order : 0;
    const order = new OrderModel({
      list: req.body.list,
      user: req.user.id,
      order: maxOrder + 1
    });

    await order.save();
    res.status(201).json(order);
  } catch (e) {
    errorHandler(res, e);
  }
};
