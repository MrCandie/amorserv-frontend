import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "../reusables/Image";
import { MdFileDownload } from "react-icons/md";
import { IBook } from "../../constants/interface";

export default function BookItem({
  book,
  show = true,
  height,
}: {
  book: IBook;
  show?: boolean;
  height?: string;
}) {
  return (
    <Flex
      w={{ lg: "17%", md: "45%", base: "47%" }}
      align="start"
      direction="column"
      boxShadow={height ? "" : "md"}
      p="1rem"
      cursor="pointer"
      _hover={{ opacity: "90%", boxShadow: "lg" }}
      border="1px solid #eee"
      bg="#fff"
    >
      <Box w="100%" display={{ lg: "block", md: "none", base: "none" }}>
        <ImageComponent
          src={book?.cover_url}
          height={height ? height : "200px"}
          alt="book"
        />
      </Box>
      <Box w="100%" display={{ lg: "none", md: "block", base: "block" }}>
        <ImageComponent src={book?.cover_url} height="150px" alt="book" />
      </Box>
      {show && (
        <Flex w="100%" align="center" justify="space-between">
          <Flex align="start" direction="column" gap="0.5rem">
            <Heading
              fontSize={{ lg: 16, md: 15, base: 14 }}
              color="#333"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {book?.name
                ? book?.name
                    ?.slice(0, 20)
                    .padEnd(
                      book?.name?.length > 20 ? 22 : book?.name?.length,
                      "."
                    )
                : ""}
            </Heading>
            <Text
              fontSize={{ lg: 16, md: 16, base: 15 }}
              color="brand.100"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {book?.author}
            </Text>
          </Flex>
          <a href={book?.url} target="_blank" download={book.name}>
            <Button size="sm" bg="brand.100" color="#fff">
              <MdFileDownload />
            </Button>
          </a>
        </Flex>
      )}
    </Flex>
  );
}
