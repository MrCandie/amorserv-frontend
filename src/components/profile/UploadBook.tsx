import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import ReusableModal from "../reusables/ReusableModal";
import { MdCloudUpload } from "react-icons/md";
import CustomInput from "../reusables/CustomInput";
import { useEffect, useState } from "react";
import SelectComponent from "../reusables/Select";
import { Preview } from "mrcandie-react-preview";
import { createBook, listCategories, uploadFile } from "../../util/http";
import { ICategory } from "../../constants/interface";

export default function UploadBook({
  isOpen,
  onClose,
  type = "create",
}: {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
}) {
  const [book, setBook] = useState("");
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    cover_url: "",
    url: "",
  });

  useEffect(() => {
    const isDisabled =
      formData.name && formData.author && formData.category && book && cover;
    setDisabled(!isDisabled);
  }, [formData, book, cover]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await listCategories();
        setCategories(res?.data?.map((el: ICategory) => el.name));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function uploadHandler() {
    if (
      !formData.name ||
      !formData.author ||
      !formData.category ||
      !book ||
      !cover
    ) {
      toast({
        title: "Fill out all fields to proceed",
        description: "",
        status: "warning",
        position: "top-left",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const coverData = await uploadFile({ image: cover });
      const bookData = await uploadFile({ image: book });
      setFormData({
        ...formData,
        cover_url: coverData.data.url,
        url: bookData.data.url,
      });
      console.log(formData);
      const res = await createBook({
        ...formData,
        url: bookData.data.url,
        cover_url: coverData.data.url,
      });
      console.log(res);
      toast({
        title: `Upload successful`,
        description: ``,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onClose();
      setFormData({
        name: "",
        author: "",
        category: "",
        url: "",
        cover_url: "",
      });
    } catch (error: any) {
      toast({
        title: `${error?.response?.data.message || "something went wrong"}`,
        description: ``,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

    setLoading(false);
  }

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} title="Upload a book">
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <label
          htmlFor="file"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: 10,
            cursor: "pointer",
            fontWeight: "medium",
          }}
        >
          <Input
            onChange={(e: any) => setCover(e.target.files[0])}
            display="none"
            id="file"
            type="file"
          />
          <MdCloudUpload size={50} color="#333" />
          Upload book cover (jpg, jpeg, png, svg)
        </label>
        {cover && <Preview file={cover} />}
        <CustomInput
          onChange={(e: any) => setBook(e.target.files[0])}
          label="Upload Book"
          type="file"
        />
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
          options={categories || []}
          placeholder="Categories"
          label="Category"
        />
        <Flex w="100%" align="center" gap="1rem">
          {type === "edit" && (
            <Button w="100%" colorScheme="red" size="md">
              Delete
            </Button>
          )}
          <Button
            onClick={uploadHandler}
            isLoading={loading}
            loadingText=""
            w="100%"
            bg="brand.100"
            color="#fff"
            size="md"
            isDisabled={disabled}
          >
            {type === "create" ? "Create" : "Save"}
          </Button>
        </Flex>
      </Flex>
    </ReusableModal>
  );
}
