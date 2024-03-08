import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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

export default function ProductDetails() {
  const { id } = useParams<string>();
  const { data, isLoading, error } = useFetch<Product>(
    `https://dummyjson.com/products/${id}`
  );

  console.log(data, id);

  return (
    <Box p={2}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Could not fetch the data. Please try again.</Text>}

      {data && (
        <Flex flexDir="column" gap={4}>
          <Heading>{data.title}</Heading>

          <Flex justify="center">
            {data.images.map((image, index) => (
              <Image key={index} src={image} w="40%" />
            ))}
          </Flex>

          <Text>
            <b>Description:</b> {data?.description}.
          </Text>

          <Text>
            <b>Brand:</b> {data.brand}
          </Text>

          <Text>
            <b>Category:</b> {data.category}
          </Text>

          <Text>
            <b>Price:</b> {data.price}
          </Text>

          <Text>
            <b>Rating:</b> {data.rating}
          </Text>

          <Text>
            <b>In stock:</b> {data.stock}
          </Text>
        </Flex>
      )}
    </Box>
  );
}
