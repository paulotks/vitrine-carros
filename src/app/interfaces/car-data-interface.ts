interface Image {
  id: string;
  url: string;
}

export interface Car {
  id: string;
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

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
