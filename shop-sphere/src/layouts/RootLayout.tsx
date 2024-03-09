import { Outlet } from "react-router-dom";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

//components
import Navbar from "../components/Navbar";

export default function RootLayout() {
  const isSmallScreen = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex w="100%" justify="center">
      <Flex flexDir="column" w={isSmallScreen ? "90%" : "60%"} gap={5}>
        <Navbar />

        <Outlet />
      </Flex>
    </Flex>
  );
}
