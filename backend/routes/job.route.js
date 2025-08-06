import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllJobs, getjobById, postJob, getAdminJobs } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").post(isAuthenticated, getAdminJobs);
router.route("/get/:id").post(isAuthenticated, getjobById);


export default router;
