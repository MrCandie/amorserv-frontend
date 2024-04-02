import { Flex } from "@chakra-ui/react";
import BookItem from "./BookItem";

export default function BookList() {
  return (
    <Flex
      w="100%"
      align="center"
      wrap="wrap"
      justify="space-between"
      gap="1rem"
    >
      {[
        11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map((_, i) => (
        <BookItem key={i} />
      ))}
    </Flex>
  );
}
