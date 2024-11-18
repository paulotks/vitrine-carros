import { Injectable } from '@angular/core';
import { CAR_MOCK } from '../../assets/car-mock';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars() {
    return CAR_MOCK.response;
  }

  getCarById(id: string) {
    return CAR_MOCK.response.find((car) => car.id === id);
  }
}
