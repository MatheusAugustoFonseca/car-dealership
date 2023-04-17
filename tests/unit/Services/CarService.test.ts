import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarsService from '../../../src/Services/CarsService';
import getAllCars from '../Mocks/getAllCars.mock';
import reqNewCar from '../Mocks/reqNewCar.mock';
import resNewCar from '../Mocks/resNewCar.mock';
import updatedCar from '../Mocks/updatedCar.mock';

describe('Tests on CarsServices', function () {
  it('should create a new car on DB', async function () {
    const carsService = new CarsService();
    Sinon.stub(Model, 'create').resolves(resNewCar);
  
    const result = await carsService.createCar(reqNewCar);
    expect(result).to.be.deep.equal(resNewCar);
  });

  it('should return all cars list', async function () {
    const carsService = new CarsService();
    Sinon.stub(Model, 'find').resolves(getAllCars);
  
    const result = await carsService.getAll();
    expect(result).to.be.deep.equal(getAllCars);
  });
  
  it('should search and return a car by his id', async function () {
    const carsService = new CarsService();
    Sinon.stub(Model, 'findOne').resolves(resNewCar);
  
    const result = await carsService.getById('643d5b196598959376dba280');
    expect(result).to.be.deep.equal(resNewCar);
  });
  it('should update and return a car by his id', async function () {
    const carsService = new CarsService();
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
  
    const result = await carsService.update('643d5b196598959376dba280', resNewCar);
    expect(result).to.be.deep.equal(updatedCar);
  });

  afterEach(function () {
    Sinon.restore();
  });
});
