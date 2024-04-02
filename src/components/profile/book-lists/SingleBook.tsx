import {
  Avatar,
  Button,
  Flex,
  Heading,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import UploadBook from "../UploadBook";
import { IBook } from "../../../constants/interface";

export default function SingleBook({
  book,
  setList,
}: {
  book: IBook;
  setList?: (e: Array<IBook>) => void;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <UploadBook
        setList={setList}
        data={book}
        isOpen={isOpen}
        onClose={onClose}
        type="edit"
      />
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        borderBottom="1px solid #ccc"
        py="0.3rem"
      >
        <Flex w="50%" align="center" gap="1rem">
          <Avatar name="mr candie" src={book?.cover_url} size="md" />
          <Flex align="start" direction="column" gap="0.5rem">
            <Heading
              fontSize={{ lg: 16, md: 15, base: 14 }}
              color="#333"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {book?.name}
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
        </Flex>
        <Flex w="50%" align="center" justify="space-around">
          <Tag fontSize={{ lg: 15, md: 15, base: 12 }} colorScheme="green">
            {book?.status?.toUpperCase()}
          </Tag>
          <Button onClick={onOpen} size="xs">
            <FaEye />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
