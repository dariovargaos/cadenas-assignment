import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Flex,
  Heading,
  IconButton,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";

//icons
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function ProductDetails() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, error } = useFetchProductDetails(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
    <Flex flexDir="column" p={2} gap={2}>
      {isLoading && <Progress isIndeterminate colorScheme="telegram" />}
      {error && <Text>Could not fetch the data. Please try again.</Text>}

      {data && (
        <Flex flexDir="column" gap={4}>
          <Heading as="h2">{data.title}</Heading>

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
      <IconButton
        aria-label="go back button"
        icon={<ArrowBackIcon />}
        onClick={() =>
          navigate(location.state?.from ? location.state.from : "/products/1")
        }
        colorScheme="telegram"
        w="5%"
      />
    </Flex>
  );
}
