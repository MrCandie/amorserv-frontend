import { Flex, Heading, Text } from "@chakra-ui/react";

export default function SubHeader() {
  return (
    <Flex w="100%" align="center" gap="1rem">
      <Flex
        w={{ lg: "30%", md: "30%", base: "100%" }}
        h="200px"
        bg="linear-gradient(to top, #09203f 0%, #537895 100%)"
        borderRadius={16}
        align="start"
        direction="column"
        gap="1rem"
        p="1rem"
        justify="center"
      >
        <Heading
          fontSize={{ lg: 18, md: 17, base: 16 }}
          color="#fff"
          fontWeight="bold"
          textTransform="capitalize"
        >
          today's quote
        </Heading>
        <Text
          fontSize={{ lg: 15, md: 15, base: 14 }}
          color="#fff"
          fontWeight="normal"
          textTransform="capitalize"
        >
          when you truly want something, the universe conspires to help you
          achieve it
        </Text>
        <Flex w="100%" align="end" justify="end">
          <Heading
            fontSize={{ lg: 18, md: 17, base: 16 }}
            color="#fff"
            fontWeight="bold"
            textTransform="capitalize"
          >
            the alchemist
          </Heading>
        </Flex>
      </Flex>

      <Flex
        flex="1"
        border="1px solid #09203f"
        h="200px"
        borderRadius={16}
        display={{ lg: "flex", md: "none", base: "none" }}
      ></Flex>
    </Flex>
  );
}
