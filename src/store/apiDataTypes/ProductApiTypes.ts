export interface ProductsResponse {
  limit: number;
  message: string;
  offset: number;
  photos: ProductsData[];
  success: boolean;
  total_photos: number;
}

export interface ProductsData {
  description: string;
  id: number;
  title: string;
  url: string;
  user: number;
}

export interface ProductsResponseBody {
  data: ProductsResponse;
}
