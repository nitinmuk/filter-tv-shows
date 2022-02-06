import express from 'express';
import joiValidatorMiddleware from '../../component/middleware/joi.validator.middleware';

import showController from './show.controller';
import { DRMEnabledShowSchema } from './show.schema';

const router = express.Router();

router.post(
    '/drm-enabled-shows',
    joiValidatorMiddleware(DRMEnabledShowSchema),
    showController.filterDRMEnabledShows,
    );

export default router;