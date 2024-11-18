import { ApiCarResponse } from '../app/interfaces/car-data-interface';

export const CAR_MOCK: ApiCarResponse = {
  response: [
    {
      id: 'A1',
      aceitaTroca: 'Sim',
      unicoDono: 'Não',
      cor: 'Prata',
      ipvaPago: 'Não',
      finalPlaca: 1,
      marca: 'Volkswagen',
      ano: 2017,
      modelo: 'Gol',
      combustivel: 'Gasolina',
      preco: 58000,
      quilometragem: 80000,
      cambio: 'Manual',
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
    },
  ],
};
