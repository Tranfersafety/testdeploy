import express from "express";
import * as temporaryCarController from "../controllers/temporaryCarController.js";

const router = express.Router();

router.get("/:id", temporaryCarController.getCarById);

// delete temp
router.delete("/:id", temporaryCarController.deleteCarById);

router.post("/",temporaryCarController.postCar)

export default router;
