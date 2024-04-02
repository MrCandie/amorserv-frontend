import { Button, Flex } from "@chakra-ui/react";
import ReusableModal from "../reusables/ReusableModal";
import { MdCloudUpload } from "react-icons/md";
import CustomInput from "../reusables/CustomInput";
import { useState } from "react";
import SelectComponent from "../reusables/Select";

export default function UploadBook({
  isOpen,
  onClose,
  type = "create",
}: {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    cover: "",
  });
  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} title="Upload a book">
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Flex
          align="center"
          justify="center"
          w="100%"
          p="1rem"
          border="1px solid #ccc"
          direction="column"
          gap="1rem"
          borderRadius={10}
          fontWeight="medium"
          cursor="pointer"
        >
          <MdCloudUpload size={50} color="#333" />
          Upload book cover (jpg, jpeg, png, svg)
        </Flex>
        <CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
          value={formData.name}
          label="Book Name"
          placeholder="Book Name"
        />
        <CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, author: e.target.value })
          }
          value={formData.author}
          label="Author"
          placeholder="Author"
        />
        <SelectComponent
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, category: e.target.value })
          }
          value={formData.category}
          options={["rpmance"]}
          placeholder="This week"
          label="Category"
        />
        <Flex w="100%" align="center" gap="1rem">
          {type === "edit" && (
            <Button w="100%" colorScheme="red" size="md">
              Delete
            </Button>
          )}
          <Button w="100%" bg="brand.100" color="#fff" size="md">
            {type === "create" ? "Create" : "Save"}
          </Button>
        </Flex>
      </Flex>
    </ReusableModal>
  );
}
