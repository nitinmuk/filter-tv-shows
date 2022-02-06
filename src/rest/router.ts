import express from "express";
import showRouter from "./show/show.router";

const router = express.Router();

router.use("/show", showRouter);

export default router;
