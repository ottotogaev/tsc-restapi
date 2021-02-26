import express, { Router } from 'express';
import * as controller from '../controllers/sample';
const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);

export = router; // ------------
