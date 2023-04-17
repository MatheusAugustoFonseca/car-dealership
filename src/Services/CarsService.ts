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
}

export default CarsService;