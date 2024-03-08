import { useQuery } from "@tanstack/react-query";

const fetchProducts = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useFetch = <T,>(url: string) => {
  return useQuery<T>({
    queryKey: [url],
    queryFn: () => fetchProducts<T>(url),
  });
};
