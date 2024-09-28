import express from "express";
import { createDoc } from "../controllers/docController.js";

const router = express.Router();

router.post("/create-doc",createDoc);

export default router;