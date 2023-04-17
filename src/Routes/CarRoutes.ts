import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).create(),
);

export default carRoutes;