import express from "express";
import * as userAPIController from "../controllers/userAPIController";

const router = express();

router.get("/", userAPIController.userAPI);
router.post("/", userAPIController.csurfTest);

module.exports = router;
