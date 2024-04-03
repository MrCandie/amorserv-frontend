import { Flex, Heading, Text } from "@chakra-ui/react";
import BookItem from "./BookItem";
import { IBook } from "../../constants/interface";
import { useEffect, useState } from "react";
import { getQuotes } from "../../util/http";

interface IQuote {
  author: string;
  quote: string;
  category?: string;
}

export default function SubHeader({ list }: { list: Array<IBook> }) {
  const [quote, setQuote] = useState<IQuote>({
    author: "",
    quote: "",
    category: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQuotes();
        setQuote(res[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
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
        overflow="scroll"
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
          {quote?.quote}
        </Text>
        <Flex w="100%" align="end" justify="end">
          <Heading
            fontSize={{ lg: 18, md: 17, base: 16 }}
            color="#fff"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {quote?.author}
          </Heading>
        </Flex>
      </Flex>

      <Flex
        flex="1"
        border="1px solid #09203f"
        h="200px"
        borderRadius={16}
        display={{ lg: "flex", md: "none", base: "none" }}
        align="center"
        gap="1rem"
        justify="center"
      >
        {list?.map((book, i) => (
          <BookItem book={book} key={i} show={false} height="130px" />
        ))}
      </Flex>
    </Flex>
  );
}
