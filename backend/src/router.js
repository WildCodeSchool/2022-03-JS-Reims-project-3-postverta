const express = require("express");
const { ItemController } = require("./controllers");
const { UserController } = require("./controllers");
const { CardController } = require("./controllers");

const router = express.Router();

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.post("/users", UserController.add);
router.delete("/users/:id", UserController.delete);

router.get("/cards", ItemController.browse);
router.get("/card/:id", ItemController.read);
router.put("/card/:id", ItemController.edit);
router.post("/card", ItemController.add);
router.delete("/card/:id", ItemController.delete);


module.exports = router;
