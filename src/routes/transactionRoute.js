import express from "express";
import * as transactionControl from "../controllers/transactionControl.js";

const router = express.Router();

router.delete("/:id", transactionControl.deleteTransaction);

// buy
router.post("/", transactionControl.createTransaction);

// patch update 
router.patch("/date/:id",transactionControl.patchUpdate)

export default router;
