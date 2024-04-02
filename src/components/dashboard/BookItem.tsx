import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../reusables/Image";
import { MdFileDownload } from "react-icons/md";

export default function BookItem() {
  return (
    <Flex
      w={{ lg: "17%", md: "45%", base: "47%" }}
      align="start"
      direction="column"
      boxShadow="md"
      p="1rem"
      cursor="pointer"
      _hover={{ opacity: "90%", boxShadow: "lg" }}
      border="1px solid #eee"
      bg="#fff"
    >
      <Box w="100%">
        <ImageComponent src="/cover.jpeg" height="250px" alt="book" />
      </Box>
      <Flex w="100%" align="center" justify="space-between">
        <Flex align="start" direction="column" gap="0.5rem">
          <Heading
            fontSize={{ lg: 16, md: 15, base: 14 }}
            color="#333"
            fontWeight="medium"
            textTransform="capitalize"
          >
            the alchemist
          </Heading>
          <Text
            fontSize={{ lg: 16, md: 16, base: 15 }}
            color="brand.100"
            fontWeight="bold"
            textTransform="capitalize"
          >
            mr candie
          </Text>
        </Flex>
        <Button size="sm" bg="brand.100" color="#fff">
          <MdFileDownload />
        </Button>
      </Flex>
    </Flex>
  );
}
