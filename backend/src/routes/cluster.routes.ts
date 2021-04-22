import {Router} from 'express';
import clusterController from "../controllers/cluster.controller";

const router = Router();
router.get('/all', clusterController.getClusters);
router.get('/get/:id', clusterController.getCluster);
router.post('/new', clusterController.newCluster);
router.post('/edit', clusterController.editCluster);
export = router;


