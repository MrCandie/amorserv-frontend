import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import UploadBook from "./UploadBook";
import List from "./book-lists/List";

export default function Upload() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <UploadBook isOpen={isOpen} onClose={onClose} />
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Flex w="100%" align="end" justify="end">
          <Button
            onClick={onOpen}
            leftIcon={<FaPlus />}
            bg="brand.100"
            color="#fff"
          >
            Upload
          </Button>
        </Flex>
        <List />
      </Flex>
    </>
  );
}
