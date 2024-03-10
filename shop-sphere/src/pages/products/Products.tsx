import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Progress,
  Spacer,
  Text,
} from "@chakra-ui/react";

//components
import Pagination from "./Pagination";

interface CategoryOption {
  value: string;
  label: string;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryOption | null>(null);
  const [page, setPage] = useState<number>(1);
  const { pageNumber } = useParams<{ pageNumber?: string }>();
  const limit: number = 10;
  const { data, isLoading, error } = useFetchProducts(
    page,
    limit,
    selectedCategory?.value
  );
  const { data: categories, error: categoryError } = useFetchCategories();

  useEffect(() => {
    setPage(pageNumber ? parseInt(pageNumber, 10) : 1);

    //scroll to the top of the page after changing page number
    window.scrollTo(0, 0);
  }, [pageNumber]);

  const categoryOptions = categories?.map((category: string) => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  const handleCategoryChange = (
    selectedOption: SingleValue<CategoryOption>
  ) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <Flex flexDir="column" p={2} gap={5}>
      <Heading as="h2" size="lg">
        Products for your every need...
      </Heading>

      {!isLoading && !categoryError && (
        <Select
          options={categoryOptions}
          onChange={handleCategoryChange}
          value={selectedCategory}
          placeholder="Select a category"
          isClearable
        />
      )}

      {isLoading && <Progress isIndeterminate colorScheme="telegram" />}
      {error && (
        <Text color="red">Could not fetch the data. Please try again.</Text>
      )}
      {data?.products.map((product) => (
        <>
          <Flex
            key={product.id}
            flexDir={["column", "column", "row"]}
            p={2}
            align="center"
            gap={3}
            overflow="hidden"
          >
            <Link
              as={RouterLink}
              to={`/product/${product.id}`}
              state={{
                from: `/products/${pageNumber}`,
              }}
            >
              <Image src={product.thumbnail} alt="Product thumbnail" />
            </Link>

            <Spacer />

            <Flex flexDir="column" gap={3} textAlign="center" w="100%">
              <Link
                as={RouterLink}
                to={`/product/${product.id}`}
                state={{
                  from: `/products/${pageNumber}`,
                }}
                color="#0088CC"
                fontWeight="600"
                fontSize="lg"
              >
                {product.title}
              </Link>
              <Text fontSize="md">{product.description}</Text>
            </Flex>
          </Flex>

          <Divider />
        </>
      ))}

      {!isLoading && (
        <Pagination
          limit={limit}
          total={data?.total}
          page={page}
          selectedCategory={selectedCategory}
        />
      )}
    </Flex>
  );
}
