import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as="main" flexDir="column" gap={5} p={2}>
      <Heading as="h2">Welcome</Heading>
      <Text>Only quality products from quality shop...</Text>
      <Image src="https://via.placeholder.com/1200x200" alt="site banner" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
        nisl risus, nec dapibus dolor fermentum a. Aliquam suscipit vehicula
        ante, eu semper purus. Nulla facilisi. Donec enim tellus, sodales sit
        amet accumsan vitae, tempus ut lacus. Aliquam a blandit neque, eget
        pretium arcu. Nullam suscipit justo et pharetra luctus. Donec porta
        mauris nisl, quis hendrerit nisl finibus in. Donec egestas pulvinar
        hendrerit. Quisque imperdiet mauris ligula. Integer at luctus est, eget
        ullamcorper ex. Pellentesque tristique sodales metus, in efficitur diam
        malesuada vitae. Fusce mattis malesuada dui sit amet dictum. Proin porta
        venenatis elementum. Mauris rhoncus tincidunt ipsum, quis vestibulum
        dolor semper vel. Aenean aliquet blandit purus non elementum. Nulla
        venenatis ut mauris quis faucibus. Morbi in finibus elit, eu porta
        lectus.
      </Text>
    </Flex>
  );
}
