interface Image {
  id: string;
  url: string;
}

export interface Car {
  id: number;
  aceitaTroca: string;
  unicoDono: string;
  cor: string;
  ipvaPago: string;
  finalPlaca: number;
  marca: string;
  ano: number;
  modelo: string;
  combustivel: string;
  preco: number;
  quilometragem: number;
  cambio: string;
  imagens: Image[];
}

export interface ApiCarResponse {
  response: Car[];
}
