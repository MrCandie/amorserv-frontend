import { Flex } from "@chakra-ui/react";
import SingleBook from "./SingleBook";
import { IBook } from "../../../constants/interface";

export default function List({
  list,
  setList,
}: {
  list: Array<IBook>;
  setList?: (e: Array<IBook>) => void;
}) {
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
      {list?.reverse()?.map((book, i) => (
        <SingleBook setList={setList} book={book} key={i} />
      ))}
    </Flex>
  );
}
