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

const url = "https://dummyjson.com/products/";

const fetchProductDetails = async (
  id: string | undefined
): Promise<Product> => {
  const response = await fetch(`${url + id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useFetchProductDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["details"],
    queryFn: () => fetchProductDetails(id),
  });
};
