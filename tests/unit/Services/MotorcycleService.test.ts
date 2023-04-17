import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import getAllMotorcycle from '../Mocks/getAllMotorcycle.mock';
import reqNewMotorcycle from '../Mocks/reqNewMotorcycle.mock';
import resNewMotorcycle from '../Mocks/resNewMotorcycle.mock';

describe('Tests on MotorcycleServices', function () {
  it('should create a new motorcycle on DB', async function () {
    const motorcycleService = new MotorcycleService();
    Sinon.stub(Model, 'create').resolves(resNewMotorcycle);
  
    const result = await motorcycleService.createMotorcycle(reqNewMotorcycle);
    expect(result).to.be.deep.equal(resNewMotorcycle);
  });

  it('should return all motorcycles list', async function () {
    const motorcycleService = new MotorcycleService();
    Sinon.stub(Model, 'find').resolves(getAllMotorcycle);
  
    const result = await motorcycleService.getAll();
    expect(result).to.be.deep.equal(getAllMotorcycle);
  });
  
  it('should search and return a car by his id', async function () {
    const motorcycleService = new MotorcycleService();

    Sinon.stub(Model, 'findOne').resolves(resNewMotorcycle);
    const result = await motorcycleService.getById('643d9a86a0a3b50147987c5a');
    expect(result).to.be.deep.equal(resNewMotorcycle);
  });

  afterEach(function () {
    Sinon.restore();
  });
});
