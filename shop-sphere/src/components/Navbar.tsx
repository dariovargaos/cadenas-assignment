import { NavLink as RouterNavLink } from "react-router-dom";
import { Flex, Heading, Link, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      gap="10px"
      align="center"
      p={2}
      borderBottom="1px solid #e2e2e2"
    >
      <Heading as="h1">Shop Sphere</Heading>

      <Spacer />

      <Link as={RouterNavLink} to="/">
        Home
      </Link>
      <Link as={RouterNavLink} to="/products/1">
        Products
      </Link>
    </Flex>
  );
}
