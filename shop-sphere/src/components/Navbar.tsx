import { NavLink as RouterNavLink } from "react-router-dom";
import { Flex, Heading, Image, Link, Spacer } from "@chakra-ui/react";

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
      <Image src="/sphere.png" alt="shop sphere logo" />

      <Spacer />

      <Link
        as={RouterNavLink}
        to="/"
        _activeLink={{ color: "#0088CC" }}
        _hover={{ textDecoration: "none", color: "#0088CC" }}
      >
        Home
      </Link>
      <Link
        as={RouterNavLink}
        to="/products/1"
        _activeLink={{ color: "#0088CC" }}
        _hover={{ textDecoration: "none", color: "#0088CC" }}
      >
        Products
      </Link>
    </Flex>
  );
}
