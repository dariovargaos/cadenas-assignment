import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { Button, Flex, Link, List, ListItem } from "@chakra-ui/react";

export default function Pagination({ limit, total, page }) {
  const pageNumbers = [];
  const navigate = useNavigate();

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }
  return (
    <Flex>
      <Button
        onClick={() => navigate(`/products/${Math.max(page - 1, 1)}`)}
        isDisabled={page === 1}
        colorScheme="telegram"
        color="white"
      >
        Previous
      </Button>
      <List display="flex" w="100%" justifyContent="center" gap={5}>
        {pageNumbers.map((pageNumber) => (
          <ListItem key={pageNumber}>
            <Link
              as={RouterNavLink}
              to={`/products/${pageNumber}`}
              _hover={{ color: "#0088CC" }}
              _activeLink={{ color: "#0088CC" }}
            >
              {pageNumber}
            </Link>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() =>
          navigate(`/products/${Math.min(page + 1, pageNumbers.length)}`)
        }
        isDisabled={page >= Math.ceil(total / limit)}
        colorScheme="telegram"
        color="white"
      >
        Next
      </Button>
    </Flex>
  );
}
