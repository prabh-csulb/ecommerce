export interface ProductsResponse {
  limit: number;
  skip: number;
  total: number;
  message: string;
  products: ProductsData[];
}

export interface ProductsData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: number;
  images: string[];
  price: number;
  rating: string;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface ProductsResponseBody {
  data: ProductsResponse;
}
