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

const fetchProducts = async (
  page: number = 1,
  limit: number = 10,
  category?: string
): Promise<ProductsResponse> => {
  let url = "https://dummyjson.com/products";

  if (category) {
    url = `https://dummyjson.com/products/category/${encodeURIComponent(
      category
    )}`;
  } else {
    url += `?skip=${(page - 1) * limit}&limit=${limit}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  console.log(`Fetching products for category: ${category}`);
  return response.json();
};

export const useFetchProducts = (
  page: number,
  limit: number,
  category?: string
) => {
  return useQuery({
    queryKey: ["products", page, limit, category],
    queryFn: () => fetchProducts(page, limit, category),
  });
};
