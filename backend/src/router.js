const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/users", ItemController.browse);
router.get("/users/:id", ItemController.read);
router.put("/users/:id", ItemController.edit);
router.post("/users", ItemController.add);
router.delete("/users/:id", ItemController.delete);


router.get("/cards", ItemController.browse);
router.get("/cards/:id", ItemController.read);
router.put("/cards/:id", ItemController.edit);
router.post("/cards", ItemController.add);
router.delete("/cards/:id", ItemController.delete);

module.exports = router;
