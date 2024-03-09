import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

//components
import Pagination from "./Pagination";

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

export default function Products() {
  const [page, setPage] = useState(1);
  const { pageNumber } = useParams();
  const limit = 10;
  const { data, isLoading, error } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products",
    page,
    limit
  );

  useEffect(() => {
    setPage(pageNumber ? parseInt(pageNumber, 10) : 1);

    //scroll to the top of the page after page number changes
    window.scrollTo(0, 0);
  }, [pageNumber]);

  console.log(data);
  return (
    <Box p={2}>
      <Heading as="h1" size="lg">
        Products for your every need...
      </Heading>
      {isLoading && <Text>Loading...</Text>}
      {error && (
        <Text color="red">Could not fetch the data. Please try again.</Text>
      )}
      {data?.products.map((product) => (
        <Flex
          key={product.id}
          p={2}
          align="center"
          gap={3}
          borderTop="1px solid black"
          borderBottom="1px solid black"
          overflow="hidden"
        >
          <Image src={product.thumbnail} alt="Product thumbnail" w="50%" />

          <Spacer />

          <Flex flexDir="column" gap={3} textAlign="center" w="100%">
            <Link
              as={RouterLink}
              to={`/product/${product.id}`}
              state={{ from: `/products/${pageNumber}` }}
            >
              {product.title}
            </Link>
            <Text>{product.description}</Text>
          </Flex>
        </Flex>
      ))}

      <Pagination limit={limit} total={data?.total} page={page} />
    </Box>
  );
}
