import { Flex, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../reusables/Wrapper";
import SubHeader from "./SubHeader";
import BookList from "./BookList";

export default function Dashboard() {
  return (
    <Wrapper title="Home">
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <SubHeader />
        <Flex w="100%" align="start" direction="column" gap="1rem">
          <Heading
            fontSize={{ lg: 16, md: 15, base: 14 }}
            color="#333"
            fontWeight="medium"
            textTransform="capitalize"
          >
            Hello candie
          </Heading>
          <Text
            fontSize={{ lg: 18, md: 18, base: 16 }}
            color="brand.100"
            fontWeight="bold"
            textTransform="capitalize"
          >
            recommended for you
          </Text>
          <BookList />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
