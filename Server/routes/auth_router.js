import express, { Router } from "express";
import { registerController, loginController, contactController, testController, forgotPasswordController } from "../controller/auth_controller.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/contact", contactController);
router.post("/forgetPassword", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok:true });
});

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok:true });
});















export default router;