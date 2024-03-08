import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

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

  const galleryImages = data?.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const imageStyle = (item: ReactImageGalleryItem) => (
    <Flex justify="center" align="center" h="100%">
      <Image
        src={item.original}
        alt={item.original}
        style={{ maxWidth: "100%", maxHeight: "80%", objectFit: "contain" }}
      />
    </Flex>
  );

  return (
    <Box p={2}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Could not fetch the data. Please try again.</Text>}

      {data && (
        <Flex flexDir="column" gap={4}>
          <Heading>{data.title}</Heading>

          {galleryImages && galleryImages.length > 0 && (
            <ImageGallery
              items={galleryImages}
              renderItem={imageStyle}
              showPlayButton={false}
              useBrowserFullscreen={false}
            />
          )}

          <Text>
            <b>Description:</b> {data?.description}
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
      <Button colorScheme="blackAlpha">Back</Button>
    </Box>
  );
}
