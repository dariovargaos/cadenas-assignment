import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { Flex, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";

//icons
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

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

  const isSmallScreen = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex px={2}>
      <IconButton
        aria-label="previous page"
        icon={<ArrowLeftIcon />}
        onClick={() => navigate(`/products/${Math.max(page - 1, 1)}`)}
        isDisabled={page === 1}
        colorScheme="telegram"
        variant="ghost"
      />
      <Flex
        w="100%"
        justify="center"
        align="center"
        gap={isSmallScreen ? 4 : 5}
      >
        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            as={RouterNavLink}
            to={`/products/${pageNumber}`}
            _hover={{ color: "#0088CC" }}
            _activeLink={{ color: "#0088CC" }}
            fontSize="lg"
          >
            {pageNumber}
          </Link>
        ))}
      </Flex>
      <IconButton
        aria-label="next page"
        icon={<ArrowRightIcon />}
        onClick={() =>
          navigate(`/products/${Math.min(page + 1, pageNumbers.length)}`)
        }
        isDisabled={page >= Math.ceil(total / limit)}
        colorScheme="telegram"
        variant="ghost"
      />
    </Flex>
  );
}
