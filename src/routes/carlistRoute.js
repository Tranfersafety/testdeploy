import express from "express";
import carlistController from "../controllers/carListController.js";

const router = express.Router();

router.get("/:id", carlistController.getcar);

router.post("/togglePin", carlistController.togglePin);

export default router;
