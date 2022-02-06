import express from "express";
import joiValidatorMiddleware from "../../component/middleware/joi.validator.middleware";

import showController from "./show.controller";
import { drmEnabledShowSchema } from "./show.schema";
import wrap from "../../component/rest/response.wrap.middleware";

const router = express.Router();

router.post(
  "/drm-enabled-shows",
  joiValidatorMiddleware(drmEnabledShowSchema),
  wrap(showController.filterDRMEnabledShows)
);

export default router;
