const express = require("express");
const { UserController } = require("./controllers");
const { CardController } = require("./controllers");

const router = express.Router();

router.get("/cards", CardController.browse);
router.get("/card/:id", CardController.read);
router.put("/card/:id", CardController.edit);
router.post("/card", CardController.add);
router.delete("/card/:id", CardController.delete);

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.post("/users", UserController.add);
router.delete("/users/:id", UserController.delete);

module.exports = router;
