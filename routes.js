const router = require("express").Router();
const {rootController, aboutController, userController} = require("./controller")
router.get("/", rootController);

router.get("/about", aboutController);

router.get("/user", userController);

module.exports = router;