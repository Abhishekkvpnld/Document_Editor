import express from "express";
import { getUser, login, logout, signup } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/user",getUser);
router.post("/logout",logout);

export default router;
