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

  // public async getAll() {
  //   const carODM = new CarODM();
  //   const result = (await carODM.getAll()).map((e) => 
  //     this.createCarDomain(e));
  //   return result;
  // }

  // public async getById(id: string) {
  //   const carODM = new CarODM();
  //   const result = await carODM.getById(id);
  //   return this.createCarDomain(result);
  // }

  // public async update(id: string, carObj: ICar) {
  //   const carODM = new CarODM();
  //   const result = await carODM.update(id, carObj);
  //   // if (!result) throw new Error('Car not found', 404);
  //   return this.createCarDomain(result);
  // }
}

export default MotorcycleService;