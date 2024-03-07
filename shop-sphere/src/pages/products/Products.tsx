import { useFetch } from "../../hooks/useFetch";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Products() {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");

  console.log(data);
  return (
    <Box p={2}>
      <Heading as="h1" size="lg">
        Products for your every need...
      </Heading>
      {isLoading && <Text>Loading...</Text>}
      {error && (
        <Text color="red">Cannot fetch the data. Please try again.</Text>
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
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
