import { Button, Flex, useToast } from "@chakra-ui/react";
import CustomInput from "../reusables/CustomInput";
import { useEffect, useState } from "react";
import { FaUser, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { editProfile } from "../../util/http";

export default function UserDetails({ user }: any) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    twitter: "",
    website: "",
  });

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      linkedin: user?.linkedin,
      twitter: user?.twitter,
      website: user?.website,
    });
  }, [user]);

  async function editHandler() {
    try {
      setLoading(true);
      const res = await editProfile(formData);
      setFormData({
        name: res?.data?.name,
        email: res?.data?.email,
        linkedin: res?.data?.linkedin,
        twitter: res?.data?.twitter,
        website: res?.data?.website,
      });
      toast({
        title: `Successful`,
        description: ``,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
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
    <Flex w="100%" align="start" direction="column" gap="1rem">
      <CustomInput
        placeholder="Full Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, name: e.target.value })
        }
        value={formData.name}
        label="Full Name"
        icon={<FaUser />}
      />
      <CustomInput
        label="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, email: e.target.value })
        }
        value={formData.email}
        placeholder="example@gmail.com"
        icon={<FaUser />}
        readOnly={true}
      />
      <CustomInput
        label="twitter"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, twitter: e.target.value })
        }
        value={formData.twitter}
        placeholder="@candie_code"
        icon={<BsTwitterX />}
      />
      <CustomInput
        label="linkedin"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, linkedin: e.target.value })
        }
        value={formData.linkedin}
        placeholder="mr candie"
        icon={<FaLinkedinIn />}
      />
      <CustomInput
        label="website"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, website: e.target.value })
        }
        value={formData.website}
        placeholder="www.mrcandie.com"
        icon={<TbWorldWww />}
      />
      <Button
        isLoading={loading}
        loadingText=""
        onClick={editHandler}
        w="100%"
        bg="brand.100"
        color="#fff"
        size="md"
      >
        Save
      </Button>
    </Flex>
  );
}
