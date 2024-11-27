import { Injectable } from '@angular/core';
import { CAR_MOCK } from '../../assets/car-mock';
import { Observable, of } from 'rxjs';
import { Car } from '../interfaces/car-data-interface';

const DEFAULT_CAR: Car = {
  id: 'AAA',
  aceitaTroca: 'Sim',
  unicoDono: 'Não',
  cor: 'Não encontrado',
  ipvaPago: 'Não encontrado',
  finalPlaca: 1,
  marca: 'Não encontrado',
  ano: 1,
  modelo: 'Não encontrado',
  combustivel: 'Não encontrado',
  preco: 1,
  quilometragem: 1,
  cambio: 'Não encontrado',
  imagens: [
    {
      id: 'cliente1/xV7jqo1eDfTjR8KXQMV3/Volkswagen_Gol_Gasolina',
      url: 'https://res.cloudinary.com/dixtmxvwe/image/upload/v1731787920/cliente1/xV7jqo1eDfTjR8KXQMV3/Volkswagen_Gol_Gasolina.png',
    },
    {
      id: 'cliente1/xV7jqo1eDfTjR8KXQMV3/Volkswagen_Gol_Gasolina',
      url: 'https://res.cloudinary.com/dixtmxvwe/image/upload/v1731787921/cliente1/xV7jqo1eDfTjR8KXQMV3/Volkswagen_Gol_Gasolina.png',
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars(): Observable<Car[]> {
    return of(CAR_MOCK.response);
  }

  getCarById(id: string): Observable<Car> {
    return of(
      CAR_MOCK.response.find((car: Car) => car.id === id) ?? DEFAULT_CAR
    );
  }
}
