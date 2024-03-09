import { useQuery } from "@tanstack/react-query";

const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch("https://dummyjson.com/products/categories");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
