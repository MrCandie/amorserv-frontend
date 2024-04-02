import { Flex } from "@chakra-ui/react";
import SingleBook from "./SingleBook";

export default function List() {
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
      {[
        11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map((_, i) => (
        <SingleBook key={i} />
      ))}
    </Flex>
  );
}
