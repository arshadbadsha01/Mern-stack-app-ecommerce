import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// login || post
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
