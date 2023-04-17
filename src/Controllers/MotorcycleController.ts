import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const addMotorcycle = this.req.body;
    try {
      const motorcycle = await this.service.createMotorcycle(addMotorcycle);
      return this.res.status(201).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const result = await this.service.getAll();
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { params: { id } } = this.req;
    try {
      const result = await this.service.getById(id);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  // public async update() {
  //   const { params: { id } } = this.req;
  //   const carObj = this.req.body;
  //   try {
  //     const result = await this.service.update(id, carObj);
  //     if (!result) {
  //       return this.res.status(404).json({ message: 'Car not found' });
  //     }
  //     return this.res.status(200).json(result);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}

export default MotorcycleController;
