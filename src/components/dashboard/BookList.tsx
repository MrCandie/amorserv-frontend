import { Flex } from "@chakra-ui/react";
import BookItem from "./BookItem";
import { IBook } from "../../constants/interface";

export default function BookList({ list }: { list: Array<IBook> }) {
  return (
    <Flex
      w="100%"
      align="center"
      wrap="wrap"
      justify="space-between"
      gap="1rem"
    >
      {list?.map((book, i) => (
        <BookItem book={book} key={i} />
      ))}
    </Flex>
  );
}
