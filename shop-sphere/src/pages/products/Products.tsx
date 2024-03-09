import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Flex, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react";

//components
import Pagination from "./Pagination";

export default function Products() {
  const [page, setPage] = useState<number>(1);
  const { pageNumber } = useParams<{ pageNumber?: string }>();
  const limit: number = 10;
  const { data, isLoading, error } = useFetchProducts(page, limit);

  useEffect(() => {
    setPage(pageNumber ? parseInt(pageNumber, 10) : 1);

    //scroll to the top of the page after page number changes
    window.scrollTo(0, 0);
  }, [pageNumber]);

  console.log(data);
  return (
    <Flex flexDir="column" p={2} gap={5}>
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
          borderTop="1px solid #e2e2e2"
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
    </Flex>
  );
}
