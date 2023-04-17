import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

// carRoutes.get(
//   '/cars',
//   (req, res, next) => new CarsController(req, res, next).getAll(),
// );

// carRoutes.get(
//   '/cars/:id',
//   (req, res, next) => new CarsController(req, res, next).getById(),
// );

// carRoutes.put(
// // carRoutes.patch(
//   '/cars/:id',
//   (req, res, next) => new CarsController(req, res, next).update(),
// );

export default motorcycleRoutes;