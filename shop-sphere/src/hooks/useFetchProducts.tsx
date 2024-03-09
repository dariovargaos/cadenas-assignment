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
  total: number | undefined;
}

const url = "https://dummyjson.com/products";

const fetchProducts = async (
  page: number = 1,
  limit: number = 10
): Promise<ProductsResponse> => {
  const response = await fetch(
    `${url}?skip=${(page - 1) * limit}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useFetchProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page, limit),
  });
};
