import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarsService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car:ICar) {
    const carODM = new CarODM();
    const addCar = await carODM.create(car);
    return this.createCarDomain(addCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const result = (await carODM.getAll()).map((e) => 
      this.createCarDomain(e));
    return result;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const result = await carODM.getById(id);
    return this.createCarDomain(result);
  }

  public async update(id: string, carObj: ICar) {
    const carODM = new CarODM();
    const result = await carODM.update(id, carObj);
    // if (!result) throw new Error('Car not found', 404);
    return this.createCarDomain(result);
  }
}

export default CarsService;