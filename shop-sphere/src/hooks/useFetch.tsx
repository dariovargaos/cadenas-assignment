import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

const fetchProducts = async (url: string): Promise<ProductsResponse> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Cannot fetch the data.");
  }

  return response.json();
};

export const useFetch = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => fetchProducts(url),
  });
};
