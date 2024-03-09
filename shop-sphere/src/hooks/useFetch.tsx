import { useQuery } from "@tanstack/react-query";

const fetchProducts = async <T,>(
  url: string,
  page: number = 1,
  limit: number = 10
): Promise<T> => {
  const response = await fetch(
    `${url}?skip=${(page - 1) * limit}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useFetch = <T,>(url: string, page: number, limit: number) => {
  return useQuery<T>({
    queryKey: [url, page],
    queryFn: () => fetchProducts<T>(url, page, limit),
  });
};
