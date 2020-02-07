const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("../controllers/category");
const upload = require("../middleware/upload");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAllCategory
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getCategoryById
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.deleteCategoryById
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.createCategory
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.updateCategoryById
);

module.exports = router;
