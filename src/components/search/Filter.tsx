import { Flex } from "@chakra-ui/react";
import SelectComponent from "../reusables/Select";
import { useState } from "react";

export default function Filter({ categories }: { categories: Array<string> }) {
  const [formData, setFormData] = useState({
    category: "",
    author: "",
    date: "",
  });
  return (
    <Flex w="100%" align="center" gap="1rem">
      <Flex>
        <SelectComponent
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, category: e.target.value })
          }
          value={formData.category}
          options={categories || []}
          placeholder="Category"
        />
      </Flex>

      {false && (
        <Flex>
          <SelectComponent
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFormData({ ...formData, author: e.target.value })
            }
            value={formData.author}
            options={["rpmance"]}
            placeholder="Author"
          />
        </Flex>
      )}

      <Flex>
        <SelectComponent
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, date: e.target.value })
          }
          value={formData.date}
          options={["rpmance"]}
          placeholder="This week"
        />
      </Flex>
    </Flex>
  );
}
