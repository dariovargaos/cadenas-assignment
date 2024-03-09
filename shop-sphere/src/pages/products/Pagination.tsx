import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { Button, Flex, Link } from "@chakra-ui/react";

interface PaginationProps {
  limit: number;
  total: number | undefined;
  page: number;
}

export default function Pagination({
  limit,
  total = 0,
  page,
}: PaginationProps) {
  const pageNumbers = [];
  const navigate = useNavigate();

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }
  return (
    <Flex px={2}>
      <Button
        onClick={() => navigate(`/products/${Math.max(page - 1, 1)}`)}
        isDisabled={page === 1}
        colorScheme="telegram"
      >
        Previous
      </Button>
      <Flex w="100%" justify="center" gap={5}>
        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            as={RouterNavLink}
            to={`/products/${pageNumber}`}
            _hover={{ color: "#0088CC" }}
            _activeLink={{ color: "#0088CC" }}
          >
            {pageNumber}
          </Link>
        ))}
      </Flex>
      <Button
        onClick={() =>
          navigate(`/products/${Math.min(page + 1, pageNumbers.length)}`)
        }
        isDisabled={page >= Math.ceil(total / limit)}
        colorScheme="telegram"
      >
        Next
      </Button>
    </Flex>
  );
}
