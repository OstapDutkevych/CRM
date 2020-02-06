const express = require("express");
const router = express.Router();
const controller = require("../controllers/category");

router.get("/", controller.getCategory);
router.get("/:id", controller.getCategoryById);
router.delete("/:id", controller.deleteCategoryById);
router.post("/", controller.createCategory);
router.patch("/:id", controller.updateCategoryById);

module.exports = router;
