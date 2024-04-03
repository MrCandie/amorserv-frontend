import { Flex } from "@chakra-ui/react";
import SelectComponent from "../reusables/Select";

export default function Filter({
  categories,
  filter,
  setFilter,
}: {
  categories: Array<string>;
  filter: string;
  setFilter: (e: string) => void;
}) {
  return (
    <Flex w="100%" align="center" gap="1rem">
      <Flex>
        <SelectComponent
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFilter(e.target.value)
          }
          value={filter}
          options={categories || []}
          placeholder="Category"
        />
      </Flex>
    </Flex>
  );
}
