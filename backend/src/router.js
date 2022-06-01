const express = require("express");
const { UserController } = require("./controllers");
const { CardController } = require("./controllers");

const router = express.Router();

router.get("/users", CardController.browse);
router.get("/user/:id", CardController.read);
router.put("/user/:id", CardController.edit);
router.post("/user", CardController.add);
router.delete("/user/:id", CardController.delete);

router.get("/cards", UserController.browse);
router.get("/card/:id", UserController.read);
router.put("/card/:id", UserController.edit);
router.post("/card", UserController.add);
router.delete("/card/:id", UserController.delete);

module.exports = router;
