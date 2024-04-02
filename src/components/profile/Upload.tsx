import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import UploadBook from "./UploadBook";
import List from "./book-lists/List";
import { IBook } from "../../constants/interface";

export default function Upload({
  list,
  setList,
}: {
  list: Array<IBook>;
  setList: (e: Array<IBook>) => void;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <UploadBook setList={setList} isOpen={isOpen} onClose={onClose} />
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
        <List list={list} setList={setList} />
      </Flex>
    </>
  );
}
