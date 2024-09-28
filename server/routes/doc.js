import express from "express";
import { createDoc, deleteDoc, getAllDocs, getDoc, updateDoc } from "../controllers/docController.js";

const router = express.Router();

router.post("/create-doc", createDoc);
router.post("/update-doc", updateDoc);
router.post("/get-doc", getDoc);
router.post("/delete-doc",deleteDoc)
router.post("/get-all-docs",getAllDocs);

export default router;
