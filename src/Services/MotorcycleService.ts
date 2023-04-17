import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const addMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(addMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const result = (await motorcycleODM.getAll()).map((e) => 
      this.createMotorcycleDomain(e));
    return result;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.getById(id);
    return this.createMotorcycleDomain(result);
  }

  // public async update(id: string, carObj: ICar) {
  //   const carODM = new CarODM();
  //   const result = await carODM.update(id, carObj);
  //   // if (!result) throw new Error('Car not found', 404);
  //   return this.createCarDomain(result);
  // }
}

export default MotorcycleService;