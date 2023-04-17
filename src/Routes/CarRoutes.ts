import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).create(),
);

carRoutes.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

carRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).getById(),
);

carRoutes.put(
// carRoutes.patch(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).update(),
);

export default carRoutes;