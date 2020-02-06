const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("../controllers/category");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAllCategory
);
router.get("/:id", controller.getCategoryById);
router.delete("/:id", controller.deleteCategoryById);
router.post("/", controller.createCategory);
router.patch("/:id", controller.updateCategoryById);

module.exports = router;
