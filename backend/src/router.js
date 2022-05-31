const express = require("express");

const { UserController } = require("./controllers");
const { CardController } = require("./controllers");

const router = express.Router();

router.get("/users", UserController.browse);
router.get("/user/:id", UserController.read);
router.put("/user/:id", UserController.edit);
router.post("/user", UserController.add);
router.delete("/user/:id", UserController.delete);


router.get("/cards", CardController.browse);
router.get("/card/:id", CardController.read);
router.put("/card/:id", CardController.edit);
router.post("/card", CardController.add);
router.delete("/card/:id", CardController.delete);

module.exports = router;
