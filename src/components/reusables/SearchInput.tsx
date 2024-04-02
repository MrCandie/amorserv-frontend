import { Button, Flex, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchInput({
  onClick,
  loading,
  setValue,
  value,
  placeholder,
}: {
  onClick: () => void;
  loading?: boolean;
  setValue: (e: string) => void;
  value: string;
  placeholder: string;
}) {
  return (
    <Flex w="100%" align="center" gap="1rem">
      <Input
        w="100%"
        focusBorderColor="brand.200"
        onChange={(e) => setValue(e.target.value.trim())}
        placeholder={`Search ${placeholder}`}
        value={value}
      />

      <Button
        onClick={onClick}
        isLoading={loading}
        loadingText=""
        variant="solid"
        bg="brand.100"
        color="white"
      >
        <BsSearch />
      </Button>
    </Flex>
  );
}
