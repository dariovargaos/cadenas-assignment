import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

//components
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Flex w="100%" justify="center">
      <Flex flexDir="column" w="60%" gap={10}>
        <Navbar />

        <Outlet />
      </Flex>
    </Flex>
  );
}
