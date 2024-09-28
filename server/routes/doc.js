import express from "express";
import { createDoc, getDoc, updateDoc } from "../controllers/docController.js";

const router = express.Router();

router.post("/create-doc", createDoc);
router.post("/update-doc", updateDoc);
router.post("/get-doc", getDoc);
router.post("delete-doc",)

export default router;
