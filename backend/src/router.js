const express = require("express");
const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/users", ItemController.browse);
router.get("/user/:id", ItemController.read);
router.put("/user/:id", ItemController.edit);
router.post("/user", ItemController.add);
router.delete("/user/:id", ItemController.delete);

router.get("/cards", ItemController.browse);
router.get("/card/:id", ItemController.read);
router.put("/card/:id", ItemController.edit);
router.post("/card", ItemController.add);
router.delete("/card/:id", ItemController.delete);

module.exports = router;
