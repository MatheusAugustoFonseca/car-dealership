import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const addCar = this.req.body;
    try {
      const car = await this.service.createCar(addCar);
      return this.res.status(201).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;
